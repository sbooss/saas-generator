import Head from 'next/head';

export default function Privacy() {
  const sectionStyle = {
    minHeight: '100vh',
    background: '#0a0a0a',
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    color: '#ccc'
  };

  const contentStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '80px 24px 60px'
  };

  const h1Style = {
    fontSize: '36px',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '8px'
  };

  const dateStyle = {
    color: '#666',
    fontSize: '14px',
    marginBottom: '48px',
    paddingBottom: '24px',
    borderBottom: '1px solid rgba(255,255,255,0.06)'
  };

  const h2Style = {
    fontSize: '20px',
    fontWeight: 600,
    color: '#fff',
    marginTop: '36px',
    marginBottom: '12px'
  };

  const pStyle = {
    lineHeight: 1.7,
    marginBottom: '12px',
    fontSize: '15px',
    color: '#999'
  };

  const liStyle = {
    lineHeight: 1.8,
    fontSize: '15px',
    color: '#999',
    marginBottom: '4px'
  };

  return (
    <>
      <Head>
        <title>Politica de Privacidade - SaaS Generator</title>
      </Head>
      <div style={sectionStyle}>
        <div style={contentStyle}>
          <a href="/" style={{ color: '#6366f1', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '32px' }}>{'<'} Voltar ao site</a>
          <h1 style={h1Style}>Politica de Privacidade</h1>
          <p style={dateStyle}>Ultima atualizacao: 18 de setembro de 2026</p>

          <h2 style={h2Style}>1. Informacoes que Coletamos</h2>
          <p style={pStyle}>Coletamos informacoes que voce nos fornece diretamente:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={liStyle}>Nome e email ao criar uma conta</li>
            <li style={liStyle}>Informacoes de pagamento para processar assinaturas</li>
            <li style={liStyle}>Dados de uso do servico (paginas visitadas, acoes)</li>
            <li style={liStyle}>Informacoes de criacao de landing pages</li>
          </ul>

          <h2 style={h2Style}>2. Como Usamos suas Informacoes</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={liStyle}>Fornecer e melhorar nosso servico</li>
            <li style={liStyle}>Processar pagamentos e gerenciar assinaturas</li>
            <li style={liStyle}>Enviar comunicacoes sobre sua conta</li>
            <li style={liStyle}>Fornecer suporte ao cliente</li>
            <li style={liStyle}>Enviar emails de marketing (com opt-out)</li>
          </ul>

          <h2 style={h2Style}>3. Compartilhamento de Dados</h2>
          <p style={pStyle}>Nao vendemos suas informacoes pessoais. Podemos compartilhar dados com:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={liStyle}>Processadores de pagamento (Mercado Pago)</li>
            <li style={liStyle}>Servicos de hospedagem (Vercel)</li>
            <li style={liStyle}>Analytics (Facebook Pixel)</li>
          </ul>

          <h2 style={h2Style}>4. Cookies e Rastreamento</h2>
          <p style={pStyle}>Utilizamos cookies e pixels de rastreamento (Facebook Pixel) para melhorar a experiencia e medir performance de campanhas de marketing.</p>

          <h2 style={h2Style}>5. Seguranca</h2>
          <p style={pStyle}>Implementamos medidas de seguranca para proteger seus dados. Nenhuma transmissao pela internet e 100% segura, mas fazemos o possivel para proteger suas informacoes.</p>

          <h2 style={h2Style}>6. Seus Direitos</h2>
          <p style={pStyle}>Voce pode:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={liStyle}>Acessar seus dados pessoais</li>
            <li style={liStyle}>Solicitar exclusao de seus dados</li>
            <li style={liStyle}>Cancelar sua assinatura a qualquer momento</li>
            <li style={liStyle}>Solicitar exportacao de seus dados</li>
          </ul>

          <h2 style={h2Style}>7. Retencao de Dados</h2>
          <p style={pStyle}>Mantemos seus dados pelo tempo necessario para fornecer o servico e cumprir obrigacoes legais. Apos cancelamento, dados sao removidos em ate 90 dias.</p>

          <h2 style={h2Style}>8. Contato</h2>
          <p style={pStyle}>Duvidas sobre privacidade? Envie email para: <a href="mailto:vendassmercado2@gmail.com" style={{color:'#6366f1'}}>vendassmercado2@gmail.com</a></p>
        </div>
      </div>
    </>
  );
}
