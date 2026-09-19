import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [pages, setPages] = useState([]);
  const [showGenerator, setShowGenerator] = useState(false);
  const [generatorForm, setGeneratorForm] = useState({ niche: 'saude', businessName: '', description: '' });
  const [generating, setGenerating] = useState(false);
  const [previewPage, setPreviewPage] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('saas_current_user');
    if (!saved) { router.push('/login'); return; }
    setUser(JSON.parse(saved));
    const savedPages = localStorage.getItem('saas_pages');
    if (savedPages) setPages(JSON.parse(savedPages));
  }, []);

  const handleGenerate = async () => {
    if (!generatorForm.businessName) { alert('Digite o nome da empresa'); return; }
    setGenerating(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(generatorForm)
      });
      const data = await response.json();
      if (data.success) {
        const newPage = {
          id: Date.now(),
          name: generatorForm.businessName,
          niche: generatorForm.niche,
          created: new Date().toLocaleDateString('pt-BR'),
          html: data.content.html
        };
        const updated = [...pages, newPage];
        setPages(updated);
        localStorage.setItem('saas_pages', JSON.stringify(updated));
        setShowGenerator(false);
        setGeneratorForm({ niche: 'saude', businessName: '', description: '' });
        setPreviewPage(newPage);
        setShowPreview(true);
      }
    } catch (error) {
      console.error('Erro ao gerar:', error);
      alert('Erro ao gerar landing page');
    }
    setGenerating(false);
  };

  const handleDelete = (id) => {
    if (!confirm('Tem certeza que deseja excluir?')) return;
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
            <div style={{background:'rgba(10,10,10,0.95)',borderBottom:'1px solid rgba(255,255,255,0.1)',padding:'12px 24px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <span style={{color:'#fff',fontWeight:600}}>Preview: {previewPage.name}</span>
              <div style={{display:'flex',gap:'12px'}}>
                <a href={'data:text/html;charset=utf-8,' + encodeURIComponent(previewPage.html)} download={previewPage.name + '.html'} style={{background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'#fff',padding:'8px 16px',borderRadius:'8px',fontSize:'13px',fontWeight:600,textDecoration:'none',cursor:'pointer'}}>Baixar HTML</a>
                <button onClick={() => setShowPreview(false)} style={{background:'rgba(255,255,255,0.1)',color:'#fff',border:'1px solid rgba(255,255,255,0.2)',padding:'8px 16px',borderRadius:'8px',fontSize:'13px',cursor:'pointer'}}>Fechar</button>
              </div>
            </div>
            <iframe srcDoc={previewPage.html} style={{flex:1,border:'none',width:'100%',height:'100%'}} title="Preview" />
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
            <h2>Bem-vindo, {user.name}!</h2>
            <p>Gerencie suas landing pages e acompanhe seus resultados.</p>
          </div>
          <div className={styles.stats}>
            <div className={styles.statCard}><h3>{pages.length}</h3><p>Landing Pages</p></div>
            <div className={styles.statCard}><h3>{new Set(pages.map(p => p.niche)).size}</h3><p>Nichos</p></div>
            <div className={styles.statCard}><h3>{pages.length > 0 ? 'Ativo' : 'Gratuito'}</h3><p>Plano</p></div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Suas Landing Pages</h2>
              <button className={styles.createBtn} onClick={() => setShowGenerator(true)}>+ Criar Nova</button>
            </div>
            {showGenerator && (
              <div className={styles.generator}>
                <h3 style={{marginTop:0,marginBottom:'24px',fontSize:'18px',color:'#fff'}}>Gerar Landing Page com IA</h3>
                <div className={styles.formGroup}>
                  <label>Nome da Empresa</label>
                  <input type="text" value={generatorForm.businessName} onChange={(e) => setGeneratorForm({...generatorForm, businessName: e.target.value})} placeholder="Ex: Clinica Saude Total" />
                </div>
                <div className={styles.formGroup}>
                  <label>Nicho</label>
                  <select value={generatorForm.niche} onChange={(e) => setGeneratorForm({...generatorForm, niche: e.target.value})}>
                    <option value="saude">Saude</option>
                    <option value="tecnologia">Tecnologia</option>
                    <option value="imobiliario">Imobiliario</option>
                    <option value="educacao">Educacao</option>
                    <option value="default">Outro</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Descricao (opcional)</label>
                  <textarea value={generatorForm.description} onChange={(e) => setGeneratorForm({...generatorForm, description: e.target.value})} placeholder="Descreva o negocio" />
                </div>
                <div className={styles.formActions}>
                  <button className={styles.primary} onClick={handleGenerate} disabled={generating}>{generating ? 'Gerando com IA...' : 'Gerar Landing Page'}</button>
                  <button className={styles.secondary} onClick={() => setShowGenerator(false)}>Cancelar</button>
                </div>
              </div>
            )}
            {pages.length === 0 ? (
              <div className={styles.empty}>
                <div className={styles.emptyIcon}>&#128196;</div>
                <p>Nenhuma landing page criada ainda.</p>
                <p style={{fontSize:'13px',marginTop:'8px',color:'#555'}}>Clique em "+ Criar Nova" para comecar.</p>
              </div>
            ) : (
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'16px'}}>
                {pages.map(page => (
                  <div key={page.id} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)',borderRadius:'16px',padding:'24px'}}>
                    <h3 style={{fontSize:'16px',fontWeight:600,marginBottom:'4px',color:'#fff'}}>{page.name}</h3>
                    <p style={{fontSize:'13px',color:'#666',marginBottom:'4px',textTransform:'capitalize'}}>{page.niche}</p>
                    <p style={{fontSize:'12px',color:'#555',marginBottom:'16px'}}>{page.created}</p>
                    <div style={{display:'flex',gap:'8px'}}>
                      <button className={styles.editBtn} onClick={() => {setPreviewPage(page);setShowPreview(true)}}>Visualizar</button>
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
