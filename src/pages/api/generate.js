export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { niche, businessName, description } = req.body;

  if (!niche || !businessName) {
    return res.status(400).json({ error: 'Nicho e nome sao obrigatorios' });
  }

  try {
    let content;
    
    // Tenta usar Ollama local primeiro, depois fallback para template
    try {
      const ollamaRes = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'qwen3:4b-instruct-2507-q4_K_M',
          prompt: getAIPrompt(niche, businessName, description),
          stream: false
        }),
        signal: AbortSignal.timeout(30000)
      });
      
      if (ollamaRes.ok) {
        const ollamaData = await ollamaRes.json();
        const aiContent = parseAIResponse(ollamaData.response, businessName);
        content = buildLandingPage(niche, businessName, description, aiContent);
      } else {
        throw new Error('Ollama indisponivel');
      }
    } catch (e) {
      // Fallback: gera landing page profissional sem IA
      content = buildLandingPage(niche, businessName, description, null);
    }
    
    res.status(200).json({
      success: true,
      content: content,
      message: 'Landing page gerada com sucesso'
    });
  } catch (error) {
    console.error('Erro ao gerar:', error);
    res.status(500).json({ error: 'Falha ao gerar landing page' });
  }
}

function getAIPrompt(niche, businessName, description) {
  return `Voce e um especialista em marketing digital. Gere o conteudo para uma landing page profissional.

Empresa: ${businessName}
Nicho: ${niche}
Descricao: ${description || 'Nao informada'}

Responda APENAS com JSON valido (sem markdown, sem crases) no formato:
{
  "headline": "titulo principal chamativo",
  "subheadline": "subtitulo explicativo",
  "cta": "texto do botao de acao",
  "features": [
    {"title": "Feature 1", "desc": "Descricao curta"},
    {"title": "Feature 2", "desc": "Descricao curta"},
    {"title": "Feature 3", "desc": "Descricao curta"},
    {"title": "Feature 4", "desc": "Descricao curta"}
  ],
  "testimonial": {"text": "depoimento", "author": "Nome", "role": "Cargo"}
}`;
}

function parseAIResponse(response, businessName) {
  try {
    const cleaned = response.replace(/```json/g, '').replace(/```/g, '').trim();
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
  } catch (e) {}
  return null;
}

