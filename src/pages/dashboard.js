import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [pages, setPages] = useState([]);
  const [showGenerator, setShowGenerator] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [previewPage, setPreviewPage] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('saas_current_user');
    if (!saved) { router.push('/login'); return; }
    setUser(JSON.parse(saved));
    const savedPages = localStorage.getItem('saas_pages');
    if (savedPages) setPages(JSON.parse(savedPages));
  }, []);

  const handleGenerate = async () => {
    if (!description.trim()) { alert('Descreva como voce quer sua pagina'); return; }
    setGenerating(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description })
      });
      const data = await response.json();
      if (data.success) {
        const newPage = {
          id: Date.now(),
          name: data.content.title || 'Landing Page',
          created: new Date().toLocaleDateString('pt-BR'),
          html: data.content.html,
          description: description
        };
        const updated = [...pages, newPage];
        setPages(updated);
        localStorage.setItem('saas_pages', JSON.stringify(updated));
        setShowGenerator(false);
        setDescription('');
        setPreviewPage(newPage);
        setShowPreview(true);
      } else {
        alert('Erro ao gerar: ' + (data.error || 'Tente novamente'));
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao conectar. Tente novamente.');
    }
    setGenerating(false);
  };

  const handleDelete = (id) => {
    if (!confirm('Excluir esta landing page?')) return;
    const updated = pages.filter(p => p.id !== id);
    setPages(updated);
    localStorage.setItem('saas_pages', JSON.stringify(updated));
  };

  if (!user) return null;

  return (
    <>
      <Head><title>Painel - SaaS Generator</title></Head>
      <div className={styles.container}>
        {showPreview && previewPage && (
          <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'#000',zIndex:1000,display:'flex',flexDirection:'column'}}>
            <div style={{background:'rgba(10,10,10,0.95)',borderBottom:'1px solid rgba(255,255,255,0.1)',padding:'12px 24px',display:'flex',justifyContent:'space-between',alignItems:'center',flexShrink:0}}>
              <span style={{color:'#fff',fontWeight:600,fontSize:'15px'}}>{previewPage.name}</span>
              <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                <button onClick={() => {
                  const blob = new Blob([previewPage.html], {type:'text/html'});
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = previewPage.name.replace(/\s+/g, '_') + '.html';
                  a.click();
                  URL.revokeObjectURL(url);
                }} style={{background:'linear-gradient(135deg,#22c55e,#16a34a)',color:'#fff',border:'none',padding:'10px 20px',borderRadius:'10px',fontSize:'13px',fontWeight:600,cursor:'pointer',display:'flex',alignItems:'center',gap:'6px'}}>
                  Baixar HTML
                </button>
                <button onClick={() => setShowPreview(false)} style={{background:'rgba(255,255,255,0.08)',color:'#999',border:'1px solid rgba(255,255,255,0.1)',padding:'10px 16px',borderRadius:'10px',fontSize:'13px',cursor:'pointer'}}>
                  Fechar
                </button>
              </div>
            </div>
            <iframe srcDoc={previewPage.html} style={{flex:1,border:'none',width:'100%',height:'100%',background:'#fff'}} title="Preview" />
          </div>
        )}

        <header className={styles.header}>
          <h1>SaaS Generator</h1>
          <div className={styles.headerRight}>
            <span className={styles.userName}>Ola, {user.name}</span>
            <button className={styles.logoutBtn} onClick={() => { localStorage.removeItem('saas_current_user'); router.push('/login'); }}>Sair</button>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.welcomeBanner}>
            <h2>Bem-vindo, {user.name}</h2>
            <p>Descreva como voce quer sua pagina e a IA cria para voce.</p>
          </div>

          <div className={styles.stats}>
            <div className={styles.statCard}><h3>{pages.length}</h3><p>Paginas Criadas</p></div>
            <div className={styles.statCard}><h3>{pages.length > 0 ? 'Ativo' : 'Gratuito'}</h3><p>Plano</p></div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Suas Landing Pages</h2>
              <button className={styles.createBtn} onClick={() => setShowGenerator(true)}>+ Criar Nova</button>
            </div>

            {showGenerator && (
              <div className={styles.generator}>
                <h3 style={{marginTop:0,marginBottom:'8px',fontSize:'20px',fontWeight:700,color:'#fff'}}>Criar Landing Page</h3>
                <p style={{color:'#888',fontSize:'14px',marginBottom:'20px',lineHeight:'1.6'}}>Escreva tudo que voce quer: nome do negocio, estilo, cores, o que deve ter na pagina, telefone, endereco, instagram... Quanto mais detalhes, melhor o resultado.</p>

                <div className={styles.formGroup} style={{marginBottom:'24px'}}>
                  <textarea
                    rows={8}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={"Exemplo:\n\nClinica medica chamada Vida Plena. Quero uma pagina elegante e dourada com fundo escuro. O titulo principal deve ser sobre saude preventiva. Preciso de 4 secoes: beneficios, equipe medica, depoimentos de pacientes e contato. Meu telefone e (11) 99999-9999, endereco na Rua das Flores 123 em Sao Paulo. Instagram @vidaplena. WhatsApp 11999999999. Quero um botao verde de WhatsApp e um rosa para Instagram."}
                    style={{resize:'vertical',minHeight:'200px',width:'100%',padding:'16px',background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'12px',color:'#fff',fontSize:'14px',lineHeight:'1.7',fontFamily:'Inter, sans-serif'}}
                  />
                </div>

                <div className={styles.formActions}>
                  <button className={styles.primary} onClick={handleGenerate} disabled={generating}>
                    {generating ? 'Gerando sua pagina...' : 'Gerar Landing Page'}
                  </button>
                  <button className={styles.secondary} onClick={() => { setShowGenerator(false); setDescription(''); }}>Cancelar</button>
                </div>
              </div>
            )}

            {pages.length === 0 && !showGenerator ? (
              <div className={styles.empty}>
                <div style={{fontSize:'48px',marginBottom:'16px',opacity:0.3}}>&#128196;</div>
                <p>Nenhuma landing page criada ainda.</p>
                <p style={{fontSize:'13px',marginTop:'8px',color:'#555'}}>Clique em "+ Criar Nova" para comecar.</p>
              </div>
            ) : (
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'16px'}}>
                {pages.map(page => (
                  <div key={page.id} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)',borderRadius:'16px',padding:'24px'}}>
                    <h3 style={{fontSize:'16px',fontWeight:600,marginBottom:'4px',color:'#fff'}}>{page.name}</h3>
                    <p style={{fontSize:'12px',color:'#555',marginBottom:'16px'}}>{page.created}</p>
                    <div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
                      <button className={styles.editBtn} onClick={() => {setPreviewPage(page);setShowPreview(true)}}>Visualizar</button>
                      <button className={styles.editBtn} onClick={() => {
                        setDescription(page.description || '');
                        handleDelete(page.id);
                        setShowGenerator(true);
                      }}>Regenerar</button>
                      <button className={styles.deleteBtn} onClick={() => handleDelete(page.id)}>Excluir</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}