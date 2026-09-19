import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (isLogin) {
        const users = JSON.parse(localStorage.getItem('saas_users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          localStorage.setItem('saas_current_user', JSON.stringify(user));
          router.push('/dashboard');
        } else {
          setError('Email ou senha incorretos');
          setLoading(false);
        }
      } else {
        if (!name || !email || !password) {
          setError('Preencha todos os campos');
          setLoading(false);
          return;
        }
        if (password.length < 6) {
          setError('Senha deve ter pelo menos 6 caracteres');
          setLoading(false);
          return;
        }
        const users = JSON.parse(localStorage.getItem('saas_users') || '[]');
        if (users.find(u => u.email === email)) {
          setError('Email ja cadastrado');
          setLoading(false);
          return;
        }
        const newUser = { id: Date.now(), name, email, password, createdAt: new Date().toISOString() };
        users.push(newUser);
        localStorage.setItem('saas_users', JSON.stringify(users));
        localStorage.setItem('saas_current_user', JSON.stringify(newUser));
        router.push('/dashboard');
      }
    }, 800);
  };

  return (
    <>
      <Head>
        <title>{isLogin ? 'Entrar' : 'Criar Conta'} - SaaS Generator</title>
      </Head>
      <div style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        padding: '20px'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '440px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none'
          }} />

          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '24px',
            padding: '48px 40px',
            backdropFilter: 'blur(20px)',
            position: 'relative'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px'
              }}>
                <span style={{ fontSize: '28px', fontWeight: 800, background: 'linear-gradient(135deg, #6366f1, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  SaaS Generator
                </span>
              </div>
              <h1 style={{ color: '#fff', fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>
                {isLogin ? 'Bem-vindo de volta' : 'Criar sua conta'}
              </h1>
              <p style={{ color: '#666', fontSize: '14px' }}>
                {isLogin ? 'Entre para gerenciar suas landing pages' : 'Comece a criar landing pages profissionais'}
              </p>
            </div>

            {error && (
              <div style={{
                background: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.3)',
                borderRadius: '12px',
                padding: '12px 16px',
                marginBottom: '24px',
                color: '#ef4444',
                fontSize: '14px'
              }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', color: '#999', fontSize: '13px', marginBottom: '8px', fontWeight: 500 }}>
                    Nome completo
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '15px',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(99,102,241,0.5)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
              )}

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', color: '#999', fontSize: '13px', marginBottom: '8px', fontWeight: 500 }}>
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '15px',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(99,102,241,0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              <div style={{ marginBottom: '32px' }}>
                <label style={{ display: 'block', color: '#999', fontSize: '13px', marginBottom: '8px', fontWeight: 500 }}>
                  Senha
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={isLogin ? "Sua senha" : "Minimo 6 caracteres"}
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '15px',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(99,102,241,0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '16px',
                  background: loading ? '#555' : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s',
                  marginBottom: '24px'
                }}
              >
                {loading ? (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span style={{ width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                    Processando...
                  </span>
                ) : (
                  isLogin ? 'Entrar' : 'Criar Conta'
                )}
              </button>

              <div style={{ textAlign: 'center' }}>
                <button
                  type="button"
                  onClick={() => { setIsLogin(!isLogin); setError(''); }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#6366f1',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}
                >
                  {isLogin ? 'Nao tem conta? Criar agora' : 'Ja tem conta? Entrar'}
                </button>
              </div>
            </form>

            <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <a
                href="/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  color: '#666',
                  fontSize: '14px',
                  textDecoration: 'none'
                }}
              >
                <span>{'<'}</span> Voltar ao site
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
