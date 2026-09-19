import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Login() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const APP_ID = '1758403262661304';
  const REDIRECT_URI = 'https://saasgenerator.vercel.app/login';

  useEffect(() => {
    // Verificar se retornou do Facebook OAuth
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
      handleFacebookCallback(code);
    }
  }, []);

  const handleFacebookLogin = () => {
    const facebookUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${APP_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=email,public_profile&response_type=code`;
    
    window.location.href = facebookUrl;
  };

  const handleFacebookCallback = async (code) => {
    setLoading(true);
    try {
      const response = await fetch('/api/auth/facebook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      });
      
      const data = await response.json();
      if (data.user) {
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
      }
    } catch (error) {
      console.error('Erro no login:', error);
    }
    setLoading(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  if (user) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Bem-vindo, {user.name}!</h1>
        <p>Email: {user.email}</p>
        <img src={user.picture?.data?.url} alt="Foto" style={{ borderRadius: '50%', width: '100px' }} />
        <br /><br />
        <button onClick={handleLogout} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Sair
        </button>
        <br /><br />
        <a href="/dashboard">Ir para o Painel</a>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Login - SaaS Generator</title>
      </Head>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          textAlign: 'center',
          maxWidth: '400px'
        }}>
          <h1 style={{ color: '#333', marginBottom: '30px' }}>SaaS Generator</h1>
          <p style={{ color: '#666', marginBottom: '30px' }}>Entre com sua conta</p>
          
          <button
            onClick={handleFacebookLogin}
            disabled={loading}
            style={{
              background: '#1877f2',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            {loading ? 'Conectando...' : 'Entrar com Facebook'}
          </button>
          
          <p style={{ marginTop: '30px', color: '#999', fontSize: '12px' }}>
            Ao entrar, você concorda com nossos<br />
            <a href="/termos">Termos de Serviço</a> e <a href="/privacidade">Política de Privacidade</a>
          </p>
        </div>
      </div>
    </>
  );
}
