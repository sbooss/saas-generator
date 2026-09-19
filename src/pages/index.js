import Head from 'next/head';
import styles from '../styles/SuperLanding.module.css';
import FacebookPixel from '../components/FacebookPixel';
import { trackEvent } from '../components/FacebookPixel';

export default function SuperLanding() {
  const handleCTAClick = (plan, value) => {
    trackEvent('InitiateCheckout', { value, currency: 'BRL' });
    window.location.href = '/checkout?plan=' + plan;
  };

  return (
    <div className={styles.container}>
      <FacebookPixel />
      <Head>
        <title>SaaS Generator - Crie Landing Pages que Vendem</title>
        <meta name="description" content="Gere landing pages de alta conversao em minutos com Inteligencia Artificial" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <span className={styles.logoIcon} style={{background:'linear-gradient(135deg,#6366f1,#ec4899)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',fontWeight:800,fontSize:24}}>S</span>
            <span className={styles.logoText}>SaaS Generator</span>
          </div>
          <nav className={styles.nav}>
            <a href="#como-funciona">Como Funciona</a>
            <a href="#resultados">Resultados</a>
            <a href="#precos">Precos</a>
            <a href="/login" className={styles.navButton}>Entrar</a>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientBlob}></div>
          <div className={styles.gradientBlob2}></div>
        </div>
        <div className={styles.heroContent}>
          <div className={`${styles.badge} ${styles.animateIn}`}>
            <span className={styles.badgeDot}></span>
            Novo: IA Generativa para Landing Pages
          </div>
          <h1 className={`${styles.heroTitle} ${styles.animateIn} ${styles.delay1}`}>
            Crie Landing Pages que <br />
            <span className={styles.gradientText}>Convertem 3x mais</span>
          </h1>
          <p className={`${styles.heroSubtitle} ${styles.animateIn} ${styles.delay2}`}>
            Gere paginas profissionais em minutos com IA. Sem saber programar.
            Aumente suas vendas com designs otimizados para conversao.
          </p>
          <div className={`${styles.heroCTA} ${styles.animateIn} ${styles.delay3}`}>
            <button className={styles.ctaPrimary} onClick={() => handleCTAClick('basico', 97)}>
              Comecar Agora - R$ 97/mes
            </button>
            <button className={styles.ctaSecondary} onClick={() => document.getElementById('como-funciona')?.scrollIntoView({behavior:'smooth'})}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16"/></svg>
              Ver Demo
            </button>
          </div>
          <div className={`${styles.socialProof} ${styles.animateIn} ${styles.delay4}`}>
            <div className={styles.avatars}>
              <div className={styles.avatar} style={{background:'linear-gradient(135deg,#6366f1,#818cf8)'}}>JS</div>
              <div className={styles.avatar} style={{background:'linear-gradient(135deg,#ec4899,#f472b6)'}}>MS</div>
              <div className={styles.avatar} style={{background:'linear-gradient(135deg,#f97316,#fb923c)'}}>AC</div>
              <div className={styles.avatar} style={{background:'linear-gradient(135deg,#22c55e,#4ade80)'}}>RL</div>
            </div>
            <span className={styles.socialText}>
              <strong>+2.500 empresas</strong> ja estao usando
            </span>
          </div>
        </div>
      </section>

      <section className={styles.logosSection}>
        <p className={styles.logosTitle}>Empresas que confiam em nos</p>
        <div className={styles.logosGrid}>
          <div className={styles.logoItem}>Clinica Saude+</div>
          <div className={styles.logoItem}>Tech Solutions</div>
          <div className={styles.logoItem}>Moveis Premium</div>
          <div className={styles.logoItem}>EduTech</div>
          <div className={styles.logoItem}>Digital Marketing</div>
        </div>
      </section>

      <section id="como-funciona" className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Como Funciona</span>
          <h2 className={styles.sectionTitle}>3 passos para sua landing page</h2>
          <p className={styles.sectionSubtitle}>Simples, rapido e eficiente. Sem complicacoes.</p>
        </div>
        <div className={styles.featuresGrid}>
          <div className={`${styles.featureCard} ${styles.glowCard}`}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <h3 className={styles.featureTitle}>Escolha o Nicho</h3>
            <p className={styles.featureDesc}>Selecione o segmento do seu negocio. Temos templates otimizados para saude, tecnologia, imobiliario e mais.</p>
          </div>
          <div className={`${styles.featureCard} ${styles.glowCard}`}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"><path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.4V12h2l3 4H5l3-4h2V9.4A4 4 0 0 1 12 2z"/><path d="M9 18h6"/><path d="M9 22h6"/></svg>
            </div>
            <h3 className={styles.featureTitle}>IA Gera sua Pagina</h3>
            <p className={styles.featureDesc}>Nossa inteligencia artificial cria automaticamente textos, imagens e layout otimizados para conversao.</p>
          </div>
          <div className={`${styles.featureCard} ${styles.glowCard}`}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <h3 className={styles.featureTitle}>Publique e Venda</h3>
            <p className={styles.featureDesc}>Sua pagina esta no ar em minutos. Integracao com Mercado Pago para receber pagamentos.</p>
          </div>
        </div>
      </section>

      <section id="resultados" className={styles.resultsSection}>
        <div className={styles.resultsContent}>
          <span className={styles.sectionBadge}>Resultados Comprovados</span>
          <h2 className={styles.sectionTitle}>Numeros que falam por si</h2>
          <div className={styles.resultsGrid}>
            <div className={styles.resultCard}>
              <div className={`${styles.resultNumber} ${styles.float}`}>3x</div>
              <div className={styles.resultLabel}>Mais conversoes</div>
              <div className={styles.resultDesc}>em media com nossas landing pages</div>
            </div>
            <div className={styles.resultCard}>
              <div className={`${styles.resultNumber} ${styles.float}`} style={{animationDelay:'0.5s'}}>2.500+</div>
              <div className={styles.resultLabel}>Empresas ativas</div>
              <div className={styles.resultDesc}>confiam em nossa plataforma</div>
            </div>
            <div className={styles.resultCard}>
              <div className={`${styles.resultNumber} ${styles.float}`} style={{animationDelay:'1s'}}>R$ 15M+</div>
              <div className={styles.resultLabel}>Em vendas geradas</div>
              <div className={styles.resultDesc}>nos ultimos 12 meses</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Depoimentos</span>
          <h2 className={styles.sectionTitle}>O que nossos clientes dizem</h2>
        </div>
        <div className={styles.testimonialsGrid}>
          <div className={`${styles.testimonialCard} ${styles.glowCard}`}>
            <div className={styles.quoteIcon}>&ldquo;</div>
            <p className={styles.testimonialText}>Em 5 minutos minha landing page estava no ar. Aumentei minhas vendas em 300% no primeiro mes!</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar} style={{background:'linear-gradient(135deg,#6366f1,#818cf8)'}}>JS</div>
              <div>
                <div className={styles.authorName}>Joao Silva</div>
                <div className={styles.authorRole}>Empreendedor Digital</div>
              </div>
            </div>
          </div>
          <div className={`${styles.testimonialCard} ${styles.glowCard}`}>
            <div className={styles.quoteIcon}>&ldquo;</div>
            <p className={styles.testimonialText}>Ferramenta incrivel! Economizei R$ 5.000 que gastaria com desenvolvedor. Recomendo demais!</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar} style={{background:'linear-gradient(135deg,#ec4899,#f472b6)'}}>MS</div>
              <div>
                <div className={styles.authorName}>Maria Santos</div>
                <div className={styles.authorRole}>Dona de Loja Online</div>
              </div>
            </div>
          </div>
          <div className={`${styles.testimonialCard} ${styles.glowCard}`}>
            <div className={styles.quoteIcon}>&ldquo;</div>
            <p className={styles.testimonialText}>A IA entende exatamente o que preciso. Minhas landing pages ficaram profissionais e convertem muito!</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar} style={{background:'linear-gradient(135deg,#f97316,#fb923c)'}}>AC</div>
              <div>
                <div className={styles.authorName}>Andre Costa</div>
                <div className={styles.authorRole}>Consultor de Marketing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="precos" className={styles.pricingSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Precos</span>
          <h2 className={styles.sectionTitle}>Escolha o plano ideal</h2>
          <p className={styles.sectionSubtitle}>Comece gratis. Cancele quando quiser.</p>
        </div>
        <div className={styles.pricingGrid}>
          <div className={`${styles.pricingCard} ${styles.glowCard}`}>
            <div className={styles.pricingHeader}>
              <h3 className={styles.planName}>Basico</h3>
              <div className={styles.planPrice}>
                <span className={styles.currency}>R$</span>
                <span className={styles.amount}>97</span>
                <span className={styles.period}>/mes</span>
              </div>
            </div>
            <ul className={styles.planFeatures}>
              <li><span className={styles.checkIcon}>✓</span> 1 Landing Page</li>
              <li><span className={styles.checkIcon}>✓</span> Templates prontos</li>
              <li><span className={styles.checkIcon}>✓</span> Suporte por email</li>
              <li><span className={styles.checkIcon}>✓</span> Atualizacoes incluidas</li>
            </ul>
            <button className={styles.planButton} onClick={() => handleCTAClick('basico', 97)}>
              Comecar Agora
            </button>
          </div>
          
          <div className={`${styles.pricingFeatured} ${styles.glowCard}`}>
            <div className={styles.popularBadge}>Mais Popular</div>
            <div className={styles.pricingHeader}>
              <h3 className={styles.planName}>Profissional</h3>
              <div className={styles.planPrice}>
                <span className={styles.currency}>R$</span>
                <span className={styles.amount}>197</span>
                <span className={styles.period}>/mes</span>
              </div>
            </div>
            <ul className={styles.planFeatures}>
              <li><span className={styles.checkIcon}>✓</span> 5 Landing Pages</li>
              <li><span className={styles.checkIcon}>✓</span> Templates premium</li>
              <li><span className={styles.checkIcon}>✓</span> Suporte prioritario</li>
              <li><span className={styles.checkIcon}>✓</span> Relatorios de acesso</li>
              <li><span className={styles.checkIcon}>✓</span> Integracao Mercado Pago</li>
              <li><span className={styles.checkIcon}>✓</span> A/B Testing</li>
            </ul>
            <button className={styles.planButtonFeatured} onClick={() => handleCTAClick('profissional', 197)}>
              Escolher Profissional
            </button>
          </div>

          <div className={`${styles.pricingCard} ${styles.glowCard}`}>
            <div className={styles.pricingHeader}>
              <h3 className={styles.planName}>Empresarial</h3>
              <div className={styles.planPrice}>
                <span className={styles.currency}>R$</span>
                <span className={styles.amount}>497</span>
                <span className={styles.period}>/mes</span>
              </div>
            </div>
            <ul className={styles.planFeatures}>
              <li><span className={styles.checkIcon}>✓</span> Landing Pages ilimitadas</li>
              <li><span className={styles.checkIcon}>✓</span> Templates exclusivos</li>
              <li><span className={styles.checkIcon}>✓</span> Suporte 24/7</li>
              <li><span className={styles.checkIcon}>✓</span> API personalizada</li>
              <li><span className={styles.checkIcon}>✓</span> Consultoria inclusa</li>
              <li><span className={styles.checkIcon}>✓</span> White Label</li>
            </ul>
            <button className={styles.planButton} onClick={() => handleCTAClick('empresarial', 497)}>
              Comecar Agora
            </button>
          </div>
        </div>
      </section>

      <section className={styles.finalCTA}>
        <div className={styles.finalCTAContent}>
          <h2>Pronto para aumentar suas vendas?</h2>
          <p>Comece agora mesmo e veja a diferenca em seus resultados.</p>
          <button className={styles.ctaPrimary} onClick={() => handleCTAClick('basico', 97)}>
            Criar Minha Landing Page Agora
          </button>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon} style={{background:'linear-gradient(135deg,#6366f1,#ec4899)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',fontWeight:800,fontSize:24}}>S</span>
              <span className={styles.logoText}>SaaS Generator</span>
            </div>
            <p className={styles.footerDesc}>Gere landing pages de alta conversao em minutos com Inteligencia Artificial.</p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4>Produto</h4>
              <a href="#como-funciona">Como Funciona</a>
              <a href="#precos">Precos</a>
              <a href="/dashboard">Dashboard</a>
            </div>
            <div className={styles.footerColumn}>
              <h4>Empresa</h4>
              <a href="/privacidade">Privacidade</a>
              <a href="/termos">Termos</a>
              <a href="mailto:vendassmercado2@gmail.com">Contato</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>2026 SaaS Generator. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
