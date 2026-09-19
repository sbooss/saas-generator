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
  const [form, setForm] = useState({
    businessName: '',
    niche: 'saude',
    description: '',
    address: '',
    phone: '',
    email: '',
    whatsapp: '',
    instagram: '',
    observations: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('saas_current_user');
    if (!saved) { router.push('/login'); return; }
    setUser(JSON.parse(saved));
    const savedPages = localStorage.getItem('saas_pages');
    if (savedPages) setPages(JSON.parse(savedPages));
  }, []);

  const handleGenerate = async () => {
    if (!form.businessName.trim()) { alert('Digite o nome da empresa'); return; }
    if (!form.description.trim()) { alert('Descreva como voce quer a pagina'); return; }
    setGenerating(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (data.success) {
        const newPage = {
          id: Date.now(),
          name: form.businessName,
          niche: form.niche,
          created: new Date().toLocaleDateString('pt-BR'),
          html: data.content.html,
          config: { ...form }
        };
        const updated = [...pages, newPage];
        setPages(updated);
        localStorage.setItem('saas_pages', JSON.stringify(updated));
        setShowGenerator(false);
        setForm({
          businessName: '', niche: 'saude', description: '', address: '', phone: '', email: '',
          whatsapp: '', instagram: '', observations: ''
        });
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
              <div style={{display:'flex',alignItems:'center',gap:'16px'}}>
                <span style={{color:'#fff',fontWeight:600,fontSize:'15px'}}>{previewPage.name}</span>
                <span style={{color:'#666',fontSize:'13px',textTransform:'capitalize'}}>{previewPage.niche}</span>
              </div>
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
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
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
            <p>Gerencie suas landing pages profissionais.</p>
          </div>

          <div className={styles.stats}>
            <div className={styles.statCard}><h3>{pages.length}</h3><p>Paginas Criadas</p></div>
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
                <h3 style={{marginTop:0,marginBottom:'8px',fontSize:'20px',fontWeight:700,color:'#fff'}}>Criar Landing Page</h3>
                <p style={{color:'#888',fontSize:'14px',marginBottom:'28px',lineHeight:'1.6'}}>Descreva como voce quer sua pagina. Quanto mais detalhes, melhor o resultado.</p>

                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'20px',marginBottom:'24px'}}>
                  <div className={styles.formGroup}>
                    <label>Nome da Empresa *</label>
                    <input type="text" value={form.businessName} onChange={(e) => setForm({...form, businessName: e.target.value})} placeholder="Ex: Clinica Vida Plena" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Nicho</label>
                    <select value={form.niche} onChange={(e) => setForm({...form, niche: e.target.value})}>
                      <option value="saude">Saude e Bem-Estar</option>
                      <option value="tecnologia">Tecnologia</option>
                      <option value="imobiliario">Imobiliario</option>
                      <option value="educacao">Educacao</option>
                      <option value="advocacia">Advocacia</option>
                      <option value="restaurant">Restaurante / Alimentacao</option>
                      <option value="beleza">Beleza e Estetica</option>
                      <option value="fitness">Fitness / Academia</option>
                      <option value="consultoria">Consultoria</option>
                      <option value="default">Outro</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup} style={{marginBottom:'24px'}}>
                  <label>Como voce quer a pagina? *</label>
                  <textarea rows={5} value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} placeholder="Descreva detalhadamente como voce imagina sua landing page. Ex: Quero uma pagina elegante e moderna, com foco em conversao. O hero deve ter uma frase de impacto sobre saude preventiva. Quero 3 secoes: beneficios, depoimentos e contato. Estilo minimalista com beaucoup d'espace blanc." style={{resize:'vertical',minHeight:'120px'}} />
                </div>

                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'20px',marginBottom:'24px'}}>
                  <div className={styles.formGroup}>
                    <label>Endereco</label>
                    <input type="text" value={form.address} onChange={(e) => setForm({...form, address: e.target.value})} placeholder="Rua, numero, bairro, cidade" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Telefone</label>
                    <input type="text" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} placeholder="(11) 99999-9999" />
                  </div>
                </div>

                <div className={styles.formGroup} style={{marginBottom:'28px'}}>
                  <label>Email de Contato</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="contato@empresa.com.br" />
                </div>

                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'20px',marginBottom:'28px'}}>
                  <div className={styles.formGroup}>
                    <label>WhatsApp</label>
                    <input type="text" value={form.whatsapp} onChange={(e) => setForm({...form, whatsapp: e.target.value})} placeholder="(11) 99999-9999" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Instagram</label>
                    <input type="text" value={form.instagram} onChange={(e) => setForm({...form, instagram: e.target.value})} placeholder="@seuusuario ou link" />
                  </div>
                </div>

                <div className={styles.formGroup} style={{marginBottom:'28px'}}>
                  <label>Observacoes Extras</label>
                  <textarea rows={3} value={form.observations} onChange={(e) => setForm({...form, observations: e.target.value})} placeholder="Qualquer detalhe adicional: fonte preferida, estilo especifico, referencias de sites que voce gosta, etc." style={{resize:'vertical'}} />
                </div>

                <div className={styles.formActions}>
                  <button className={styles.primary} onClick={handleGenerate} disabled={generating}>
                    {generating ? (
                      <span style={{display:'flex',alignItems:'center',gap:'8px'}}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{animation:'spin 1s linear infinite'}}><path d="M21 12a9 9 0 11-6.219-8.56"/></svg>
                        Gerando sua pagina...
                      </span>
                    ) : 'Gerar Landing Page'}
                  </button>
                  <button className={styles.secondary} onClick={() => setShowGenerator(false)}>Cancelar</button>
                </div>
              </div>
            )}

            {pages.length === 0 && !showGenerator ? (
              <div className={styles.empty}>
                <div className={styles.emptyIcon}>&#128196;</div>
                <p>Nenhuma landing page criada ainda.</p>
                <p style={{fontSize:'13px',marginTop:'8px',color:'#555'}}>Clique em "+ Criar Nova" para comecar.</p>
              </div>
            ) : (
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'16px'}}>
                {pages.map(page => (
                  <div key={page.id} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)',borderRadius:'16px',padding:'24px'}}>
                    <h3 style={{fontSize:'16px',fontWeight:600,marginBottom:'4px',color:'#fff'}}>{page.name}</h3>
                    <p style={{fontSize:'13px',color:'#666',marginBottom:'4px',textTransform:'capitalize'}}>{page.niche}</p>
                    <p style={{fontSize:'12px',color:'#555',marginBottom:'16px'}}>{page.created}</p>
                    <div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
                      <button className={styles.editBtn} onClick={() => {setPreviewPage(page);setShowPreview(true)}}>Visualizar</button>
                      <button className={styles.editBtn} onClick={() => {
                        setForm({
                          businessName: page.name,
                          niche: page.niche,
                          description: page.config?.description || '',
                          address: page.config?.address || '',
                          phone: page.config?.phone || '',
                          email: page.config?.email || '',
                          whatsapp: page.config?.whatsapp || '',
                          instagram: page.config?.instagram || '',
                          observations: page.config?.observations || ''
                        });
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
      <style jsx global>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
}