import https from 'https';
import http from 'http';

function tryOllama(prompt) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ model: 'qwen3:4b-instruct-2507-q4_K_M', prompt, stream: false, options: { temperature: 0.8, num_predict: 2000 } });
    const req = http.request({ hostname: 'localhost', port: 11434, path: '/api/generate', method: 'POST', headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) } }, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(body).response); } catch { reject(new Error('Parse error')); }
      });
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
    req.setTimeout(25000);
    req.write(data);
    req.end();
  });
}

function buildLandingPage(config) {
  const { businessName, niche, description, address, phone, email, observations } = config;

  // Cores automaticas por nicho
  const nicheColors = {
    saude: { primary: '#0ea5e9', secondary: '#06b6d4', bg: '#0c1222', text: '#ffffff', accent: '#22c55e' },
    tecnologia: { primary: '#6366f1', secondary: '#8b5cf6', bg: '#0a0a0a', text: '#ffffff', accent: '#22c55e' },
    imobiliario: { primary: '#f59e0b', secondary: '#d97706', bg: '#1a1a1a', text: '#ffffff', accent: '#22c55e' },
    educacao: { primary: '#3b82f6', secondary: '#2563eb', bg: '#0f172a', text: '#ffffff', accent: '#f59e0b' },
    advocacia: { primary: '#1e3a5f', secondary: '#2d5a87', bg: '#0d1117', text: '#ffffff', accent: '#c9a227' },
    restaurant: { primary: '#dc2626', secondary: '#b91c1c', bg: '#1c1917', text: '#ffffff', accent: '#f59e0b' },
    beleza: { primary: '#ec4899', secondary: '#d946ef', bg: '#1a1025', text: '#ffffff', accent: '#f59e0b' },
    fitness: { primary: '#22c55e', secondary: '#16a34a', bg: '#0a1a0f', text: '#ffffff', accent: '#f59e0b' },
    consultoria: { primary: '#6366f1', secondary: '#4f46e5', bg: '#0f0f23', text: '#ffffff', accent: '#22c55e' },
    default: { primary: '#6366f1', secondary: '#8b5cf6', bg: '#0a0a0a', text: '#ffffff', accent: '#22c55e' }
  };

  const colors = nicheColors[niche] || nicheColors.default;
  const primaryColor = config.primaryColor || colors.primary;
  const secondaryColor = config.secondaryColor || colors.secondary;
  const bgColor = config.bgColor || colors.bg;
  const textColor = config.textColor || colors.text;
  const accentColor = config.accentColor || colors.accent;

  const nicheContent = {
    saude: {
      headline: 'Cuide da Sua Saude com Quem Entende',
      subheadline: 'Atendimento humanizado e de excelencia para voce e sua familia. Agende sua consulta hoje.',
      features: [
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>', title: 'Equipe Especializada', desc: 'Profissionais qualificados e experientes em cada area da saude.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"/></svg>', title: 'Estrutura Moderna', desc: 'Clinica equipada com os mais modernos equipamentos do mercado.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg>', title: 'Tratamento Personalizado', desc: 'Cada paciente recebe um plano de tratamento unico e sob medida.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12h6M9 16h6"/></svg>', title: 'Agendamento Flexivel', desc: 'Marque suas consultas pelo WhatsApp ou telefone, no melhor horario pra voce.' }
      ],
      cta: 'Agende Sua Consulta',
      testimonial: { text: 'Excelente atendimento! A equipe e muito atenciosa e profissional. Recomendo para toda a familia.', author: 'Maria Silva', role: 'Paciente ha 3 anos' }
    },
    tecnologia: {
      headline: 'Solucoes Tecnologicas Que Impulsionam Seu Negocio',
      subheadline: 'Desenvolvemos sistemas sob medida que aumentam sua produtividade e reduzem custos.',
      features: [
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>', title: 'Sistemas Sob Medida', desc: 'Software desenvolvido especificamente para as necessidades do seu negocio.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>', title: 'Seguranca Garantida', desc: 'Protecao de dados com criptografia de nivel bancario.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 17V13M12 17V9M16 17V5"/></svg>', title: 'Relatorios Inteligentes', desc: 'Dashboards que transformam dados em decisoes estrategicas.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>', title: 'Suporte 24/7', desc: 'Nossa equipe esta sempre disponível para quando voce precisar.' }
      ],
      cta: 'Solicite Uma Demonstracao',
      testimonial: { text: 'A solucao transformou nossa operacao. Reduzimos 40% dos custos operacionais no primeiro ano.', author: 'Carlos Mendes', role: 'CEO da TechStart' }
    },
    imobiliario: {
      headline: 'Encontre O Imovel Dos Seus Sonhos',
      subheadline: 'As melhores opcoes de imoveis com atendimento personalizado e financiamento facilitado.',
      features: [
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>', title: 'Portfolio Exclusivo', desc: 'Imoveis selecionados nas melhores localizacoes da cidade.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M8 10h8M8 14h8"/></svg>', title: 'Financiamento Facilitado', desc: 'Parceria com os principais bancos para o melhor financiamento.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>', title: 'Localizacao Privilegiada', desc: 'Imoveis em bairros valorizados com infraestrutura completa.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>', title: 'Assessoria Completa', desc: 'Do papell ao cambio, cuidamos de tudo para voce.' }
      ],
      cta: 'Conheca Os Imoveis',
      testimonial: { text: 'Conseguimos nosso apartamento ideal com Conditions muito boas. Equipe extremamente profissional.', author: 'Ana e Pedro', role: 'Novos proprietarios' }
    },
    educacao: {
      headline: 'Transforme Seu Futuro Atraves Da Educacao',
      subheadline: 'Cursos e programas de alta qualidade para impulsionar sua carreira.',
      features: [
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>', title: 'Conteudo Atualizado', desc: 'Grade curricular alinhada com as demandas do mercado.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>', title: 'Professores Experientes', desc: 'Corpo docente com ampla experiencia pratic e academica.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>', title: 'Metodologia Pratica', desc: 'Aprenda fazendo com projetos reais e estudos de caso.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22"/><path d="M18 2H6v7a6 6 0 0012 0V2Z"/></svg>', title: 'Certificacao Reconhecida', desc: 'Diploma validado e reconhecido pelo mercado de trabalho.' }
      ],
      cta: 'Inscreva-Se Agora',
      testimonial: { text: 'O curso mudou minha trajetoria profissional. Em 6 meses ja estava atuando na area.', author: 'Lucas Ferreira', role: 'Ex-aluno, agora gerente' }
    },
    advocacia: {
      headline: 'Assessoria Juridica De Confianca',
      subheadline: 'Advocacia especializada com atendimento personalizado e resultados comprovados.',
      features: [
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18"/><path d="M1 6l5 6 5-6"/><path d="M13 6l5 6 5-6"/><path d="M1 22h22"/></svg>', title: 'Especializacao Total', desc: 'Cada advogado e especialista em sua area de atuacao.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>', title: 'Experiencia Comprovada', desc: 'Mais de 500 casos resolvidos com sucesso.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>', title: 'Atendimento Humanizado', desc: 'Cada caso recebe atencao dedicada e personalizada.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>', title: 'Transparencia Total', desc: 'Acompanhamento em tempo real do seu caso.' }
      ],
      cta: 'Consulte Seu Caso',
      testimonial: { text: 'Resolveu meu caso com muita competencia e profissionalismo. Super recomendo.', author: 'Roberto Santos', role: 'Cliente ha 5 anos' }
    },
    restaurant: {
      headline: 'Uma Experiencia Gastronomica Imperdivel',
      subheadline: 'Sabores unicos em um ambiente acolhedor. Venha conhecer nossa cozinha.',
      features: [
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>', title: 'Cozinha Autoral', desc: 'Pratos criados pelo nosso chef com ingredientes selecionados.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 22h8"/><path d="M12 11v11"/><path d="M17 2H7l5 9 5-9z"/></svg>', title: 'Carta de Vinhos', desc: 'Selecao refinada de vinhos nacionais e importados.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>', title: 'Ambiente Premium', desc: 'Decoracao elegante e trilha sonora para uma noite perfeita.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>', title: 'Reserva Online', desc: 'Agende sua mesa pelo WhatsApp ou nosso site.' }
      ],
      cta: 'Reserve Sua Mesa',
      testimonial: { text: 'Melhor restaurante da cidade! Comida excepcional e atendimento impecavel.', author: 'Fernanda Lima', role: 'Cliente frequente' }
    },
    beleza: {
      headline: 'Sua Beleza Merece O Melhor',
      subheadline: 'Tratamentos exclusivos com profissionais especializados e produtos de alta qualidade.',
      features: [
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>', title: 'Produtos Premium', desc: 'Utilizamos apenas marcas reconhecidas internacionalmente.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>', title: 'Servicos Completos', desc: 'De cabelo a unha, tudo o que voce precisa em um so lugar.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>', title: 'Tendencias Atuais', desc: 'Profissionais sempre atualizados com as ultimas tendencias.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>', title: 'Experiencia Relaxante', desc: 'Ambiente projetado para seu conforto e bem-estar.' }
      ],
      cta: 'Agende Seu Horario',
      testimonial: { text: 'Sempre saio de la maravilhosa! Profissionais excelentes e ambiente super acolhedor.', author: 'Juliana Costa', role: 'Cliente ha 2 anos' }
    },
    fitness: {
      headline: 'Transforme Seu Corpo, Mude Sua Vida',
      subheadline: 'Academia completa com equipamentos modernos e personal trainers qualificados.',
      features: [
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>', title: 'Equipamentos Modernos', desc: 'Maquinas de ultima geracao para seu treino ideal.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="2"/><path d="M10 22V17L7 14l3-7 4 2 3 5-2 8"/></svg>', title: 'Personal Training', desc: 'Treinos personalizados por profissionais certificados.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 21h10"/><rect x="2" y="3" width="20" height="18" rx="2"/></svg>', title: 'Acompanhamento Nutricional', desc: 'Nutricionista para complementar seus resultados.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>', title: 'App Exclusivo', desc: 'Acompanhe seus treinos e evolucao pelo celular.' }
      ],
      cta: 'Comece Agora',
      testimonial: { text: 'Perdi 15kg em 4 meses! O time de profissionais e incrivel.', author: 'Marcos Oliveira', role: 'Aluno ha 1 ano' }
    },
    consultoria: {
      headline: 'Estrategia Que Gera Resultados Reais',
      subheadline: 'Consultoria especializada para levar seu negocio ao proximo nivel.',
      features: [
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>', title: 'Analise Profunda', desc: 'Diagnostico completo da situacao atual do seu negocio.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>', title: 'Plano Personalizado', desc: 'Estrategia sob medida para seus objetivos especificos.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>', title: 'Time Experiente', desc: 'Consultores com ampla experiencia no mercado.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 17V13M12 17V9M16 17V5"/></svg>', title: 'Resultados Mensuraveis', desc: 'Acompanhamento mensal com metricas claras de evolucao.' }
      ],
      faleConosco: true,
      cta: 'Fale Com Um Consultor',
      testimonial: { text: 'A consultoria triplicou nosso faturamento em 8 meses. Investimento que valeu cada centavo.', author: 'Roberto Almeida', role: 'Diretor da EmpresaXYZ' }
    },
    default: {
      headline: `${businessName} - Qualidade e Confianca`,
      subheadline: 'Solucoes completas para atender suas necessidades com excelencia e profissionalismo.',
      features: [
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>', title: 'Qualidade Superior', desc: 'Compromisso inabalavel com a excelencia em tudo que fazemos.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>', title: 'Atendimento Personalizado', desc: 'Cada cliente e unico e recebe atencao dedicada.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>', title: 'Inovacao Constante', desc: 'Sempre buscando as melhores solucoes e tecnologias.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14"/></svg>', title: 'Experiencia Comprovada', desc: 'Anos de atuacao no mercado com resultados expressivos.' }
      ],
      cta: 'Entre Em Contato',
      testimonial: { text: 'Excelente empresa! Profissionais competentes e atendimento de primeira.', author: 'Cliente Satisfeito', role: 'Cliente Regular' }
    }
  };

  const content = nicheContent[niche] || nicheContent.default;

  // NUNCA usar a descricao como titulo - sempre usar copy profissional do nicho
  const customHeadline = content.headline;

  const contactSection = (address || phone || email) ? `
    <section style="padding:100px 24px;background:${bgColor};">
      <div style="max-width:800px;margin:0 auto;text-align:center;">
        <h2 style="font-size:clamp(28px,4vw,40px);font-weight:800;color:${textColor};margin:0 0 16px;">Fale Conosco</h2>
        <p style="font-size:18px;color:${textColor}99;margin:0 0 48px;">Estamos prontos para atender voce.</p>
        <div style="display:grid;gridTemplateColumns:repeat(auto-fit,minmax(220px,1fr));gap:24px;text-align:center;">
          ${address ? `<div style="padding:32px 24px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:16px;">
            <div style="font-size:32px;margin-bottom:12px;">📍</div>
            <h4 style="color:${textColor};margin:0 0 8px;font-size:15px;">Endereco</h4>
            <p style="color:${textColor}99;margin:0;font-size:14px;line-height:1.6;">${address}</p>
          </div>` : ''}
          ${phone ? `<div style="padding:32px 24px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:16px;">
            <div style="font-size:32px;margin-bottom:12px;">📞</div>
            <h4 style="color:${textColor};margin:0 0 8px;font-size:15px;">Telefone</h4>
            <p style="color:${textColor}99;margin:0;font-size:14px;">${phone}</p>
          </div>` : ''}
          ${email ? `<div style="padding:32px 24px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:16px;">
            <div style="font-size:32px;margin-bottom:12px;">✉️</div>
            <h4 style="color:${textColor};margin:0 0 8px;font-size:15px;">Email</h4>
            <p style="color:${textColor}99;margin:0;font-size:14px;">${email}</p>
          </div>` : ''}
        </div>
      </div>
    </section>` : '';

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${businessName}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    *{margin:0;padding:0;box-sizing:border-box;}
    body{font-family:'Inter',system-ui,sans-serif;background:${bgColor};color:${textColor};-webkit-font-smoothing:antialiased;overflow-x:hidden;}
    .hero{min-height:100vh;display:flex;align-items:center;justify-content:center;position:relative;padding:120px 24px 80px;text-align:center;}
    .hero::before{content:'';position:absolute;top:-200px;right:-200px;width:600px;height:600px;background:radial-gradient(circle,${primaryColor}15,transparent 70%);border-radius:50%;pointer-events:none;}
    .hero::after{content:'';position:absolute;bottom:-150px;left:-150px;width:500px;height:500px;background:radial-gradient(circle,${secondaryColor}10,transparent 70%);border-radius:50%;pointer-events:none;}
    .badge{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:100px;border:1px solid ${primaryColor}30;background:${primaryColor}10;color:${primaryColor};font-size:13px;font-weight:600;margin-bottom:32px;}
    .hero h1{font-size:clamp(36px,6vw,64px);font-weight:900;line-height:1.08;margin:0 0 24px;letter-spacing:-0.03em;}
    .hero h1 span{background:linear-gradient(135deg,${primaryColor},${secondaryColor});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
    .hero p{font-size:clamp(16px,2vw,20px);color:${textColor}aa;max-width:600px;margin:0 auto 40px;line-height:1.7;}
    .cta-btn{display:inline-flex;align-items:center;gap:10px;padding:18px 40px;background:linear-gradient(135deg,${primaryColor},${secondaryColor});color:#fff;border:none;border-radius:14px;font-size:16px;font-weight:700;cursor:pointer;text-decoration:none;transition:all 0.3s;box-shadow:0 8px 32px ${primaryColor}40;}
    .cta-btn:hover{transform:translateY(-2px);box-shadow:0 12px 40px ${primaryColor}60;}
    .features{padding:120px 24px;background:${bgColor};}
    .features-grid{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(2,1fr);gap:24px;}
    .feature-card{padding:40px 32px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:20px;transition:all 0.3s;}
    .feature-card:hover{transform:translateY(-4px);border-color:${primaryColor}30;background:rgba(255,255,255,0.04);}
    .feature-icon{width:48px;height:48px;display:flex;align-items:center;justify-content:center;background:${primaryColor}15;border-radius:12px;margin-bottom:20px;color:${primaryColor};}
    .feature-icon svg{width:24px;height:24px;}
    .feature-card h3{font-size:18px;font-weight:700;margin:0 0 12px;color:${textColor};letter-spacing:-0.01em;}
    .feature-card p{font-size:15px;color:${textColor}99;line-height:1.7;margin:0;}
    .testimonials{padding:120px 24px;background:linear-gradient(180deg,${bgColor},${bgColor}f0);}
    .testimonial-card{max-width:700px;margin:0 auto;text-align:center;padding:56px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:24px;position:relative;}
    .testimonial-card::before{content:'\\201C';position:absolute;top:20px;left:32px;font-size:80px;color:${primaryColor}30;font-family:Georgia,serif;line-height:1;}
    .testimonial-text{font-size:18px;line-height:1.8;color:${textColor}dd;margin:0 0 24px;font-style:italic;}
    .testimonial-author{font-size:15px;font-weight:700;color:${textColor};margin:0;}
    .testimonial-role{font-size:13px;color:${textColor}88;margin:4px 0 0;}
    .footer{padding:48px 24px;background:rgba(0,0,0,0.3);text-align:center;border-top:1px solid rgba(255,255,255,0.05);}
    .footer p{font-size:13px;color:${textColor}55;margin:0;}
    @media(max-width:768px){.features-grid{grid-template-columns:1fr;}}
  </style>
</head>
<body>
  <section class="hero">
    <div style="position:relative;z-index:1;max-width:800px;">
      <div class="badge">${businessName}</div>
      <h1>${customHeadline}</h1>
      <p>${content.subheadline}</p>
      <a href="#contato" class="cta-btn">${content.cta} →</a>
    </div>
  </section>

  <section class="features">
    <div class="features-grid">
      ${content.features.map(f => `
        <div class="feature-card">
          <div class="feature-icon">${f.icon}</div>
          <h3>${f.title}</h3>
          <p>${f.desc}</p>
        </div>
      `).join('')}
    </div>
  </section>

  <section class="testimonials">
    <div class="testimonial-card">
      <p class="testimonial-text">${content.testimonial.text}</p>
      <p class="testimonial-author">${content.testimonial.author}</p>
      <p class="testimonial-role">${content.testimonial.role}</p>
    </div>
  </section>

  ${contactSection}

  <footer class="footer">
    <p>&copy; ${new Date().getFullYear()} ${businessName}. Todos os direitos reservados.</p>
  </footer>
</body>
</html>`;

  return { title: businessName, html };
}

// ========== SISTEMA DE AGENTES ==========

function uiAgentEnhance(html, config) {
  const p = config.primaryColor || '#6366f1';
  const css = '<style>.feature-card:hover{box-shadow:0 0 30px ' + p + '20}.cta-btn{position:relative;overflow:hidden}.cta-btn::after{content:\"\";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:linear-gradient(45deg,transparent,rgba(255,255,255,0.1),transparent);transform:rotate(45deg);transition:all .5s;opacity:0}.cta-btn:hover::after{opacity:1;left:100%}</style>';
  return html.replace('</head>', css + '\n</head>');
}

function uxAgentEnhance(html, config) {
  const whatsapp = config.whatsapp || '';
  const instagram = config.instagram || '';
  const address = config.address || '';
  const tc = config.textColor || '#ffffff';
  const bg = config.bgColor || '#0a0a0a';
  let cs = '';
  
  if (whatsapp) {
    const wn = whatsapp.replace(/[^0-9]/g, '');
    cs += '<a href="https://wa.me/55' + wn + '" target="_blank" style="display:inline-flex;align-items:center;gap:10px;padding:16px 32px;background:#25D366;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;text-decoration:none;transition:all 0.3s;"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>Fale pelo WhatsApp</a>';
  }
  
  if (instagram) {
    const igUrl = instagram.includes('http') ? instagram : 'https://instagram.com/' + instagram.replace('@', '');
    cs += '<a href="' + igUrl + '" target="_blank" style="display:inline-flex;align-items:center;gap:10px;padding:16px 32px;background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888);color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;text-decoration:none;transition:all 0.3s;"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>Siga no Instagram</a>';
  }
  
  if (address) {
    const mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + address.replace(/\s+/g, '+');
    cs += '<a href="' + mapUrl + '" target="_blank" style="display:inline-flex;align-items:center;gap:10px;padding:16px 32px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:' + tc + ';border-radius:12px;font-size:15px;font-weight:600;text-decoration:none;transition:all 0.3s;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Ver no Mapa</a>';
  }
  
  if (cs) {
    const contactHtml = '<section id="contato" style="padding:100px 24px;background:' + bg + ';"><div style="max-width:800px;margin:0 auto;text-align:center;"><h2 style="font-size:clamp(28px,4vw,40px);font-weight:800;color:' + tc + ';margin:0 0 16px;">Fale Conosco</h2><p style="font-size:18px;color:' + tc + '99;margin:0 0 48px;">Estamos prontos para atender voce.</p><div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center;">' + cs + '</div></div></section>';
    return html.replace('</body>', contactHtml + '\n</body>');
  }
  return html;
}

function scrollAgentEnhance(html, config) {
  const p = config.primaryColor || '#6366f1';
  const css = '<style>@keyframes fadeInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}.hero>div{animation:fadeInUp .8s ease-out}.badge{animation:fadeIn .6s ease-out .2s both}.hero h1{animation:fadeInUp .8s ease-out .3s both}.hero p{animation:fadeInUp .8s ease-out .5s both}.cta-btn{animation:fadeInUp .8s ease-out .7s both}.feature-card{opacity:0;animation:fadeInUp .6s ease-out forwards}.feature-card:nth-child(1){animation-delay:.1s}.feature-card:nth-child(2){animation-delay:.2s}.feature-card:nth-child(3){animation-delay:.3s}.feature-card:nth-child(4){animation-delay:.4s}.feature-card:hover{transform:translateY(-8px)!important;box-shadow:0 20px 60px ' + p + '25;border-color:' + p + '40!important}.cta-btn:hover{animation:pulse .3s ease-in-out;transform:translateY(-3px)!important}.testimonial-card{opacity:0;animation:fadeInUp .8s ease-out .5s forwards}@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}</style>';
  const js = '<script>if(typeof IntersectionObserver!=="undefined"){const o=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting){t.target.style.opacity="1";t.target.style.transform="translateY(0)"}})},{threshold:.1});document.querySelectorAll(".feature-card,.testimonial-card,[id=contato] > div").forEach(e=>{o.observe(e)})}</script>';
  let r = html.replace('</head>', css + '\n</head>');
  r = r.replace('</body>', js + '\n</body>');
  return r;
}

function typographyAgentEnhance(html, config) {
  const tc = config.textColor || '#ffffff';
  const css = '<style>body{letter-spacing:-.01em;line-height:1.6}h1,h2,h3,h4{letter-spacing:-.02em;line-height:1.15}.hero h1{font-size:clamp(36px,6vw,72px);font-weight:900;letter-spacing:-.03em}.feature-card h3{font-size:17px;font-weight:700;letter-spacing:-.01em}.feature-card p{font-size:14px;line-height:1.7;color:' + tc + '88}.testimonial-text{font-size:18px;line-height:1.8;font-style:italic}p{font-size:16px;line-height:1.7;color:' + tc + 'cc}@media(max-width:768px){.hero h1{font-size:clamp(28px,8vw,48px)}p{font-size:15px}}</style>';
  return html.replace('</head>', css + '\n</head>');
}

// ========== PARALLAX AGENT ==========
function parallaxAgentEnhance(html, config) {
  const p = config.primaryColor || '#6366f1';
  const s = config.secondaryColor || '#8b5cf6';
  
  const parallaxCss = [
    '<style>',
    'html{scroll-behavior:smooth}',
    '.hero{position:relative;overflow:hidden}',
    '.hero::before{content:"";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(ellipse at center,' + p + '15 0%,transparent 70%);animation:parallaxFloat 20s ease-in-out infinite;pointer-events:none;z-index:0}',
    '.hero::after{content:"";position:absolute;bottom:-30%;right:-30%;width:150%;height:150%;background:radial-gradient(ellipse at center,' + s + '10 0%,transparent 70%);animation:parallaxFloat2 25s ease-in-out infinite;pointer-events:none;z-index:0}',
    '@keyframes parallaxFloat{0%,100%{transform:translate(0,0) scale(1)}25%{transform:translate(5%,-3%) scale(1.05)}50%{transform:translate(-3%,5%) scale(.95)}75%{transform:translate(-5%,-2%) scale(1.02)}}',
    '@keyframes parallaxFloat2{0%,100%{transform:translate(0,0) rotate(0deg)}33%{transform:translate(-4%,3%) rotate(2deg)}66%{transform:translate(3%,-4%) rotate(-1deg)}}',
    '.reveal{opacity:0;transform:translateY(40px);transition:all .8s cubic-bezier(.4,0,.2,1)}.reveal.active{opacity:1;transform:translateY(0)}',
    '.reveal-left{opacity:0;transform:translateX(-60px);transition:all .8s cubic-bezier(.4,0,.2,1)}.reveal-left.active{opacity:1;transform:translateX(0)}',
    '.reveal-right{opacity:0;transform:translateX(60px);transition:all .8s cubic-bezier(.4,0,.2,1)}.reveal-right.active{opacity:1;transform:translateX(0)}',
    '.reveal-scale{opacity:0;transform:scale(.8);transition:all .8s cubic-bezier(.4,0,.2,1)}.reveal-scale.active{opacity:1;transform:scale(1)}',
    '.stagger-children>*{opacity:0;transform:translateY(30px);transition:all .6s cubic-bezier(.4,0,.2,1)}',
    '.stagger-children.active>*:nth-child(1){transition-delay:.1s;opacity:1;transform:translateY(0)}',
    '.stagger-children.active>*:nth-child(2){transition-delay:.2s;opacity:1;transform:translateY(0)}',
    '.stagger-children.active>*:nth-child(3){transition-delay:.3s;opacity:1;transform:translateY(0)}',
    '.stagger-children.active>*:nth-child(4){transition-delay:.4s;opacity:1;transform:translateY(0)}',
    '.text-parallax{will-change:transform;transition:transform .1s linear}',
    '.gradient-parallax{background:linear-gradient(135deg,' + p + '20,' + s + '20,' + p + '20);background-size:400% 400%;animation:gradientShift 15s ease infinite}',
    '@keyframes gradientShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}',
    '.float-element{animation:floatUpDown 6s ease-in-out infinite}',
    '.float-element:nth-child(2){animation-delay:-2s}.float-element:nth-child(3){animation-delay:-4s}',
    '@keyframes floatUpDown{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}',
    '.mouse-parallax{transition:transform .3s ease-out}',
    '.section-divider{position:relative;height:100px;overflow:hidden}',
    '.section-divider::before{content:"";position:absolute;top:0;left:-10%;width:120%;height:100%;background:linear-gradient(135deg,' + p + '10,transparent,' + s + '10);transform:skewY(-2deg)}',
    '@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}',
    '</style>'
  ].join('\n');
  
  const jsLines = [
    '<script>',
    '(function(){',
    'var ro=new IntersectionObserver(function(e){e.forEach(function(t){if(t.isIntersecting)t.target.classList.add("active")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});',
    'document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale,.stagger-children").forEach(function(e){ro.observe(e)});',
    'var tk=false;',
    'window.addEventListener("scroll",function(){if(!tk){window.requestAnimationFrame(function(){',
    'var sy=window.pageYOffset;',
    'var h=document.querySelector(".hero");',
    'if(h){var hc=h.querySelector("div");if(hc){hc.style.transform="translateY("+(sy*.3)+"px)";hc.style.opacity=1-(sy/800)}}',
    'document.querySelectorAll(".text-parallax").forEach(function(e){var sp=parseFloat(e.dataset.speed)||.5;var r=e.getBoundingClientRect();var c=r.top+r.height/2;var o=(window.innerHeight/2-c)*sp*.1;e.style.transform="translateY("+o+"px)"});',
    'tk=false});tk=true}});',
    'document.addEventListener("mousemove",function(e){var mx=(e.clientX/window.innerWidth-.5)*2;var my=(e.clientY/window.innerHeight-.5)*2;document.querySelectorAll(".mouse-parallax").forEach(function(e){var d=parseFloat(e.dataset.depth)||20;e.style.transform="translate("+(mx*d)+"px,"+(my*d)+"px)"})});',
    'document.querySelectorAll(".feature-card").forEach(function(e,i){e.classList.add("reveal");e.style.transitionDelay=(i*.1)+"s"});',
    'document.querySelectorAll(".testimonial-card").forEach(function(e){e.classList.add("reveal-scale")});',
    'document.querySelectorAll("[id=\"contato\"] > div").forEach(function(e){e.classList.add("reveal")});',
    'document.querySelectorAll("a[href^=\"#\"]").forEach(function(a){a.addEventListener("click",function(e){e.preventDefault();var t=document.querySelector(this.getAttribute("href"));if(t)t.scrollIntoView({behavior:"smooth",block:"start"})})});',
    'setTimeout(function(){window.dispatchEvent(new Event("scroll"))},100);',
    '})();',
    '<\/script>'
  ].join('\n');
  
  let enhanced = html.replace('</head>', parallaxCss + '\n</head>');
  enhanced = enhanced.replace('</body>', jsLines + '\n</body>');
  return enhanced;
}

function qaValidate(html, config) {
  const checks = [];
  checks.push({n:'HTML', p: html.includes('<!DOCTYPE html>') && html.includes('lang="pt-BR"')});
  checks.push({n:'Responsive', p: html.includes('viewport') && html.includes('clamp(')});
  checks.push({n:'CTA', p: html.includes('cta-btn')});
  checks.push({n:'Features', p: html.includes('feature-card')});
  checks.push({n:'Testimonial', p: html.toLowerCase().includes('testimonial')});
  checks.push({n:'No Generic', p: !html.toLowerCase().includes('lorem ipsum') && !html.toLowerCase().includes('placeholder')});
  checks.push({n:'Perf', p: html.length < 100000});
  const passed = checks.filter(c => c.p).length;
  return { score: Math.round((passed / checks.length) * 100), checks, approved: checks.every(c => c.p) };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Metodo nao permitido' });

  const { description } = req.body;
  if (!description || !description.trim()) return res.status(400).json({ error: 'Descricao obrigatoria' });

  // Prompt para a IA extrair informacoes da descricao
  const extractPrompt = `Analise esta descricao de um cliente que quer uma landing page e extraia as informacoes em JSON.

DESCRICAO DO CLIENTE:
"${description}"

Extraia NO MINIMO:
- businessName: nome do negocio/empresa
- niche: qual o nicho (saude, tecnologia, imobiliario, educacao, advocacia, restaurant, beleza, fitness, consultoria, ou outro)
- description: resumo do que o cliente quer (max 2 frases)
- style: estilo visual (elegante, moderno, minimalista, sofisticado, etc)
- colors: cores que o cliente mencionou (se nao mencionou, use null)
- phone: telefone se mencionou
- address: endereco se mencionou
- email: email se mencionou
- whatsapp: numero do whatsapp se mencionou
- instagram: usuario do instagram se mencionou
- sections: o que deve ter na pagina (beneficios, equipe, depoimentos, contato, etc)

Responda APENAS com JSON valido (sem markdown):
{
  "businessName": "nome",
  "niche": "nicho",
  "description": "resumo",
  "style": "estilo",
  "colors": null,
  "phone": null,
  "address": null,
  "email": null,
  "whatsapp": null,
  "instagram": null,
  "sections": ["beneficios", "contato"]
}`;

  let extracted = null;

  // Tenta usar Ollama
  try {
    const ollamaResponse = await tryOllama(extractPrompt);
    const jsonMatch = ollamaResponse.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      extracted = JSON.parse(jsonMatch[0]);
    }
  } catch (e) {
    console.log('Ollama indisponivel, usando fallback');
  }

  // Fallback: extrair basico da descricao
  if (!extracted) {
    const lower = description.toLowerCase();
    let niche = 'default';
    if (lower.includes('saude') || lower.includes('clinica') || lower.includes('medic') || lower.includes('hospital')) niche = 'saude';
    else if (lower.includes('tecnologia') || lower.includes('software') || lower.includes('sistema') || lower.includes('tech')) niche = 'tecnologia';
    else if (lower.includes('imobili') || lower.includes('imovel') || lower.includes('apartamento') || lower.includes('casa')) niche = 'imobiliario';
    else if (lower.includes('educac') || lower.includes('escola') || lower.includes('curso') || lower.includes('aula')) niche = 'educacao';
    else if (lower.includes('advoc') || lower.includes('advogad') || lower.includes('juridic')) niche = 'advocacia';
    else if (lower.includes('restaur') || lower.includes('comida') || lower.includes('restaurante') || lower.includes('food')) niche = 'restaurant';
    else if (lower.includes('beleza') || lower.includes('salao') || lower.includes('cabelo') || lower.includes('estetic')) niche = 'beleza';
    else if (lower.includes('fitness') || lower.includes('academia') || lower.includes('treino') || lower.includes('muscul')) niche = 'fitness';
    else if (lower.includes('consult') || lower.includes('assessor')) niche = 'consultoria';

    // Extrair telefone
    const phoneMatch = description.match(/\(?\d{2}\)?\s*\d{4,5}[\s-]?\d{4}/);
    const phone = phoneMatch ? phoneMatch[0] : null;

    // Extrair whatsapp
    const waMatch = description.match(/whatsapp[:\s]*(\(?\d{2}\)?\s*\d{4,5}[\s-]?\d{4})/i);
    const whatsapp = waMatch ? waMatch[1].replace(/[^0-9]/g, '') : (phone ? phone.replace(/[^0-9]/g, '') : null);

    // Extrair instagram
    const igMatch = description.match(/instagram[:\s]*@?(\w+)/i) || description.match(/@(\w+)/);
    const instagram = igMatch ? igMatch[1] : null;

    // Extrair endereco
    const addrMatch = description.match(/endere[co]{2}[:\s]*(.*?)(?:\.|,|\n|$)/i) || description.match(/rua[:\s]*(.*?)(?:\.|,|\n|$)/i) || description.match(/avenida[:\s]*(.*?)(?:\.|,|\n|$)/i);
    const address = addrMatch ? addrMatch[1].trim() : null;

    // Extrair email
    const emailMatch = description.match(/[\w.-]+@[\w.-]+\.\w+/);
    const email = emailMatch ? emailMatch[0] : null;

    // Extrair nome (primeira linha ou palavras significativas)
    const nameMatch = description.match(/^(.*?)(?:\.|,|\n|$)/i);
    let rawName = nameMatch ? nameMatch[1].trim() : 'Meu Negocio';
    
    // Limpar nome - remover palavras desnecessarias
    rawName = rawName.replace(/clinica medica chamada/gi, '')
                     .replace(/empresa chamada/gi, '')
                     .replace(/negocio chamado/gi, '')
                     .replace(/loja chamada/gi, '')
                     .replace(/restaurante chamado/gi, '')
                     .replace(/escritorio chamado/gi, '')
                     .replace(/escola chamada/gi, '')
                     .replace(/academia chamada/gi, '')
                     .replace(/salao chamado/gi, '')
                     .replace(/consultorio chamado/gi, '')
                     .trim();
    
    // Se ainda esta muito longo, pegar so as palavras principais
    let businessName = rawName;
    if (businessName.length > 40) {
      businessName = businessName.split(' ').slice(0, 4).join(' ');
    }
    if (!businessName || businessName.length < 2) businessName = 'Meu Negocio';

    extracted = {
      businessName,
      niche,
      description: description.substring(0, 200),
      style: lower.includes('elegant') ? 'elegante' : lower.includes('moderno') ? 'moderno' : lower.includes('minimalista') ? 'minimalista' : 'profissional',
      colors: null,
      phone,
      address,
      email,
      whatsapp,
      instagram,
      sections: ['beneficios', 'contato']
    };
  }

  // Montar config final
  const config = {
    businessName: extracted.businessName || 'Meu Negocio',
    niche: extracted.niche || 'default',
    description: extracted.description || description,
    address: extracted.address || '',
    phone: extracted.phone || '',
    email: extracted.email || '',
    whatsapp: extracted.whatsapp || '',
    instagram: extracted.instagram || '',
    primaryColor: null,
    secondaryColor: null,
    bgColor: null,
    textColor: null,
    accentColor: null,
    observations: description
  };

  let result = buildLandingPage(config);
  
  // Run all agents
  result.html = uiAgentEnhance(result.html, config);
  result.html = uxAgentEnhance(result.html, config);
  result.html = scrollAgentEnhance(result.html, config);
  result.html = typographyAgentEnhance(result.html, config);
  result.html = parallaxAgentEnhance(result.html, config);
  
  // QA Validation
  const qaResult = qaValidate(result.html, config);
  
  return res.status(200).json({ 
    success: true, 
    content: { title: config.businessName, html: result.html }, 
    source: 'agents',
    qa: qaResult
  });
}