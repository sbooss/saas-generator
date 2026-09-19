import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [pages, setPages] = useState([]);
  const [showGenerator, setShowGenerator] = useState(false);
  const [generatorForm, setGeneratorForm] = useState({
    niche: 'saude',
    businessName: '',
    description: ''
  });

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleGenerate = async () => {
    if (!generatorForm.businessName) {
      alert('Digite o nome da empresa');
      return;
    }

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
          url: `#${data.content.template.title}`
        };
        setPages([...pages, newPage]);
        setShowGenerator(false);
        alert('Landing page criada com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao gerar:', error);
    }
  };

  if (!user) {
    return (
      <div className={styles.container}>
        <p>Você precisa estar logado. <a href="/login">Faça login</a></p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Painel - SaaS Generator</title>
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>SaaS Generator</h1>
          <div className={styles.userInfo}>
            <span>Olá, {user.name}</span>
            <button onClick={() => { localStorage.removeItem('user'); window.location.href = '/login'; }}>
              Sair
            </button>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <h3>{pages.length}</h3>
              <p>Landing Pages</p>
            </div>
            <div className={styles.statCard}>
              <h3>R$ {pages.length * 97}</h3>
              <p>Receita Mensal</p>
            </div>
          </div>

          <div className={styles.actions}>
            <button 
              className={styles.createButton}
              onClick={() => setShowGenerator(true)}
            >
              + Criar Nova Landing Page
            </button>
          </div>

          {showGenerator && (
            <div className={styles.generator}>
              <h2>Gerador de Landing Pages</h2>
              <div className={styles.formGroup}>
                <label>Nicho:</label>
                <select 
                  value={generatorForm.niche}
                  onChange={(e) => setGeneratorForm({...generatorForm, niche: e.target.value})}
                >
                  <option value="saude">Saúde</option>
                  <option value="tecnologia">Tecnologia</option>
                  <option value="imobiliario">Imobiliário</option>
                  <option value="educacao">Educação</option>
                  <option value="default">Outro</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Nome da Empresa:</label>
                <input 
                  type="text"
                  value={generatorForm.businessName}
                  onChange={(e) => setGeneratorForm({...generatorForm, businessName: e.target.value})}
                  placeholder="Ex: Clínica Saúde Total"
                />
              </div>
              <div className={styles.formGroup}>
                <label>Descrição (opcional):</label>
                <textarea
                  value={generatorForm.description}
                  onChange={(e) => setGeneratorForm({...generatorForm, description: e.target.value})}
                  placeholder="Descreva brevemente o negócio"
                />
              </div>
              <div className={styles.formActions}>
                <button onClick={handleGenerate}>Gerar Landing Page</button>
                <button onClick={() => setShowGenerator(false)}>Cancelar</button>
              </div>
            </div>
          )}

          <div className={styles.pagesList}>
            <h2>Suas Landing Pages</h2>
            {pages.length === 0 ? (
              <p className={styles.empty}>Nenhuma landing page criada ainda.</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Nicho</th>
                    <th>Data</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {pages.map(page => (
                    <tr key={page.id}>
                      <td>{page.name}</td>
                      <td>{page.niche}</td>
                      <td>{page.created}</td>
                      <td>
                        <button>Editar</button>
                        <button>Excluir</button>
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
