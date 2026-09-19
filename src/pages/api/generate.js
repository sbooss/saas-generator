export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { niche, businessName, description } = req.body;

  if (!niche || !businessName) {
    return res.status(400).json({ error: 'Niche and business name are required' });
  }

  try {
    const landingPageContent = await generateLandingPage(niche, businessName, description);
    
    res.status(200).json({
      success: true,
      content: landingPageContent,
      message: 'Landing page generated successfully'
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate landing page' });
  }
}

async function generateLandingPage(niche, businessName, description) {
  const templates = {
    'saude': {
      title: businessName + ' - Saude e Bem-Estar',
      subtitle: 'Cuide da sua saude com quem entende',
      cta: 'Agende sua consulta agora',
      features: ['Atendimento personalizado', 'Profissionais qualificados', 'Resultados comprovados']
    },
    'tecnologia': {
      title: businessName + ' - Solucoes Tecnologicas',
      subtitle: 'Inovacao para o seu negocio',
      cta: 'Solicite uma demo gratuita',
      features: ['Suporte 24/7', 'Atualizacoes gratuitas', 'Integracao facil']
    },
    'imobiliario': {
      title: businessName + ' - Imoveis',
      subtitle: 'Encontre o lar dos seus sonhos',
      cta: 'Veja nossos imoveis',
      features: ['Financiamento facilitado', 'Localizacao privilegiada', 'Qualidade garantida']
    },
    'educacao': {
      title: businessName + ' - Educacao',
      subtitle: 'Transforme seu futuro',
      cta: 'Matricule-se agora',
      features: ['Professores especializados', 'Material incluso', 'Certificado reconhecido']
    },
    'default': {
      title: businessName,
      subtitle: description || 'Solucoes para o seu negocio',
      cta: 'Entre em contato',
      features: ['Qualidade garantida', 'Suporte dedicado', 'Preco justo']
    }
  };

  const template = templates[niche] || templates['default'];
  
  return {
    html: '<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>' + template.title + '</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:Arial,sans-serif}.hero{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;padding:100px 20px;text-align:center}.hero h1{font-size:2.5rem;margin-bottom:20px}.hero p{font-size:1.2rem;margin-bottom:30px}.cta-button{background:#fff;color:#667eea;padding:15px 40px;border-radius:30px;font-size:1.1rem;font-weight:bold;text-decoration:none;display:inline-block}.features{padding:60px 20px;text-align:center}.features h2{margin-bottom:40px}.feature-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:30px;max-width:1000px;margin:0 auto}.feature{padding:30px;background:#f8f9fa;border-radius:10px}.feature h3{margin-bottom:15px;color:#667eea}</style></head><body><section class="hero"><h1>' + template.title + '</h1><p>' + template.subtitle + '</p><a href="#contact" class="cta-button">' + template.cta + '</a></section><section class="features"><h2>Por que nos escolher?</h2><div class="feature-grid">' + template.features.map(function(f) { return '<div class="feature"><h3>' + f + '</h3><p>Oferecemos o melhor para voce.</p></div>'; }).join('') + '</div></section></body></html>',
    template: template
  };
}
