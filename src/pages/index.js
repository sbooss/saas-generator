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
            <span className={styles.logoIcon}>*</span>
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
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Novo: IA Generativa para Landing Pages
          </div>
          <h1 className={styles.heroTitle}>
            Crie Landing Pages que <br />
            <span className={styles.gradientText}>Convertem 3x mais</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Gere paginas profissionais em minutos com IA. Sem saber programar.
            Aumente suas vendas com designs otimizados para conversao.
          </p>
          <div className={styles.heroCTA}>
            <button className={styles.ctaPrimary} onClick={() => handleCTAClick('basico', 97)}>
              Comecar Agora - R$ 97/mes
            </button>
            <button className={styles.ctaSecondary}>
              <span className={styles.playIcon}>{'>'}</span> Ver Demo
            </button>
          </div>
          <div className={styles.socialProof}>
            <div className={styles.avatars}>
              <div className={styles.avatar}>JS</div>
              <div className={styles.avatar}>MS</div>
              <div className={styles.avatar}>AC</div>
              <div className={styles.avatar}>RL</div>
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
          <div className={styles.featureCard}>
            <div className={styles.featureNumber}>01</div>
            <h3 className={styles.featureTitle}>Escolha o Nicho</h3>
            <p className={styles.featureDesc}>Selecione o segmento do seu negocio. Temos templates otimizados para saude, tecnologia, imobiliario e mais.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureNumber}>02</div>
            <h3 className={styles.featureTitle}>IA Gera sua Pagina</h3>
            <p className={styles.featureDesc}>Nossa inteligencia artificial cria automaticamente textos, imagens e layout otimizados para conversao.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureNumber}>03</div>
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
              <div className={styles.resultNumber}>3x</div>
              <div className={styles.resultLabel}>Mais conversoes</div>
              <div className={styles.resultDesc}>em media com nossas landing pages</div>
            </div>
            <div className={styles.resultCard}>
              <div className={styles.resultNumber}>2.500+</div>
              <div className={styles.resultLabel}>Empresas ativas</div>
              <div className={styles.resultDesc}>confiam em nossa plataforma</div>
            </div>
            <div className={styles.resultCard}>
              <div className={styles.resultNumber}>R$ 15M+</div>
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
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>*****</div>
            <p className={styles.testimonialText}>&quot;Em 5 minutos minha landing page estava no ar. Aumentei minhas vendas em 300% no primeiro mes!&quot;</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>JS</div>
              <div>
                <div className={styles.authorName}>Joao Silva</div>
                <div className={styles.authorRole}>Empreendedor Digital</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>*****</div>
            <p className={styles.testimonialText}>&quot;Ferramenta incrivel! Economizei R$ 5.000 que gastaria com desenvolvedor. Recomendo demais!&quot;</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>MS</div>
              <div>
                <div className={styles.authorName}>Maria Santos</div>
                <div className={styles.authorRole}>Dona de Loja Online</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>*****</div>
            <p className={styles.testimonialText}>&quot;A IA entende exatamente o que preciso. Minhas landing pages ficaram profissionais e convertem muito!&quot;</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>AC</div>
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
          <div className={styles.pricingCard}>
            <div className={styles.pricingHeader}>
              <h3 className={styles.planName}>Basico</h3>
              <div className={styles.planPrice}>
                <span className={styles.currency}>R$</span>
                <span className={styles.amount}>97</span>
                <span className={styles.period}>/mes</span>
              </div>
            </div>
            <ul className={styles.planFeatures}>
              <li>1 Landing Page</li>
              <li>Templates prontos</li>
              <li>Suporte por email</li>
              <li>Atualizacoes incluidas</li>
            </ul>
            <button className={styles.planButton} onClick={() => handleCTAClick('basico', 97)}>
              Comecar Agora
            </button>
          </div>
          
          <div className={styles.pricingFeatured}>
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
              <li>5 Landing Pages</li>
              <li>Templates premium</li>
              <li>Suporte prioritario</li>
              <li>Relatorios de acesso</li>
              <li>Integracao Mercado Pago</li>
              <li>A/B Testing</li>
            </ul>
            <button className={styles.planButtonFeatured} onClick={() => handleCTAClick('profissional', 197)}>
              Escolher Profissional
            </button>
          </div>

          <div className={styles.pricingCard}>
            <div className={styles.pricingHeader}>
              <h3 className={styles.planName}>Empresarial</h3>
              <div className={styles.planPrice}>
                <span className={styles.currency}>R$</span>
                <span className={styles.amount}>497</span>
                <span className={styles.period}>/mes</span>
              </div>
            </div>
            <ul className={styles.planFeatures}>
              <li>Landing Pages ilimitadas</li>
              <li>Templates exclusivos</li>
              <li>Suporte 24/7</li>
              <li>API personalizada</li>
              <li>Consultoria inclusa</li>
              <li>White Label</li>
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
              <span className={styles.logoIcon}>*</span>
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