function buildLandingPage(niche, businessName, description, aiContent) {
  const configs = {
    'saude': { c1: '#059669', c2: '#10b981', icon: 'health', tagline: 'Saude e Bem-Estar' },
    'tecnologia': { c1: '#6366f1', c2: '#8b5cf6', icon: 'tech', tagline: 'Solucoes Tecnologicas' },
    'imobiliario': { c1: '#d97706', c2: '#f59e0b', icon: 'home', tagline: 'Imoveis' },
    'educacao': { c1: '#dc2626', c2: '#ef4444', icon: 'edu', tagline: 'Educacao' },
    'default': { c1: '#6366f1', c2: '#ec4899', icon: 'star', tagline: 'Solucoes' }
  };
  
  const cfg = configs[niche] || configs['default'];
  
  const headline = aiContent ? aiContent.headline : businessName + ': ' + cfg.tagline;
  const subheadline = aiContent ? aiContent.subheadline : (description || 'Qualidade e compromisso que voce pode confiar');
  const cta = aiContent ? aiContent.cta : 'Entre em contato';
  
  const features = aiContent && aiContent.features ? aiContent.features : [
    { title: 'Qualidade Garantida', desc: 'Excelencia em tudo que fazemos.' },
    { title: 'Compromisso', desc: 'Sua satisfacao e nossa prioridade.' },
    { title: 'Agilidade', desc: 'Respostas rapidas e eficientes.' },
    { title: 'Suporte', desc: 'Estamos sempre aqui para voce.' }
  ];
  
  const testimonial = aiContent && aiContent.testimonial ? aiContent.testimonial : 
    { text: 'Excelente experiencia! Superou todas as minhas expectativas.', author: 'Cliente Satisfeito', role: 'Cliente' };
  
  const stats = [
    { number: (Math.floor(Math.random() * 900) + 100) + '+', label: 'Clientes' },
    { number: '99%', label: 'Satisfacao' },
    { number: '24/7', label: 'Suporte' }
  ];

  const featuresHTML = features.map(f =>
    '<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:32px;text-align:center"><h3 style="color:#fff;font-size:18px;margin-bottom:8px">' + f.title + '</h3><p style="color:#999;font-size:14px;line-height:1.6">' + f.desc + '</p></div>'
  ).join('');

  const statsHTML = stats.map(s =>
    '<div style="text-align:center"><div style="font-size:32px;font-weight:800;background:linear-gradient(135deg,' + cfg.c1 + ',' + cfg.c2 + ');-webkit-background-clip:text;-webkit-text-fill-color:transparent">' + s.number + '</div><div style="color:#666;font-size:13px;margin-top:4px">' + s.label + '</div></div>'
  ).join('');

  const initials = testimonial.author.split(' ').map(w => w[0]).join('').substring(0,2).toUpperCase();

  return {
    title: businessName,
    html: '<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>' + businessName + '</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:Inter,sans-serif;background:#0a0a0a;color:#fff}.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 24px 80px;position:relative;overflow:hidden}.hero::before{content:"";position:absolute;width:600px;height:600px;background:radial-gradient(circle,' + cfg.c1 + '33,transparent 70%);top:-200px;left:50%;transform:translateX(-50%);filter:blur(60px)}.ctr{max-width:900px;margin:0 auto;position:relative;z-index:1}.badge{display:inline-flex;align-items:center;gap:8px;background:' + cfg.c1 + '22;border:1px solid ' + cfg.c1 + '44;padding:8px 16px;border-radius:100px;font-size:13px;color:' + cfg.c2 + ';margin-bottom:24px}.dot{width:8px;height:8px;background:#22c55e;border-radius:50%}h1{font-size:52px;font-weight:800;line-height:1.1;margin-bottom:20px;letter-spacing:-0.02em}.sub{font-size:18px;color:#999;line-height:1.6;margin-bottom:40px;max-width:600px;margin-left:auto;margin-right:auto}.cta{background:linear-gradient(135deg,' + cfg.c1 + ',' + cfg.c2 + ');color:#fff;border:none;padding:16px 36px;border-radius:12px;font-size:16px;font-weight:600;cursor:pointer;transition:all .2s}.cta:hover{transform:translateY(-2px);box-shadow:0 10px 40px ' + cfg.c1 + '44}.sec{padding:100px 24px}.sh{text-align:center;margin-bottom:48px}.sb{display:inline-block;background:' + cfg.c1 + '22;color:' + cfg.c2 + ';padding:6px 14px;border-radius:100px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;margin-bottom:16px}.st{font-size:36px;font-weight:700;margin-bottom:12px}.ss{font-size:15px;color:#999}.fg{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;max-width:1000px;margin:0 auto}.sr{display:flex;justify-content:center;gap:48px;margin-top:60px;padding-top:40px;border-top:1px solid rgba(255,255,255,.06)}.tm{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:36px;max-width:500px;margin:0 auto;text-align:center}.tq{font-size:16px;line-height:1.7;color:#ccc;margin:16px 0 20px;font-style:italic}.ta{display:flex;align-items:center;justify-content:center;gap:12px}.tav{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,' + cfg.c1 + ',' + cfg.c2 + ');display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600}.ft{border-top:1px solid rgba(255,255,255,.06);padding:32px 24px;text-align:center;color:#555;font-size:13px}</style></head><body><section class="hero"><div class="ctr"><div class="badge"><span class="dot"></span>' + businessName + '</div><h1>' + headline + '</h1><p class="sub">' + subheadline + '</p><button class="cta">' + cta + '</button><div style="display:flex;align-items:center;justify-content:center;gap:12px;margin-top:40px"><div style="display:flex"><div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,' + cfg.c1 + ',' + cfg.c2 + ');display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;border:2px solid #0a0a0a">JS</div><div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,' + cfg.c2 + ',' + cfg.c1 + ');display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;border:2px solid #0a0a0a;margin-left:-10px">MS</div><div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#f97316,#fb923c);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;border:2px solid #0a0a0a;margin-left:-10px">AC</div></div><span style="color:#999;font-size:13px"><strong style="color:#fff">+' + (Math.floor(Math.random() * 500) + 200) + ' clientes</strong> confiam em nos</span></div></div></section><section class="sec"><div class="ctr"><div class="sh"><span class="sb">Diferenciais</span><h2 class="st">Por que nos escolher</h2></div><div class="fg">' + featuresHTML + '</div><div class="sr">' + statsHTML + '</div></div></section><section class="sec"><div class="ctr"><div class="sh"><span class="sb">Depoimentos</span><h2 class="st">O que dizem sobre nos</h2></div><div class="tm"><div style="font-size:28px;color:' + cfg.c1 + '44;font-family:Georgia,serif">&ldquo;</div><p class="tq">' + testimonial.text + '</p><div class="ta"><div class="tav">' + initials + '</div><div style="text-align:left"><div style="font-weight:600;font-size:14px">' + testimonial.author + '</div><div style="color:#666;font-size:12px">' + testimonial.role + '</div></div></div></div></div></section><section class="sec" style="text-align:center"><div class="ctr"><h2 style="font-size:32px;font-weight:700;margin-bottom:12px">Pronto para comecar?</h2><p style="color:#999;margin-bottom:28px">Entre em contato conosco hoje mesmo</p><button class="cta" style="font-size:18px;padding:18px 40px">' + cta + '</button></div></section><footer class="ft"><p>&copy; 2026 ' + businessName + '. Todos os direitos reservados.</p><p style="margin-top:6px">Criado com SaaS Generator</p></footer></body></html>'
  };
}
