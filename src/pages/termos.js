import Head from 'next/head';

export default function Terms() {
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
        <title>Termos de Servico - SaaS Generator</title>
      </Head>
      <div style={sectionStyle}>
        <div style={contentStyle}>
          <a href="/" style={{ color: '#6366f1', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '32px' }}>{'<'} Voltar ao site</a>
          <h1 style={h1Style}>Termos de Servico</h1>
          <p style={dateStyle}>Ultima atualizacao: 18 de setembro de 2026</p>

          <h2 style={h2Style}>1. Aceitacao dos Termos</h2>
          <p style={pStyle}>Ao usar o SaaS Generator, voce concorda com estes termos. Se nao concordar, nao use o servico.</p>

          <h2 style={h2Style}>2. Descricao do Servico</h2>
          <p style={pStyle}>O SaaS Generator e uma plataforma que permite criar landing pages profissionais usando inteligencia artificial. O servico inclui gerador de paginas, integracao com Mercado Pago e analytics.</p>

          <h2 style={h2Style}>3. Planos e Pagamentos</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={liStyle}><strong style={{color:'#fff'}}>Basico:</strong> R$ 97/mes - 1 Landing Page</li>
            <li style={liStyle}><strong style={{color:'#fff'}}>Profissional:</strong> R$ 197/mes - 5 Landing Pages</li>
            <li style={liStyle}><strong style={{color:'#fff'}}>Empresarial:</strong> R$ 497/mes - Ilimitado</li>
          </ul>
          <p style={pStyle}>Pagamentos processados via Mercado Pago. Assinaturas renovam automaticamente.</p>

          <h2 style={h2Style}>4. Cancelamento</h2>
          <p style={pStyle}>Voce pode cancelar sua assinatura a qualquer momento. O acesso continua ate o final do periodo pago. Nao oferecemos reembolso proporcional.</p>

          <h2 style={h2Style}>5. Uso Aceitavel</h2>
          <p style={pStyle}>Voce concorda em NAO:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={liStyle}>Usar o servico para fins ilegais ou fraudulentos</li>
            <li style={liStyle}>Tentar acessar contas de outros usuarios</li>
            <li style={liStyle}>Explorar vulnerabilidades do sistema</li>
            <li style={liStyle}>Distribuir spam ou conteudo inadequado</li>
          </ul>

          <h2 style={h2Style}>6. Propriedade Intelectual</h2>
          <p style={pStyle}>Voce mantem os direitos sobre o conteudo criado. O SaaS Generator mantem os direitos sobre a plataforma e tecnologia.</p>

          <h2 style={h2Style}>7. Limitacao de Responsabilidade</h2>
          <p style={pStyle}>O servico e fornecido "como esta". Nao garantimos disponibilidade 100% ou ausencia de erros. Nao somos responsaveis por perdas indiretas.</p>

          <h2 style={h2Style}>8. Alteracoes</h2>
          <p style={pStyle}>Podemos alterar estes termos a qualquer momento. O uso continuado do servico apos alteracoes constitui aceitacao.</p>

          <h2 style={h2Style}>9. Contato</h2>
          <p style={pStyle}>Duvidas? Envie email para: <a href="mailto:vendassmercado2@gmail.com" style={{color:'#6366f1'}}>vendassmercado2@gmail.com</a></p>
        </div>
      </div>
    </>
  );
}
