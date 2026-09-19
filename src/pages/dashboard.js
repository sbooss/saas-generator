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
          content: data.content
        };
        const updated = [...pages, newPage];
        setPages(updated);
        localStorage.setItem('saas_pages', JSON.stringify(updated));
        setShowGenerator(false);
        setGeneratorForm({ niche: 'saude', businessName: '', description: '' });
      }
    } catch (error) {
      console.error('Erro ao gerar:', error);
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
      <Head>
        <title>Painel - SaaS Generator</title>
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>SaaS Generator</h1>
          <div className={styles.headerRight}>
            <span className={styles.userName}>Ola, {user.name}</span>
            <button className={styles.logoutBtn} onClick={() => { localStorage.removeItem('saas_current_user'); router.push('/login'); }}>
              Sair
            </button>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.welcomeBanner}>
            <h2>Bem-vindo, {user.name}!</h2>
            <p>Gerencie suas landing pages e acompanhe seus resultados.</p>
          </div>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <h3>{pages.length}</h3>
              <p>Landing Pages</p>
            </div>
            <div className={styles.statCard}>
              <h3>{pages.filter(p => p.niche === 'saude').length + pages.filter(p => p.niche === 'tecnologia').length + pages.filter(p => p.niche === 'imobiliario').length + pages.filter(p => p.niche === 'educacao').length}</h3>
              <p>Nichos Ativos</p>
            </div>
            <div className={styles.statCard}>
              <h3>{pages.length > 0 ? 'Ativo' : 'Gratuito'}</h3>
              <p>Plano Atual</p>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Suas Landing Pages</h2>
              <button className={styles.createBtn} onClick={() => setShowGenerator(true)}>
                + Criar Nova
              </button>
            </div>

            {showGenerator && (
              <div className={styles.generator}>
                <h3 style={{ marginTop: 0, marginBottom: '24px', fontSize: '18px' }}>Gerar Landing Page com IA</h3>
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
                  <label>Nome da Empresa</label>
                  <input type="text" value={generatorForm.businessName} onChange={(e) => setGeneratorForm({...generatorForm, businessName: e.target.value})} placeholder="Ex: Clinica Saude Total" />
                </div>
                <div className={styles.formGroup}>
                  <label>Descricao (opcional)</label>
                  <textarea value={generatorForm.description} onChange={(e) => setGeneratorForm({...generatorForm, description: e.target.value})} placeholder="Descreva brevemente o negocio" />
                </div>
                <div className={styles.formActions}>
                  <button className={styles.primary} onClick={handleGenerate} disabled={generating}>
                    {generating ? 'Gerando...' : 'Gerar com IA'}
                  </button>
                  <button className={styles.secondary} onClick={() => setShowGenerator(false)}>Cancelar</button>
                </div>
              </div>
            )}

            {pages.length === 0 ? (
              <div className={styles.empty}>
                <div className={styles.emptyIcon}>📄</div>
                <p>Nenhuma landing page criada ainda.</p>
                <p style={{ fontSize: '13px', marginTop: '8px' }}>Clique em "+ Criar Nova" para comecar.</p>
              </div>
            ) : (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.th}>Nome</th>
                    <th className={styles.th}>Nicho</th>
                    <th className={styles.th}>Data</th>
                    <th className={styles.th}>Acoes</th>
                  </tr>
                </thead>
                <tbody>
                  {pages.map(page => (
                    <tr key={page.id}>
                      <td className={styles.td}>{page.name}</td>
                      <td className={styles.td} style={{ textTransform: 'capitalize' }}>{page.niche}</td>
                      <td className={styles.td}>{page.created}</td>
                      <td className={styles.td}>
                        <button className={styles.editBtn} onClick={() => alert('Editor em breve!')}>Editar</button>
                        <button className={styles.deleteBtn} onClick={() => handleDelete(page.id)}>Excluir</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
