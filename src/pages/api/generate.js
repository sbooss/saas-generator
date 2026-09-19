import https from 'https';
import http from 'http';

const NICHOES = {
  "saude": {
    "imagem": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
    "cores": {
      "primary": "#0ea5e9",
      "secondary": "#06b6d4",
      "bg": "#0c1222",
      "text": "#ffffff",
      "accent": "#22c55e"
    },
    "palavrasChave": [
      "saude",
      "clinica",
      "medic",
      "hospital",
      "consultorio",
      "enferm",
      "odontol",
      "dentist",
      "psicolo",
      "fisioter",
      "nutrici",
      "nutri",
      "veterinar",
      "farmacia",
      "laborat"
    ],
    "headline": "Cuide da Sua Saude com Quem Entende",
    "subheadline": "Atendimento humanizado e de excelencia para voce e sua familia. Agende sua consulta hoje e descubra a diferenca de um cuidado verdadeiro.",
    "badge": "Saude & Bem-Estar",
    "cta": "Agende Sua Consulta",
    "stats": [
      {
        "value": "15+",
        "label": "Anos de Experiencia"
      },
      {
        "value": "10.000+",
        "label": "Pacientes Atendidos"
      },
      {
        "value": "98%",
        "label": "Satisfacao"
      },
      {
        "value": "24h",
        "label": "Suporte Emergencia"
      }
    ],
    "features": [
      {
        "icon": "coracao",
        "title": "Equipe Especializada",
        "desc": "Profissionais qualificados e experientes em cada area da saude."
      },
      {
        "icon": "estetoscopio",
        "title": "Estrutura Moderna",
        "desc": "Clinica equipada com os mais modernos equipamentos do mercado."
      },
      {
        "icon": "receita",
        "title": "Tratamento Personalizado",
        "desc": "Cada paciente recebe um plano de tratamento unico e sob medida."
      },
      {
        "icon": "calendario",
        "title": "Agendamento Flexivel",
        "desc": "Marque suas consultas pelo WhatsApp ou telefone, no melhor horario."
      },
      {
        "icon": "escudo",
        "title": "Seguranca e Higiene",
        "desc": "Protocolos rigorosos de seguranca e esterilizacao para sua protecao."
      },
      {
        "icon": "equipe",
        "title": "Acompanhamento Continuo",
        "desc": "Monitoramento constante da sua evolucao com relatorios periodicos."
      }
    ],
    "processo": [
      {
        "step": "01",
        "title": "Primeira Consulta",
        "desc": "Avaliacao completa do seu estado de saude e historico medico."
      },
      {
        "step": "02",
        "title": "Diagnostico Preciso",
        "desc": "Exames e analises detalhadas para identificar o melhor tratamento."
      },
      {
        "step": "03",
        "title": "Plano Personalizado",
        "desc": "Tratamento sob medida criado especificamente para voce."
      },
      {
        "step": "04",
        "title": "Acompanhamento",
        "desc": "Monitoramento continuo e ajustes para garantir os melhores resultados."
      }
    ],
    "depoimento": {
      "texto": "Excelente atendimento! A equipe e muito atenciosa e profissional. Recomendo para toda a familia.",
      "autor": "Maria Silva",
      "cargo": "Paciente ha 3 anos"
    },
    "perguntas": [
      {
        "q": "Como agendar uma consulta?",
        "a": "Voce pode agendar pelo WhatsApp, telefone ou pelo nosso site. Nossa equipe esta pronta para atender voce."
      },
      {
        "q": "Voces aceitam planos de saude?",
        "a": "Sim, trabalhamos com os principais convenios medicos da regiao."
      },
      {
        "q": "Qual o horario de funcionamento?",
        "a": "Segunda a sexta das 7h as 19h, e sabado das 7h as 12h."
      }
    ]
  },
  "beleza": {
    "imagem": "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
    "cores": {
      "primary": "#ec4899",
      "secondary": "#d946ef",
      "bg": "#1a1025",
      "text": "#ffffff",
      "accent": "#f59e0b"
    },
    "palavrasChave": [
      "beleza",
      "salao",
      "cabelo",
      "estetic",
      "manicur",
      "maquiag",
      "depil",
      "sobrancelha",
      "unha"
    ],
    "headline": "Sua Beleza Merece O Melhor",
    "subheadline": "Tratamentos exclusivos com profissionais especializados e produtos de alta qualidade. Transforme seu visual com quem entende.",
    "badge": "Beleza & Estilo",
    "cta": "Agende Seu Horario",
    "stats": [
      {
        "value": "8+",
        "label": "Anos de Experiencia"
      },
      {
        "value": "5.000+",
        "label": "Clientes Atendidos"
      },
      {
        "value": "99%",
        "label": "Satisfacao"
      },
      {
        "value": "30+",
        "label": "Especialistas"
      }
    ],
    "features": [
      {
        "icon": "estrela",
        "title": "Produtos Premium",
        "desc": "Utilizamos apenas marcas reconhecidas internacionalmente."
      },
      {
        "icon": "relogio",
        "title": "Servicos Completos",
        "desc": "De cabelo a unha, tudo o que voce precisa em um so lugar."
      },
      {
        "icon": "tendencia",
        "title": "Tendencias Atuais",
        "desc": "Profissionais sempre atualizados com as ultimas tendencias do mercado."
      },
      {
        "icon": "relaxamento",
        "title": "Experiencia Relaxante",
        "desc": "Ambiente projetado para seu conforto e bem-estar total."
      },
      {
        "icon": "equipe",
        "title": "Profissionais Certificados",
        "desc": "Equipe com certificacoes nas melhores escolas do pais."
      },
      {
        "icon": "escudo",
        "title": "Qualidade Garantida",
        "desc": "Resultados que superam expectativas a cada visita."
      }
    ],
    "processo": [
      {
        "step": "01",
        "title": "Consulta Inicial",
        "desc": "Analisamos seu estilo e desejos para criar um plano personalizado."
      },
      {
        "step": "02",
        "title": "Preparacao",
        "desc": "Preparacao dos materiais e produtos de alta qualidade."
      },
      {
        "step": "03",
        "title": "Execucao",
        "desc": "Procedimento realizado com tecnicas avancadas e precisao."
      },
      {
        "step": "04",
        "title": "Pos-Atendimento",
        "desc": "Orientacoes para manter o resultado por mais tempo."
      }
    ],
    "depoimento": {
      "texto": "Sempre saio de la maravilhosa! Profissionais excelentes e ambiente super acolhedor.",
      "autor": "Juliana Costa",
      "cargo": "Cliente ha 2 anos"
    },
    "perguntas": [
      {
        "q": "Preciso agendar com antecedencia?",
        "a": "Recomendamos agendar com 2-3 dias de antecedencia para garantir seu horario ideal."
      },
      {
        "q": "Qual a diferenca entre os servicos?",
        "a": "Cada servico e personalizado. Na consulta inicial, definimos juntos o melhor tratamento para voce."
      },
      {
        "q": "Voces usam produtos importados?",
        "a": "Sim, trabalhamos com marcas premium nacionais e importadas de alta qualidade."
      }
    ]
  },
  "fitness": {
    "imagem": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
    "cores": {
      "primary": "#22c55e",
      "secondary": "#16a34a",
      "bg": "#0a1a0f",
      "text": "#ffffff",
      "accent": "#f59e0b"
    },
    "palavrasChave": [
      "fitness",
      "academia",
      "treino",
      "muscul",
      "gym",
      "personal",
      "crossfit",
      "pilates",
      "yoga",
      "emagrec",
      "workout",
      "exercicio"
    ],
    "headline": "Transforme Seu Corpo, Mude Sua Vida",
    "subheadline": "Academia completa com equipamentos modernos e personal trainers qualificados. Comece sua transformacao hoje.",
    "badge": "Fitness & Performance",
    "cta": "Comece Agora",
    "stats": [
      {
        "value": "10+",
        "label": "Anos no Mercado"
      },
      {
        "value": "3.000+",
        "label": "Alunos Ativos"
      },
      {
        "value": "95%",
        "label": "Atingimento de Metas"
      },
      {
        "value": "50+",
        "label": "Modalidades"
      }
    ],
    "features": [
      {
        "icon": "halter",
        "title": "Equipamentos Modernos",
        "desc": "Maquinas de ultima geracao para seu treino ideal."
      },
      {
        "icon": "personal",
        "title": "Personal Training",
        "desc": "Treinos personalizados por profissionais certificados."
      },
      {
        "icon": "nutricao",
        "title": "Acompanhamento Nutricional",
        "desc": "Nutricionista para complementar seus resultados."
      },
      {
        "icon": "app",
        "title": "App Exclusivo",
        "desc": "Acompanhe seus treinos e evolucao pelo celular."
      },
      {
        "icon": "equipe",
        "title": "Profissionais Qualificados",
        "desc": "Time com formacao e certificacoes reconhecidas."
      },
      {
        "icon": "estrela",
        "title": "Ambiente Motivador",
        "desc": "Espaco projetado para voce dar o maximo em cada treino."
      }
    ],
    "processo": [
      {
        "step": "01",
        "title": "Avaliacao Fisica",
        "desc": "Testes funcionais e analise completa do seu corpo."
      },
      {
        "step": "02",
        "title": "Plano de Treino",
        "desc": "Programa personalizado baseado nos seus objetivos."
      },
      {
        "step": "03",
        "title": "Execucao Guiada",
        "desc": "Treinos supervisionados com correcao de postura."
      },
      {
        "step": "04",
        "title": "Evolucao Continua",
        "desc": "Reavaliacoes periodicas e ajustes no programa."
      }
    ],
    "depoimento": {
      "texto": "Perdi 15kg em 4 meses! O time de profissionais e incrivel e o ambiente e muito motivador.",
      "autor": "Marcos Oliveira",
      "cargo": "Aluno ha 1 ano"
    },
    "perguntas": [
      {
        "q": "Preciso ter experiencia para comecar?",
        "a": "Nao! Temos programas para todos os niveis, do iniciante ao avancado."
      },
      {
        "q": "O plano de nutricao esta incluso?",
        "a": "Sim, todos os planos incluem acompanhamento nutricional completo."
      },
      {
        "q": "Quantas vezes por semana devo treinar?",
        "a": "Depende do seu objetivo. Geralmente recomendamos 3-5 vezes por semana."
      }
    ]
  },
  "restaurante": {
    "imagem": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    "cores": {
      "primary": "#dc2626",
      "secondary": "#b91c1c",
      "bg": "#1c1917",
      "text": "#ffffff",
      "accent": "#f59e0b"
    },
    "palavrasChave": [
      "restaurante",
      "restaur",
      "comida",
      "food",
      "pizzaria",
      "hamburgueria",
      "lanchonete",
      "bar",
      "pub",
      "churras",
      "gastronom",
      "culinaria",
      "cozinha",
      "brasserie"
    ],
    "headline": "Uma Experiencia Gastronomica Imperdivel",
    "subheadline": "Sabores unicos em um ambiente acolhedor. Venha conhecer nossa cozinha e surpreenda-se com cada prato.",
    "badge": "Gastronomia",
    "cta": "Reserve Sua Mesa",
    "stats": [
      {
        "value": "12+",
        "label": "Anos de Tradicao"
      },
      {
        "value": "500+",
        "label": "Pratos Servidos/Dia"
      },
      {
        "value": "4.9",
        "label": "Nota no Google"
      },
      {
        "value": "100%",
        "label": "Ingredientes Frescos"
      }
    ],
    "features": [
      {
        "icon": "talher",
        "title": "Cozinha Autoral",
        "desc": "Pratos criados pelo nosso chef com ingredientes selecionados."
      },
      {
        "icon": "copo",
        "title": "Carta de Vinhos",
        "desc": "Selecao refinada de vinhos nacionais e importados."
      },
      {
        "icon": "ambiente",
        "title": "Ambiente Premium",
        "desc": "Decoracao elegante e trilha sonora para uma noite perfeita."
      },
      {
        "icon": "calendario",
        "title": "Reserva Online",
        "desc": "Agende sua mesa pelo WhatsApp ou nosso site."
      },
      {
        "icon": "estrela",
        "title": "Chef Premiado",
        "desc": "Cozinha liderada por chef com reconhecimento nacional."
      },
      {
        "icon": "equipe",
        "title": "Servico Impecavel",
        "desc": "Equipe treinada para oferecer uma experiencia completa."
      }
    ],
    "processo": [
      {
        "step": "01",
        "title": "Reserva",
        "desc": "Agende sua mesa pelo WhatsApp ou telefone."
      },
      {
        "step": "02",
        "title": "Boas-Vindas",
        "desc": "Recepcao calorosa e apresentacao do menu do dia."
      },
      {
        "step": "03",
        "title": "Experiencia",
        "desc": "Pratos elaborados com tecnicas refinadas e ingredientes premium."
      },
      {
        "step": "04",
        "title": "Sobremesa",
        "desc": "Finalize com nossas sobremesas artesanais e cafe especial."
      }
    ],
    "depoimento": {
      "texto": "Melhor restaurante da cidade! Comida excepcional e atendimento impecavel. Voltarei muitas vezes.",
      "autor": "Fernanda Lima",
      "cargo": "Cliente frequente"
    },
    "perguntas": [
      {
        "q": "Precisa fazer reserva?",
        "a": "Recomendamos reserva, especialmente nos fins de semana. Pelo WhatsApp e rapido e facil."
      },
      {
        "q": "Tem opcao para vegetarianos?",
        "a": "Sim, temos opcoes vegetarianas e veganas no cardapio fixo e do dia."
      },
      {
        "q": "Fazem delivery?",
        "a": "Sim, nosso delivery esta disponivel pelo iFood e WhatsApp."
      }
    ]
  },
  "advocacia": {
    "imagem": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
    "cores": {
      "primary": "#1e3a5f",
      "secondary": "#2d5a87",
      "bg": "#0d1117",
      "text": "#ffffff",
      "accent": "#c9a227"
    },
    "palavrasChave": [
      "advoc",
      "advogad",
      "juridic",
      "direito",
      "advocacia",
      "penal",
      "civil",
      "trabalhist",
      "empresarial",
      "familia"
    ],
    "headline": "Assessoria Juridica De Confianca",
    "subheadline": "Advocacia especializada com atendimento personalizado e resultados comprovados. Sua causa e nossa prioridade.",
    "badge": "Direito & Justica",
    "cta": "Consulte Seu Caso",
    "stats": [
      {
        "value": "20+",
        "label": "Anos de Experiencia"
      },
      {
        "value": "500+",
        "label": "Casos Resolvidos"
      },
      {
        "value": "97%",
        "label": "Taxa de Sucesso"
      },
      {
        "value": "100%",
        "label": "Compromisso Etico"
      }
    ],
    "features": [
      {
        "icon": "balanca",
        "title": "Especializacao Total",
        "desc": "Cada advogado e especialista em sua area de atuacao."
      },
      {
        "icon": "documento",
        "title": "Experiencia Comprovada",
        "desc": "Mais de 500 casos resolvidos com sucesso comprovado."
      },
      {
        "icon": "equipe",
        "title": "Atendimento Humanizado",
        "desc": "Cada caso recebe atencao dedicada e personalizada."
      },
      {
        "icon": "relogio",
        "title": "Transparencia Total",
        "desc": "Acompanhamento em tempo real do seu caso."
      },
      {
        "icon": "escudo",
        "title": "Sigilo Profissional",
        "desc": "Total discri e confidencialidade em todas as etapas."
      },
      {
        "icon": "calendario",
        "title": "Prazos Cumpridos",
        "desc": "Compromisso rigoroso com prazos processuais."
      }
    ],
    "processo": [
      {
        "step": "01",
        "title": "Consulta Inicial",
        "desc": "Analise gratuita do seu caso e orientacao juridica."
      },
      {
        "step": "02",
        "title": "Estrategia",
        "desc": "Definicao da melhor estrategia para seu caso."
      },
      {
        "step": "03",
        "title": "Execucao",
        "desc": "Atuacao tecnica com dedicacao total ao seu processo."
      },
      {
        "step": "04",
        "title": "Resolucao",
        "desc": "Busca pela melhor solucao com eficiencia e etica."
      }
    ],
    "depoimento": {
      "texto": "Resolveu meu caso com muita competencia e profissionalismo. Super recomendo o escritorio.",
      "autor": "Roberto Santos",
      "cargo": "Cliente ha 5 anos"
    },
    "perguntas": [
      {
        "q": "A primeira consulta e gratuita?",
        "a": "Sim, oferecemos uma analise inicial sem compromisso para entender seu caso."
      },
      {
        "q": "Quais areas voces atendem?",
        "a": "Civil, trabalhista, penal, empresarial, familia, tributario e mais."
      },
      {
        "q": "Como acompanho meu processo?",
        "a": "Atraves do nosso canal direto com o advogado responsavel e relatorios periodicos."
      }
    ]
  },
  "tecnologia": {
    "imagem": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    "cores": {
      "primary": "#6366f1",
      "secondary": "#8b5cf6",
      "bg": "#0a0a0a",
      "text": "#ffffff",
      "accent": "#22c55e"
    },
    "palavrasChave": [
      "tecnologia",
      "software",
      "sistema",
      "tech",
      "startup",
      "digital",
      "desenvolv",
      "programac",
      "web",
      "app",
      "plataforma",
      "ti",
      "informatica"
    ],
    "headline": "Solucoes Tecnologicas Que Impulsionam Seu Negocio",
    "subheadline": "Desenvolvemos sistemas sob medida que aumentam sua produtividade e reduzem custos. Inovacao que gera resultado real.",
    "badge": "Tech & Inovacao",
    "cta": "Solicite Uma Demonstracao",
    "stats": [
      {
        "value": "200+",
        "label": "Projetos Entregues"
      },
      {
        "value": "50+",
        "label": "Empresas Atendidas"
      },
      {
        "value": "99.9%",
        "label": "Uptime Garantido"
      },
      {
        "value": "24/7",
        "label": "Suporte Tecnico"
      }
    ],
    "features": [
      {
        "icon": "raio",
        "title": "Sistemas Sob Medida",
        "desc": "Software desenvolvido especificamente para as necessidades do seu negocio."
      },
      {
        "icon": "escudo",
        "title": "Seguranca Garantida",
        "desc": "Protecao de dados com criptografia de nivel bancario."
      },
      {
        "icon": "grafico",
        "title": "Relatorios Inteligentes",
        "desc": "Dashboards que transformam dados em decisoes estrategicas."
      },
      {
        "icon": "suporte",
        "title": "Suporte 24/7",
        "desc": "Nossa equipe esta sempre disponivel para quando voce precisar."
      },
      {
        "icon": "mundo",
        "title": "Escalabilidade",
        "desc": "Solucoes que crescem junto com o seu negocio sem perda de performance."
      },
      {
        "icon": "integracao",
        "title": "Integracao Total",
        "desc": "Conectamos seus sistemas existentes em uma plataforma unica e eficiente."
      }
    ],
    "processo": [
      {
        "step": "01",
        "title": "Descoberta",
        "desc": "Entendemos profundamente seu negocio e suas necessidades."
      },
      {
        "step": "02",
        "title": "Planejamento",
        "desc": "Arquitetura detalhada e cronograma transparente do projeto."
      },
      {
        "step": "03",
        "title": "Desenvolvimento",
        "desc": "Agil com entregas incrementais e feedback constante."
      },
      {
        "step": "04",
        "title": "Lancamento",
        "desc": "Deploy, treinamento e suporte continuo para seu time."
      }
    ],
    "depoimento": {
      "texto": "A solucao transformou nossa operacao. Reduzimos 40% dos custos operacionais no primeiro ano.",
      "autor": "Carlos Mendes",
      "cargo": "CEO da TechStart"
    },
    "perguntas": [
      {
        "q": "Quanto tempo leva para desenvolver?",
        "a": "Projetos simples em 4-6 semanas. Sistemas complexos em 2-4 meses com entregas parciais."
      },
      {
        "q": "Voces trabalham com quais tecnologias?",
        "a": "React, Next.js, Node.js, Python, e as stacks mais modernas do mercado."
      },
      {
        "q": "Ha suporte pos-lancamento?",
        "a": "Sim, oferecemos suporte continuo e evolucao do sistema apos o lancamento."
      }
    ]
  },
  "imobiliario": {
    "imagem": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    "cores": {
      "primary": "#f59e0b",
      "secondary": "#d97706",
      "bg": "#1a1a1a",
      "text": "#ffffff",
      "accent": "#22c55e"
    },
    "palavrasChave": [
      "imobili",
      "imovel",
      "imoveis",
      "apartamento",
      "casa",
      "condominio",
      "corretor",
      "compra",
      "venda",
      "aluguel",
      "terreno",
      "empreendimento"
    ],
    "headline": "Encontre O Imovel Dos Seus Sonhos",
    "subheadline": "As melhores opcoes de imoveis com atendimento personalizado e financiamento facilitado. Realize seu sonho da casa propria.",
    "badge": "Imoveis & Negocios",
    "cta": "Conheca Os Imoveis",
    "stats": [
      {
        "value": "25+",
        "label": "Anos de Mercado"
      },
      {
        "value": "1.500+",
        "label": "Imoveis Vendidos"
      },
      {
        "value": "98%",
        "label": "Clientes Satisfeitos"
      },
      {
        "value": "100+",
        "label": "Parcerias Bancarias"
      }
    ],
    "features": [
      {
        "icon": "casa",
        "title": "Portfolio Exclusivo",
        "desc": "Imoveis selecionados nas melhores localizacoes da cidade."
      },
      {
        "icon": "financiamento",
        "title": "Financiamento Facilitado",
        "desc": "Parceria com os principais bancos para o melhor financiamento."
      },
      {
        "icon": "localizacao",
        "title": "Localizacao Privilegiada",
        "desc": "Imoveis em bairros valorizados com infraestrutura completa."
      },
      {
        "icon": "equipe",
        "title": "Assessoria Completa",
        "desc": "Do papel ao cambio, cuidamos de tudo para voce."
      },
      {
        "icon": "documento",
        "title": "Documentacao Assistida",
        "desc": "Orientacao completa em toda burocracia do processo."
      },
      {
        "icon": "grafico",
        "title": "Avaliacao Justa",
        "desc": "Precos justos baseados em analise de mercado atualizada."
      }
    ],
    "processo": [
      {
        "step": "01",
        "title": "Busca Personalizada",
        "desc": "Filtramos imoveis que atendam seus criterios e desejo."
      },
      {
        "step": "02",
        "title": "Visita Guiada",
        "desc": "Tour pelos imoveis com informacoes detalhadas."
      },
      {
        "step": "03",
        "title": "Negociacao",
        "desc": "Intermediacao para obter as melhores condicoes."
      },
      {
        "step": "04",
        "title": "Documentacao",
        "desc": "Cuidamos de toda a parte legal e burocratica."
      }
    ],
    "depoimento": {
      "texto": "Conseguimos nosso apartamento ideal com condicoes muito boas. Equipe extremamente profissional.",
      "autor": "Ana e Pedro",
      "cargo": "Novos proprietarios"
    },
    "perguntas": [
      {
        "q": "Como funciona a busca personalizada?",
        "a": "Voce nos conta o que procura e fazemos uma selecao criteriosa de imoveis para voce."
      },
      {
        "q": "Voces ajudam com financiamento?",
        "a": "Sim, temos parceria com os principais bancos e acompanhamos todo o processo."
      },
      {
        "q": "Tem imovel para todos os orcamentos?",
        "a": "Sim, temos opcoes de todos os valores, do starter ao alto padrao."
      }
    ]
  },
  "educacao": {
    "imagem": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
    "cores": {
      "primary": "#3b82f6",
      "secondary": "#2563eb",
      "bg": "#0f172a",
      "text": "#ffffff",
      "accent": "#f59e0b"
    },
    "palavrasChave": [
      "educac",
      "escola",
      "curso",
      "aula",
      "faculdade",
      "universidade",
      "professor",
      "aluno",
      "ensino",
      "treinamento",
      "capacitac",
      "colegio"
    ],
    "headline": "Transforme Seu Futuro Atraves Da Educacao",
    "subheadline": "Cursos e programas de alta qualidade para impulsionar sua carreira. Aprenda com os melhores e alcance seus objetivos.",
    "badge": "Educacao & Formacao",
    "cta": "Inscreva-Se Agora",
    "stats": [
      {
        "value": "10+",
        "label": "Anos de Experiencia"
      },
      {
        "value": "5.000+",
        "label": "Alunos Formados"
      },
      {
        "value": "95%",
        "label": "Indice de Aprovacao"
      },
      {
        "value": "100+",
        "label": "Cursos Disponiveis"
      }
    ],
    "features": [
      {
        "icon": "livro",
        "title": "Conteudo Atualizado",
        "desc": "Grade curricular alinhada com as demandas do mercado."
      },
      {
        "icon": "professor",
        "title": "Professores Experientes",
        "desc": "Corpo docente com ampla experiencia pratica e academica."
      },
      {
        "icon": "alvo",
        "title": "Metodologia Pratica",
        "desc": "Aprenda fazendo com projetos reais e estudos de caso."
      },
      {
        "icon": "certificado",
        "title": "Certificacao Reconhecida",
        "desc": "Diploma validado e reconhecido pelo mercado de trabalho."
      },
      {
        "icon": "equipe",
        "title": "Turmas Reduzidas",
        "desc": "Atendimento personalizado com grupos de ate 15 alunos."
      },
      {
        "icon": "flexibilidade",
        "title": "Horarios Flexiveis",
        "desc": "Aulas presenciais e online nos melhores horarios."
      }
    ],
    "processo": [
      {
        "step": "01",
        "title": "Inscricao",
        "desc": "Processo simplificado online ou presencial."
      },
      {
        "step": "02",
        "title": "Nivelamento",
        "desc": "Avaliacao do nivel atual para personalizar o aprendizado."
      },
      {
        "step": "03",
        "title": "Aprendizado",
        "desc": "Aulas dinamicas com foco em pratica e resultado."
      },
      {
        "step": "04",
        "title": "Certificacao",
        "desc": "Exame final e emissao de certificado reconhecido."
      }
    ],
    "depoimento": {
      "texto": "O curso mudou minha trajetoria profissional. Em 6 meses ja estava atuando na area que sempre quis.",
      "autor": "Lucas Ferreira",
      "cargo": "Ex-aluno, agora gerente"
    },
    "perguntas": [
      {
        "q": "Os cursos sao presenciais ou online?",
        "a": "Temos opcoes presenciais, online ao vivo e material gravado para voce assistir no seu ritmo."
      },
      {
        "q": "Ha bolsas de estudo?",
        "a": "Sim, oferecemos bolsas parciais e integrais para alunos com desempenho academico."
      },
      {
        "q": "O certificado e reconhecido?",
        "a": "Sim, nossos certificados sao reconhecidos pelo mercado e validados pelas normas vigentes."
      }
    ]
  },
  "consultoria": {
    "imagem": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    "cores": {
      "primary": "#6366f1",
      "secondary": "#4f46e5",
      "bg": "#0f0f23",
      "text": "#ffffff",
      "accent": "#22c55e"
    },
    "palavrasChave": [
      "consult",
      "assessor",
      "marketing",
      "contabil",
      "contabilidade",
      "gestao",
      "estrateg",
      "negocios",
      "empresarial"
    ],
    "headline": "Estrategia Que Gera Resultados Reais",
    "subheadline": "Consultoria especializada para levar seu negocio ao proximo nivel. Planejamento estrategico que transforma empresas.",
    "badge": "Estrategia & Gestao",
    "cta": "Fale Com Um Consultor",
    "stats": [
      {
        "value": "15+",
        "label": "Anos de Mercado"
      },
      {
        "value": "200+",
        "label": "Empresas Atendidas"
      },
      {
        "value": "3x",
        "label": "ROI Medio"
      },
      {
        "value": "98%",
        "label": "Retorno dos Clientes"
      }
    ],
    "features": [
      {
        "icon": "grafico",
        "title": "Analise Profunda",
        "desc": "Diagnostico completo da situacao atual do seu negocio."
      },
      {
        "icon": "alvo",
        "title": "Plano Personalizado",
        "desc": "Estrategia sob medida para seus objetivos especificos."
      },
      {
        "icon": "equipe",
        "title": "Time Experiente",
        "desc": "Consultores com ampla experiencia no mercado."
      },
      {
        "icon": "resultado",
        "title": "Resultados Mensuraveis",
        "desc": "Acompanhamento mensal com metricas claras de evolucao."
      },
      {
        "icon": "inovacao",
        "title": "Inovacao Continua",
        "desc": "Atualizacoes constantes com as melhores praticas do mercado."
      },
      {
        "icon": "suporte",
        "title": "Suporte Dedicado",
        "desc": "Consultor exclusivo para acompanhar sua empresa."
      }
    ],
    "processo": [
      {
        "step": "01",
        "title": "Diagnostico",
        "desc": "Analise completa da situacao atual do seu negocio."
      },
      {
        "step": "02",
        "title": "Planejamento",
        "desc": "Definicao de metas, estrategias e plano de acao."
      },
      {
        "step": "03",
        "title": "Implementacao",
        "desc": "Execucao guiada com acompanhamento constante."
      },
      {
        "step": "04",
        "title": "Avaliacao",
        "desc": "Medicao de resultados e ajustes para otimizacao continua."
      }
    ],
    "depoimento": {
      "texto": "A consultoria triplicou nosso faturamento em 8 meses. Investimento que valeu cada centavo.",
      "autor": "Roberto Almeida",
      "cargo": "Diretor da EmpresaXYZ"
    },
    "perguntas": [
      {
        "q": "Como funciona a primeira consulta?",
        "a": "Fazemos uma analise preliminar gratuita para entender suas necessidades."
      },
      {
        "q": "Qual o prazo para ver resultados?",
        "a": "Resultados iniciais em 30-60 dias. Transformacao completa em 6-12 meses."
      },
      {
        "q": "Trabalham com empresas de que porte?",
        "a": "De pequenas startups a grandes corporacoes. Adaptamos nossa abordagem ao seu porte."
      }
    ]
  },
  "petshop": {
    "imagem": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80",
    "cores": {
      "primary": "#f97316",
      "secondary": "#ea580c",
      "bg": "#1a1410",
      "text": "#ffffff",
      "accent": "#22c55e"
    },
    "palavrasChave": [
      "pet",
      "petshop",
      "pet shop",
      "cachorro",
      "gato",
      "animal",
      "banho",
      "tosa",
      "racoes",
      "adocao"
    ],
    "headline": "Amor E Cuidado Para Seu Melhor Amigo",
    "subheadline": "Produtos e servicos de qualidade para o bem-estar do seu pet. Porque eles merecem o melhor cuidado e atencao.",
    "badge": "Pet & Cuidados",
    "cta": "Conheca Nossos Servicos",
    "stats": [
      {
        "value": "10+",
        "label": "Anos de Experiencia"
      },
      {
        "value": "8.000+",
        "label": "Pets Atendidos"
      },
      {
        "value": "99%",
        "label": "Donos Satisfeitos"
      },
      {
        "value": "50+",
        "label": "Marcas de Confianca"
      }
    ],
    "features": [
      {
        "icon": "pet",
        "title": "Produtos Premium",
        "desc": "Marcas reconhecidas para a saude do seu pet."
      },
      {
        "icon": "banho",
        "title": "Banho e Tosa",
        "desc": "Higienizacao completa com produtos hipoalergenicos."
      },
      {
        "icon": "veterinario",
        "title": "Veterinaria 24h",
        "desc": "Atendimento de emergencia a qualquer hora do dia."
      },
      {
        "icon": "adocao",
        "title": "Adocao Responsavel",
        "desc": "Facilitamos a adocao de animais resgatados."
      },
      {
        "icon": "equipe",
        "title": "Profissionais Amigaveis",
        "desc": "Equipe apaixonada por animais e capacitada."
      },
      {
        "icon": "ambiente",
        "title": "Ambiente Acolhedor",
        "desc": "Espaco planejado para o conforto e seguranca dos pets."
      }
    ],
    "processo": [
      {
        "step": "01",
        "title": "Chegada",
        "desc": "Recepcao calorosa do seu pet com avaliacao inicial."
      },
      {
        "step": "02",
        "title": "Cuidados",
        "desc": "Procedimento escolhido com carinho e profissionalismo."
      },
      {
        "step": "03",
        "title": "Passeio",
        "desc": "Momento de lazer e socializacao em area verde."
      },
      {
        "step": "04",
        "title": "Retorno",
        "desc": "Seu pet feliz e saudavel de volta para voce."
      }
    ],
    "depoimento": {
      "texto": "Meu cao adora ir ao pet shop! O atendimento e carinhoso e os produtos sao de excelente qualidade.",
      "autor": "Patricia Mendes",
      "cargo": "Cliente ha 3 anos"
    },
    "perguntas": [
      {
        "q": "Voces atendem quais animais?",
        "a": "Cachorros, gatos, coelhos e pequenos animais. Consulte disponibilidade para outros."
      },
      {
        "q": "Preciso agendar banho e tosa?",
        "a": "Recomendamos agendar para garantir horario, mas tambem atendemos por demanda."
      },
      {
        "q": "Vendem racoes especializadas?",
        "a": "Sim, trabalhamos com as melhores marcas e racoes para todas as idades e necessidades."
      }
    ]
  },
  "barbearia": {
    "imagem": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=80",
    "cores": {
      "primary": "#78350f",
      "secondary": "#92400e",
      "bg": "#1c1917",
      "text": "#ffffff",
      "accent": "#d97706"
    },
    "palavrasChave": [
      "barbearia",
      "barbeiro",
      "barba",
      "cabelo masculino",
      "corte masculino",
      "grooming",
      "barber"
    ],
    "headline": "Estilo Que Define Sua Identidade",
    "subheadline": "Barbearia classica com toque moderno. Cortes e barbas feitos com precisao por barbeiros experientes e apaixonados.",
    "badge": "Barbearia & Estilo",
    "cta": "Agende Seu Horario",
    "stats": [
      {
        "value": "12+",
        "label": "Anos de Tradicao"
      },
      {
        "value": "15.000+",
        "label": "Clientes Atendidos"
      },
      {
        "value": "5.0",
        "label": "Nota no Google"
      },
      {
        "value": "20+",
        "label": "Barbeiros Expert"
      }
    ],
    "features": [
      {
        "icon": "tesoura",
        "title": "Corte Masculino",
        "desc": "Cortes classicos e modernos executados com precisao."
      },
      {
        "icon": "barba",
        "title": "Barba Completa",
        "desc": "Barba feita com navalha, toalha quente e produtos premium."
      },
      {
        "icon": "shampoo",
        "title": "Tratamento Capilar",
        "desc": "Produtos de lavagem e hidratacao para cabelo e barba."
      },
      {
        "icon": "ambiente",
        "title": "Ambiente Masculino",
        "desc": "Decoracao classica com musica boa e cafe espresso."
      },
      {
        "icon": "rapido",
        "title": "Agilidade",
        "desc": "Servico rapido e eficiente sem perder qualidade."
      },
      {
        "icon": "fidelidade",
        "title": "Programa Fidelidade",
        "desc": "A cada 10 cortes, o proximo e por nossa conta."
      }
    ],
    "processo": [
      {
        "step": "01",
        "title": "Recepcao",
        "desc": "Cafe espresso e revista enquanto voce espera."
      },
      {
        "step": "02",
        "title": "Consulta",
        "desc": "Entendemos o estilo que voce quer e aconselhamos."
      },
      {
        "step": "03",
        "title": "Execucao",
        "desc": "Corte e/ou barba com tecnicas precisas e detalhadas."
      },
      {
        "step": "04",
        "title": "Acabamento",
        "desc": "Produtos de finalizacao e orientacao para manter em casa."
      }
    ],
    "depoimento": {
      "texto": "Melhor barbearia da cidade! Ambiente top, barbeiros experts e atendimento impecavel.",
      "autor": "Felipe Santos",
      "cargo": "Cliente ha 2 anos"
    },
    "perguntas": [
      {
        "q": "Preciso agendar?",
        "a": "Recomendamos agendar pelo WhatsApp, mas tambem atendemos por ordem de chegada."
      },
      {
        "q": "Fazem somente barba?",
        "a": "Sim, fazemos barba avulsa com navalha, toalha quente e hidratacao."
      },
      {
        "q": "Voces vendem produtos?",
        "a": "Sim, temos pomadas, oleos e produtos para barba das melhores marcas."
      }
    ]
  },
  "padaria": {
    "imagem": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80",
    "cores": {
      "primary": "#b45309",
      "secondary": "#d97706",
      "bg": "#1c1917",
      "text": "#ffffff",
      "accent": "#22c55e"
    },
    "palavrasChave": [
      "padaria",
      "padaria artesanal",
      "confeit",
      "pao",
      "bolos",
      "doces",
      "salgados",
      "confeiteir",
      "bakery",
      "panificadora",
      "pastelaria"
    ],
    "headline": "Sabores Que Enchem O Coracao",
    "subheadline": "Padaria artesanal com produtos frescos diarios. Pao, bolos e doces feitos com carinho e ingredientes selecionados.",
    "badge": "Padaria & Confeitaria",
    "cta": "Conheca Nossos Produtos",
    "stats": [
      {
        "value": "20+",
        "label": "Anos de Tradicao"
      },
      {
        "value": "300+",
        "label": "Produtos Variados"
      },
      {
        "value": "100%",
        "label": "Ingredientes Naturais"
      },
      {
        "value": "5.0",
        "label": "Nota dos Clientes"
      }
    ],
    "features": [
      {
        "icon": "pao",
        "title": "Pao Artesanal",
        "desc": "Pao fresco diariamente com fermentacao natural e farinhas selecionadas."
      },
      {
        "icon": "bolo",
        "title": "Bolos e Doces",
        "desc": "Confeitaria fina com sabores classicos e criativos."
      },
      {
        "icon": "salgado",
        "title": "Salgados Quentes",
        "desc": "Coxinhas, esfihas e salgados assados na hora."
      },
      {
        "icon": "cafe",
        "title": "Cafe da Manha",
        "desc": "Combo completo de cafe com pao fresco, manteiga e geleias."
      },
      {
        "icon": "encomenda",
        "title": "Encomendas",
        "desc": "Bolos personalizados para aniversarios e eventos."
      },
      {
        "icon": "ambiente",
        "title": "Ambiente Acolhedor",
        "desc": "Espaco para voce comer no local com aroma irresistivel."
      }
    ],
    "processo": [
      {
        "step": "01",
        "title": "Matinais",
        "desc": "Acordamos cedo para assar tudo fresquinho."
      },
      {
        "step": "02",
        "title": "Producao",
        "desc": "Ingredientes selecionados e receitas artesanais."
      },
      {
        "step": "03",
        "title": "Fresquinho",
        "desc": "Produtos quentes saindo do forno o dia inteiro."
      },
      {
        "step": "04",
        "title": "Entrega",
        "desc": "Do forno direto para voce, com todo carinho."
      }
    ],
    "depoimento": {
      "texto": "O pao deles e o melhor da cidade! Fresquinho todo dia e o atendimento e maravilhoso.",
      "autor": "Claudia Ferreira",
      "cargo": "Cliente diaria"
    },
    "perguntas": [
      {
        "q": "Que horas abre?",
        "a": "Abrimos as 6h da manha com pao fresquinho. Funcionamos ate as 20h."
      },
      {
        "q": "Fazem bolos personalizados?",
        "a": "Sim! Aceitamos encomendas com pelo menos 48h de antecedencia."
      },
      {
        "q": "Tem opcao fit ou saudavel?",
        "a": "Sim, temos opcoes com farinha integral, sem gluten e ingredientes naturais."
      }
    ]
  }
};

const P = {
  "coracao": "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  "estetoscopio": "M22 12h-4l-3 9L9 3l-3 9H2",
  "receita": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z|polyline:14 2 14 8 20 8|line:16 13 8 13|line:16 17 8 17",
  "calendario": "rect:3 4 18 18 rx 2|line:16 2 16 6|line:8 2 8 6|line:3 10 21 10",
  "escudo": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  "equipe": "path:M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2|circle:9 7 4|path:M23 21v-2a4 4 0 0 0-3-3.87|path:M16 3.13a4 4 0 0 1 0 7.75",
  "estrela": "polygon:12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
  "relogio": "circle:12 12 10|polyline:12 6 12 12 16 14",
  "tendencia": "polyline:23 6 13.5 15.5 8.5 10.5 1 18|polyline:17 6 23 6 23 12",
  "relaxamento": "M18 8h1a4 4 0 0 1 0 8h-1|M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z",
  "halter": "rect:2 7 4 10 rx 1|rect:18 7 4 10 rx 1|rect:6 4 4 16 rx 1|rect:14 4 4 16 rx 1",
  "personal": "circle:12 5 2|M10 22V17L7 14l3-7 4 2 3 5-2 8",
  "nutricao": "M18 8h1a4 4 0 0 1 0 8h-1|M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z",
  "app": "rect:5 2 14 20 rx 2|line:12 18 12.01 18",
  "talher": "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2|M7 2v20|M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7",
  "copo": "M8 22h8|M12 11v11|M17 2H7l5 9 5-9z",
  "ambiente": "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z|polyline:9 22 9 12 15 12 15 22",
  "balanca": "M12 3v18|M1 6l5 6 5-6|M13 6l5 6 5-6|M1 22h22",
  "documento": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z|polyline:14 2 14 8 20 8|line:16 13 8 13|line:16 17 8 17",
  "raio": "polygon:13 2 3 14 12 14 11 22 21 10 12 10 13 2",
  "grafico": "rect:3 3 18 18 rx 2|path:M8 17V13|path:M12 17V9|path:M16 17V5",
  "suporte": "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z|M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
  "mundo": "circle:12 12 10|M2 12h20|M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
  "integracao": "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  "casa": "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z|polyline:9 22 9 12 15 12 15 22",
  "financiamento": "circle:12 12 10|M12 6v12|M8 10h8|M8 14h8",
  "localizacao": "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z|circle:12 10 3",
  "livro": "M4 19.5A2.5 2.5 0 0 1 6.5 17H20|M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
  "professor": "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2|circle:9 7 4|M23 21v-2a4 4 0 0 0-3-3.87|M16 3.13a4 4 0 0 1 0 7.75",
  "certificado": "circle:12 8 7|polyline:8.21 13.89 7 23 12 20 17 23 15.79 13.88",
  "alvo": "circle:12 12 10|circle:12 12 6|circle:12 12 2",
  "resultado": "polyline:23 6 13.5 15.5 8.5 10.5 1 18|polyline:17 6 23 6 23 12",
  "inovacao": "M9 18h6|M10 22h4|M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14",
  "pet": "circle:11 4 2|circle:18 8 2|circle:20 16 2|M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",
  "banho": "M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z|M6 12V5a2 2 0 0 1 2-2h3v2.25",
  "veterinario": "M22 12h-4l-3 9L9 3l-3 9H2",
  "tesoura": "circle:6 6 3|circle:6 18 3|line:20 4 8.12 15.88|line:14.47 14.48 20 20|line:8.12 8.12 12 12",
  "barba": "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4|M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2|M17.29 21.02c.12-.6.43-2.3.5-3.02|M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4|M8.65 22c.21-.66.45-1.32.57-2|M14 13.12c0 2.38 0 6.38-1 8.88|M2 16h.01|M21.8 16c.2-2 .131-5.354 0-6|M9 6.8a6 6 0 0 0 9 5.2c0-.4 0-1-.2-1.5",
  "pao": "circle:12 12 10|M12 6v6l4 2",
  "bolo": "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2|circle:12 7 4",
  "salgado": "circle:12 12 10|M12 6v6l4 2",
  "cafe": "M18 8h1a4 4 0 0 1 0 8h-1|M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z",
  "encomenda": "rect:2 7 20 14 rx 2|M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
  "flexibilidade": "circle:12 12 10|polyline:12 6 12 12 16 14",
  "shampoo": "M8 22h8|M12 11v11|M17 2H7l5 9 5-9z",
  "adocao": "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  "fidelidade": "polyline:23 6 13.5 15.5 8.5 10.5 1 18|polyline:17 6 23 6 23 12",
  "rapido": "polygon:13 2 3 14 12 14 11 22 21 10 12 10 13 2",
  "matinais": "circle:12 12 5|line:12 1 12 3|line:12 21 12 23",
  "producao": "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  "fresquinho": "M12 2v10|M18.5 8a6.5 6.5 0 1 1-13 0|line:2 22 22 22",
  "entrega": "rect:1 3 15 13|polygon:16 8 20 8 23 11 23 16 16 16 16 8|circle:5.5 18.5 2.5|circle:18.5 18.5 2.5",
  "pratica": "circle:12 12 10|circle:12 12 6|circle:12 12 2"
};

function obterSvg(nome) {
  const raw = P[nome];
  if (!raw) return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>';
  
  const svgOpen = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
  const svgClose = '</svg>';
  
  const elements = raw.split('|').map(part => {
    if (part.startsWith('rect:')) {
      const nums = part.slice(5).split(' ').map(Number);
      return '<rect x="' + nums[0] + '" y="' + nums[1] + '" width="' + nums[2] + '" height="' + nums[3] + '"' + (nums[4] ? ' rx="' + nums[4] + '"' : '') + '/>';
    }
    if (part.startsWith('circle:')) {
      const nums = part.slice(7).split(' ').map(Number);
      return '<circle cx="' + nums[0] + '" cy="' + nums[1] + '" r="' + nums[2] + '"/>';
    }
    if (part.startsWith('line:')) {
      const nums = part.slice(5).split(' ').map(Number);
      return '<line x1="' + nums[0] + '" y1="' + nums[1] + '" x2="' + nums[2] + '" y2="' + nums[3] + '"/>';
    }
    if (part.startsWith('polyline:')) {
      return '<polyline points="' + part.slice(9).trim() + '"/>';
    }
    if (part.startsWith('polygon:')) {
      return '<polygon points="' + part.slice(8).trim() + '"/>';
    }
    if (part.startsWith('path:')) {
      return '<path d="' + part.slice(5) + '"/>';
    }
    return '<path d="' + part + '"/>';
  }).join('');
  
  return svgOpen + elements + svgClose;
}

function pmAgent(description) {
  const lower = description.toLowerCase();
  let niche = 'saude';
  
  for (const [key, data] of Object.entries(NICHOES)) {
    if (data.palavrasChave && data.palavrasChave.some(kw => lower.includes(kw))) {
      niche = key;
      break;
    }
  }
  
  const phoneMatch = description.match(/\(?\d{2}\)?\s*\d{4,5}[\s-]?\d{4}/);
  const phone = phoneMatch ? phoneMatch[0] : null;
  
  const waMatch = description.match(/whatsapp[:\s]*[\(]?(\d{2})[\)]?\s*(\d{4,5})[\s-]?(\d{4})/i);
  const whatsapp = waMatch ? (waMatch[1] + waMatch[2] + waMatch[3]) : (phone ? phone.replace(/[^0-9]/g, '') : null);
  
  const igMatch = description.match(/instagram[:\s]*@?(\w+)/i) || description.match(/@(\w+)/);
  const instagram = igMatch ? igMatch[1] : null;
  
  const addrMatch = description.match(/endere[co]{2}[:\s]*(.*?)(?:\.|,|\n|$)/i) || description.match(/rua[:\s]*(.*?)(?:\.|,|\n|$)/i);
  const address = addrMatch ? addrMatch[1].trim() : null;
  
  const emailMatch = description.match(/[\w.-]+@[\w.-]+\.\w+/);
  const email = emailMatch ? emailMatch[0] : null;
  
  let rawName = description.split(/[.,\n]/)[0].trim();
  rawName = rawName.replace(/clinica medica chamada/gi,'')
    .replace(/empresa chamada/gi,'')
    .replace(/negocio chamado/gi,'')
    .replace(/loja chamada/gi,'')
    .replace(/restaurante chamado/gi,'')
    .replace(/escritorio chamado/gi,'')
    .replace(/escola chamada/gi,'')
    .replace(/academia chamada/gi,'')
    .replace(/salao chamado/gi,'')
    .replace(/consultorio chamado/gi,'')
    .trim();
  
  let businessName = rawName.length > 40 ? rawName.split(' ').slice(0,4).join(' ') : rawName;
  if (!businessName || businessName.length < 2) businessName = 'Meu Negocio';
  
  return { businessName, niche, description: description.substring(0,200), phone, address, email, whatsapp, instagram };
}

function designerAgent(config) {
  const niche = config.niche || 'saude';
  const nicho = NICHOES[niche] || NICHOES.saude;
  return nicho.cores;
}

function reviewerAgent(html) {
  const issues = [];
  if (!html.includes('<!DOCTYPE html>')) issues.push('Missing DOCTYPE');
  if (!html.includes('lang="pt-BR"')) issues.push('Missing language');
  if (!html.includes('viewport')) issues.push('Missing viewport');
  if (!html.includes('cta-btn')) issues.push('Missing CTA');
  if (!html.includes('feature-card')) issues.push('Missing features');
  if (html.toLowerCase().includes('lorem ipsum')) issues.push('Contains placeholder text');
  if (html.length > 150000) issues.push('Too large');
  return { approved: issues.length === 0, issues, score: Math.max(0, 100 - (issues.length * 20)) };
}

function uiAgentEnhance(html, config) {
  const p = config.primaryColor || '#6366f1';
  const css = '<style>.feature-card:hover{box-shadow:0 0 30px ' + p + '20}.cta-btn{position:relative;overflow:hidden}.cta-btn::after{content:"";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:linear-gradient(45deg,transparent,rgba(255,255,255,0.1),transparent);transform:rotate(45deg);transition:all .5s;opacity:0}.cta-btn:hover::after{opacity:1;left:100%}</style>';
  return html.replace('</head>', css + '\n</head>');
}

function uxAgentEnhance(html, config) {
  const whatsapp = config.whatsapp || '';
  const instagram = config.instagram || '';
  const address = config.address || '';
  const tc = config.textColor || '#ffffff';
  const bg = config.bgColor || '#0a0a0a';
  
  let contactButtons = '';
  
  if (whatsapp) {
    const wn = whatsapp.replace(/[^0-9]/g, '');
    contactButtons += '<a href="https://wa.me/55' + wn + '" target="_blank" style="display:inline-flex;align-items:center;gap:10px;padding:16px 32px;background:#25D366;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;text-decoration:none;transition:all 0.3s;"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>Fale pelo WhatsApp</a>';
  }
  
  if (instagram) {
    const igUrl = instagram.includes('http') ? instagram : 'https://instagram.com/' + instagram.replace('@', '');
    contactButtons += '<a href="' + igUrl + '" target="_blank" style="display:inline-flex;align-items:center;gap:10px;padding:16px 32px;background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888);color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;text-decoration:none;transition:all 0.3s;"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>Siga no Instagram</a>';
  }
  
  if (address) {
    const mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + address.replace(/\s+/g, '+');
    contactButtons += '<a href="' + mapUrl + '" target="_blank" style="display:inline-flex;align-items:center;gap:10px;padding:16px 32px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:' + tc + ';border-radius:12px;font-size:15px;font-weight:600;text-decoration:none;transition:all 0.3s;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Ver no Mapa</a>';
  }
  
  if (contactButtons) {
    const contactHtml = '<section id="contato" style="padding:100px 24px;background:' + bg + ';"><div style="max-width:800px;margin:0 auto;text-align:center;"><h2 style="font-size:clamp(28px,4vw,40px);font-weight:800;color:' + tc + ';margin:0 0 16px;">Fale Conosco</h2><p style="font-size:18px;color:' + tc + '99;margin:0 0 48px;">Estamos prontos para atender voce.</p><div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center;">' + contactButtons + '</div></div></section>';
    return html.replace('</body>', contactHtml + '\n</body>');
  }
  return html;
}

function scrollAgentEnhance(html, config) {
  const p = config.primaryColor || '#6366f1';
  const css = '<style>@keyframes fadeInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}.hero>div{animation:fadeInUp .8s ease-out}.badge{animation:fadeIn .6s ease-out .2s both}.hero h1{animation:fadeInUp .8s ease-out .3s both}.hero p{animation:fadeInUp .8s ease-out .5s both}.cta-btn{animation:fadeInUp .8s ease-out .7s both}.feature-card{opacity:0;animation:fadeInUp .6s ease-out forwards}.feature-card:nth-child(1){animation-delay:.1s}.feature-card:nth-child(2){animation-delay:.2s}.feature-card:nth-child(3){animation-delay:.3s}.feature-card:nth-child(4){animation-delay:.4s}.feature-card:nth-child(5){animation-delay:.5s}.feature-card:nth-child(6){animation-delay:.6s}.feature-card:hover{transform:translateY(-8px)!important;box-shadow:0 20px 60px ' + p + '25;border-color:' + p + '40!important}.cta-btn:hover{animation:pulse .3s ease-in-out;transform:translateY(-3px)!important}.testimonial-card{opacity:0;animation:fadeInUp .8s ease-out .5s forwards}@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}</style>';
  const js = '<script>if(typeof IntersectionObserver!=="undefined"){var o=new IntersectionObserver(function(e){e.forEach(function(t){if(t.isIntersecting){t.target.style.opacity="1";t.target.style.transform="translateY(0)"}})},{threshold:.1});document.querySelectorAll(".feature-card,.testimonial-card,[id=contato] > div").forEach(function(e){o.observe(e)})}</script>';
  let r = html.replace('</head>', css + '\n</head>');
  r = r.replace('</body>', js + '\n</body>');
  return r;
}

function typographyAgentEnhance(html, config) {
  const tc = config.textColor || '#ffffff';
  const css = '<style>body{letter-spacing:-.01em;line-height:1.6}h1,h2,h3,h4{letter-spacing:-.02em;line-height:1.15}.hero h1{font-size:clamp(36px,6vw,72px);font-weight:900;letter-spacing:-.03em}.feature-card h3{font-size:17px;font-weight:700;letter-spacing:-.01em}.feature-card p{font-size:14px;line-height:1.7;color:' + tc + '88}.testimonial-text{font-size:18px;line-height:1.8;font-style:italic}p{font-size:16px;line-height:1.7;color:' + tc + 'cc}@media(max-width:768px){.hero h1{font-size:clamp(28px,8vw,48px)}p{font-size:15px}}</style>';
  return html.replace('</head>', css + '\n</head>');
}

function parallaxAgentEnhance(html, config) {
  const p = config.primaryColor || '#6366f1';
  const s = config.secondaryColor || '#8b5cf6';
  const parallaxCss = '<style>html{scroll-behavior:smooth}.hero{position:relative;overflow:hidden}.hero::before{content:"";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(ellipse at center,' + p + '15 0%,transparent 70%);animation:parallaxFloat 20s ease-in-out infinite;pointer-events:none;z-index:0}.hero::after{content:"";position:absolute;bottom:-30%;right:-30%;width:150%;height:150%;background:radial-gradient(ellipse at center,' + s + '10 0%,transparent 70%);animation:parallaxFloat2 25s ease-in-out infinite;pointer-events:none;z-index:0}@keyframes parallaxFloat{0%,100%{transform:translate(0,0) scale(1)}25%{transform:translate(5%,-3%) scale(1.05)}50%{transform:translate(-3%,5%) scale(.95)}75%{transform:translate(-5%,-2%) scale(1.02)}}@keyframes parallaxFloat2{0%,100%{transform:translate(0,0) rotate(0deg)}33%{transform:translate(-4%,3%) rotate(2deg)}66%{transform:translate(3%,-4%) rotate(-1deg)}}.reveal{opacity:0;transform:translateY(40px);transition:all .8s cubic-bezier(.4,0,.2,1)}.reveal.active{opacity:1;transform:translateY(0)}.reveal-scale{opacity:0;transform:scale(.8);transition:all .8s cubic-bezier(.4,0,.2,1)}.reveal-scale.active{opacity:1;transform:scale(1)}.gradient-parallax{background:linear-gradient(135deg,' + p + '20,' + s + '20,' + p + '20);background-size:400% 400%;animation:gradientShift 15s ease infinite}@keyframes gradientShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}</style>';
  const jsLines = '<script>(function(){var ro=new IntersectionObserver(function(e){e.forEach(function(t){if(t.isIntersecting)t.target.classList.add("active")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".reveal,.reveal-scale").forEach(function(e){ro.observe(e)});document.querySelectorAll(".feature-card").forEach(function(e,i){e.classList.add("reveal");e.style.transitionDelay=(i*.1)+"s"});document.querySelectorAll(".testimonial-card").forEach(function(e){e.classList.add("reveal-scale")});document.getElementById("contato").querySelectorAll("> div").forEach(function(e){e.classList.add("reveal")});document.querySelectorAll("a[href]").forEach(function(a){if(a.getAttribute("href").indexOf("#")===0){a.addEventListener("click",function(e){e.preventDefault();var t=document.querySelector(this.getAttribute("href"));if(t)t.scrollIntoView({behavior:"smooth",block:"start"})})}});setTimeout(function(){window.dispatchEvent(new Event("scroll"))},100);})();</script>';
  let enhanced = html.replace('</head>', parallaxCss + '\n</head>');
  enhanced = enhanced.replace('</body>', jsLines + '\n</body>');
  return enhanced;
}

function qaValidate(html) {
  const checks = [];
  checks.push({n:'HTML', p: html.includes('<!DOCTYPE html>') && html.includes('lang=')});
  checks.push({n:'Responsive', p: html.includes('viewport') && html.includes('clamp(')});
  checks.push({n:'CTA', p: html.includes('cta-btn')});
  checks.push({n:'Features', p: html.includes('feature-card')});
  checks.push({n:'Testimonial', p: html.toLowerCase().includes('testimonial')});
  checks.push({n:'Stats', p: html.includes('grid-template-columns:repeat(4')});
  checks.push({n:'Process', p: html.includes('Como Funciona')});
  checks.push({n:'No Generic', p: !html.toLowerCase().includes('lorem ipsum') && !html.toLowerCase().includes('placeholder')});
  checks.push({n:'Perf', p: html.length < 150000});
  checks.push({n:'Font', p: html.includes('Inter')});
  const passed = checks.filter(function(c){return c.p}).length;
  return { score: Math.round((passed / checks.length) * 100), checks: checks, approved: checks.every(function(c){return c.p}) };
}

function buildLandingPage(config) {
  const { businessName, niche } = config;
  const nicho = NICHOES[niche] || NICHOES.saude;
  const colors = nicho.cores;
  const primary = config.primaryColor || colors.primary;
  const secondary = config.secondaryColor || colors.secondary;
  const bg = config.bgColor || colors.bg;
  const txt = config.textColor || colors.text;
  const heroImg = nicho.imagem;
  const badgeText = nicho.badge || businessName;

  let statsSection = '';
  if (nicho.stats && nicho.stats.length) {
    statsSection = '<section style="padding:80px 24px;background:' + bg + ';border-top:1px solid rgba(255,255,255,0.05);border-bottom:1px solid rgba(255,255,255,0.05);"><div style="max-width:1000px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:32px;text-align:center;">';
    nicho.stats.forEach(function(s) {
      statsSection += '<div><div style="font-size:clamp(32px,4vw,48px);font-weight:900;background:linear-gradient(135deg,' + primary + ',' + secondary + ');-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1.1;">' + s.value + '</div><div style="font-size:14px;color:' + txt + '77;margin-top:8px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;">' + s.label + '</div></div>';
    });
    statsSection += '</div></section>';
  }

  let featuresSection = '';
  if (nicho.features && nicho.features.length) {
    featuresSection = '<section class="features"><div class="features-header"><h2 style="font-size:clamp(28px,4vw,40px);font-weight:800;color:' + txt + ';margin:0 0 16px;">Por Que Nos Escolher?</h2><p style="font-size:18px;color:' + txt + '88;margin:0 0 64px;max-width:500px;margin-left:auto;margin-right:auto;">Diferenciais que fazem toda diferenca no resultado final.</p></div><div class="features-grid">';
    nicho.features.forEach(function(f) {
      featuresSection += '<div class="feature-card"><div class="feature-icon">' + obterSvg(f.icon) + '</div><h3>' + f.title + '</h3><p>' + f.desc + '</p></div>';
    });
    featuresSection += '</div></section>';
  }

  let processSection = '';
  if (nicho.processo && nicho.processo.length) {
    processSection = '<section style="padding:120px 24px;background:linear-gradient(180deg,' + bg + ',' + bg + 'f0);"><div style="max-width:1100px;margin:0 auto;text-align:center;"><h2 style="font-size:clamp(28px,4vw,40px);font-weight:800;color:' + txt + ';margin:0 0 16px;">Como Funciona</h2><p style="font-size:18px;color:' + txt + '88;margin:0 0 64px;max-width:500px;margin-left:auto;margin-right:auto;">Nosso processo e simples, transparente e eficiente.</p><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:24px;position:relative;"><div style="position:absolute;top:40px;left:12.5%;right:12.5%;height:2px;background:linear-gradient(90deg,' + primary + '40,' + secondary + '40);z-index:0;"></div>';
    nicho.processo.forEach(function(p) {
      processSection += '<div style="position:relative;z-index:1;"><div style="width:80px;height:80px;margin:0 auto 24px;border-radius:50%;background:linear-gradient(135deg,' + primary + ',' + secondary + ');display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:900;color:#fff;box-shadow:0 8px 32px ' + primary + '40;">' + p.step + '</div><h3 style="font-size:18px;font-weight:700;color:' + txt + ';margin:0 0 12px;">' + p.title + '</h3><p style="font-size:14px;color:' + txt + '88;line-height:1.6;margin:0;">' + p.desc + '</p></div>';
    });
    processSection += '</div></div></section>';
  }

  let testimonialSection = '';
  if (nicho.depoimento) {
    testimonialSection = '<section class="testimonials"><div class="testimonial-card"><p class="testimonial-text">\u201C' + nicho.depoimento.texto + '\u201D</p><p class="testimonial-author">' + nicho.depoimento.autor + '</p><p class="testimonial-role">' + nicho.depoimento.cargo + '</p></div></section>';
  }

  let faqSection = '';
  if (nicho.perguntas && nicho.perguntas.length) {
    faqSection = '<section style="padding:120px 24px;background:' + bg + ';"><div style="max-width:700px;margin:0 auto;"><h2 style="font-size:clamp(28px,4vw,40px);font-weight:800;color:' + txt + ';margin:0 0 48px;text-align:center;">Perguntas Frequentes</h2><div style="display:flex;flex-direction:column;gap:16px;">';
    nicho.perguntas.forEach(function(f) {
      faqSection += '<details style="padding:24px 32px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:16px;transition:all 0.3s;"><summary style="font-size:16px;font-weight:700;color:' + txt + ';cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;">' + f.q + '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;transition:transform 0.3s;"><polyline points="6 9 12 15 18 9"/></svg></summary><p style="font-size:15px;color:' + txt + '99;margin:16px 0 0;line-height:1.7;">' + f.a + '</p></details>';
    });
    faqSection += '</div></div></section>';
  }

  let html = '<!DOCTYPE html>\n<html lang="pt-BR">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width,initial-scale=1">\n  <title>' + businessName + '</title>\n  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">\n  <style>\n';
  html += '*{margin:0;padding:0;box-sizing:border-box;}\n';
  html += 'body{font-family:"Inter",system-ui,sans-serif;background:' + bg + ';color:' + txt + ';-webkit-font-smoothing:antialiased;overflow-x:hidden;}\n';
  html += '.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;position:relative;padding:120px 24px 80px;text-align:center;background:linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.7)),url(' + heroImg + ') center/cover no-repeat fixed;}\n';
  html += '.hero::before{content:"";position:absolute;top:-200px;right:-200px;width:600px;height:600px;background:radial-gradient(circle,' + primary + '15,transparent 70%);border-radius:50%;pointer-events:none;}\n';
  html += '.hero::after{content:"";position:absolute;bottom:-150px;left:-150px;width:500px;height:500px;background:radial-gradient(circle,' + secondary + '10,transparent 70%);border-radius:50%;pointer-events:none;}\n';
  html += '.badge{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:100px;border:1px solid ' + primary + '30;background:rgba(255,255,255,0.08);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);color:' + primary + ';font-size:13px;font-weight:600;margin-bottom:32px;letter-spacing:0.05em;text-transform:uppercase;}\n';
  html += '.hero h1{font-size:clamp(36px,6vw,64px);font-weight:900;line-height:1.08;margin:0 0 24px;letter-spacing:-0.03em;}\n';
  html += '.hero h1 span{background:linear-gradient(135deg,' + primary + ',' + secondary + ');-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}\n';
  html += '.hero p{font-size:clamp(16px,2vw,20px);color:' + txt + 'cc;max-width:600px;margin:0 auto 40px;line-height:1.7;}\n';
  html += '.cta-btn{display:inline-flex;align-items:center;gap:10px;padding:18px 40px;background:linear-gradient(135deg,' + primary + ',' + secondary + ');color:#fff;border:none;border-radius:16px;font-size:16px;font-weight:700;cursor:pointer;text-decoration:none;transition:all 0.3s cubic-bezier(0.4,0,0.2,1);box-shadow:0 8px 32px ' + primary + '40;backdrop-filter:blur(4px);}\n';
  html += '.cta-btn:hover{transform:translateY(-3px);box-shadow:0 16px 48px ' + primary + '60;}\n';
  html += '.features{padding:120px 24px;background:' + bg + ';}\n';
  html += '.features-header{text-align:center;margin-bottom:0;}\n';
  html += '.features-grid{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}\n';
  html += '.feature-card{padding:40px 32px;background:rgba(255,255,255,0.03);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.06);border-radius:24px;transition:all 0.4s cubic-bezier(0.4,0,0.2,1);}\n';
  html += '.feature-card:hover{transform:translateY(-8px);border-color:' + primary + '40;background:rgba(255,255,255,0.06);box-shadow:0 20px 60px ' + primary + '20;}\n';
  html += '.feature-icon{width:56px;height:56px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,' + primary + '15,' + primary + '08);border:1px solid ' + primary + '20;border-radius:16px;margin-bottom:24px;color:' + primary + ';}\n';
  html += '.feature-icon svg{width:24px;height:24px;}\n';
  html += '.feature-card h3{font-size:18px;font-weight:700;margin:0 0 12px;color:' + txt + ';letter-spacing:-0.01em;}\n';
  html += '.feature-card p{font-size:15px;color:' + txt + '99;line-height:1.7;margin:0;}\n';
  html += '.testimonials{padding:120px 24px;background:linear-gradient(180deg,' + bg + ',' + bg + 'f0);}\n';
  html += '.testimonial-card{max-width:700px;margin:0 auto;text-align:center;padding:56px;background:rgba(255,255,255,0.03);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.06);border-radius:24px;position:relative;}\n';
  html += '.testimonial-card::before{content:"\\201C";position:absolute;top:20px;left:32px;font-size:80px;color:' + primary + '30;font-family:Georgia,serif;line-height:1;}\n';
  html += '.testimonial-text{font-size:18px;line-height:1.8;color:' + txt + 'dd;margin:0 0 24px;font-style:italic;}\n';
  html += '.testimonial-author{font-size:15px;font-weight:700;color:' + txt + ';margin:0;}\n';
  html += '.testimonial-role{font-size:13px;color:' + txt + '88;margin:4px 0 0;}\n';
  html += '.footer{padding:60px 24px 40px;background:rgba(0,0,0,0.3);text-align:center;border-top:1px solid rgba(255,255,255,0.05);}\n';
  html += '.footer-links{display:flex;justify-content:center;gap:32px;margin-bottom:24px;flex-wrap:wrap;}\n';
  html += '.footer-links a{color:' + txt + '88;text-decoration:none;font-size:14px;font-weight:500;transition:color 0.3s;}\n';
  html += '.footer-links a:hover{color:' + primary + ';}\n';
  html += '.footer p{font-size:13px;color:' + txt + '55;margin:0;}\n';
  html += 'details[open] summary svg{transform:rotate(180deg)}\n';
  html += 'details{cursor:pointer}\n';
  html += 'details summary::-webkit-details-marker{display:none}\n';
  html += '@media(max-width:768px){.features-grid{grid-template-columns:1fr;}[style*="grid-template-columns:repeat(4"]{grid-template-columns:repeat(2,1fr) !important;}.hero{background-attachment:scroll;}}\n';
  html += '@media(max-width:480px){[style*="grid-template-columns:repeat(4"]{grid-template-columns:1fr !important;}}\n';
  html += '@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important;}}\n';
  html += '  </style>\n</head>\n<body>\n';
  html += '  <section class="hero">\n    <div style="position:relative;z-index:1;max-width:800px;">\n';
  html += '      <div class="badge">' + badgeText + '</div>\n';
  html += '      <h1>' + nicho.headline + '</h1>\n';
  html += '      <p>' + nicho.subheadline + '</p>\n';
  html += '      <a href="#contato" class="cta-btn">' + nicho.cta + ' &rarr;</a>\n';
  html += '    </div>\n  </section>\n\n';
  html += statsSection + '\n\n';
  html += featuresSection + '\n\n';
  html += processSection + '\n\n';
  html += testimonialSection + '\n\n';
  html += faqSection + '\n\n';
  html += '  <footer class="footer">\n    <div class="footer-links">\n';
  if (config.phone) html += '      <a href="tel:' + config.phone.replace(/[^0-9+]/g, '') + '">Telefone</a>\n';
  if (config.email) html += '      <a href="mailto:' + config.email + '">Email</a>\n';
  html += '      <a href="#contato">Contato</a>\n';
  html += '    </div>\n    <p>&copy; ' + new Date().getFullYear() + ' ' + businessName + '. Todos os direitos reservados.</p>\n';
  html += '  </footer>\n</body>\n</html>';
  return { title: businessName, html: html };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Metodo nao permitido' });
  const { description, phone, instagram } = req.body;
  if (!description || !description.trim()) return res.status(400).json({ error: 'Descricao obrigatoria' });
  const pmResult = pmAgent(description);
  const designerPalette = designerAgent(pmResult);
  const finalConfig = {
    businessName: pmResult.businessName || 'Meu Negocio',
    niche: pmResult.niche || 'saude',
    description: pmResult.description || description,
    address: pmResult.address || '',
    phone: phone || pmResult.phone || '',
    email: pmResult.email || '',
    whatsapp: pmResult.whatsapp || '',
    instagram: instagram || pmResult.instagram || '',
    primaryColor: designerPalette.primary,
    secondaryColor: designerPalette.secondary,
    bgColor: designerPalette.bg,
    textColor: designerPalette.text,
    accentColor: designerPalette.accent,
    observations: description
  };
  let result = buildLandingPage(finalConfig);
  result.html = uiAgentEnhance(result.html, finalConfig);
  result.html = uxAgentEnhance(result.html, finalConfig);
  result.html = scrollAgentEnhance(result.html, finalConfig);
  result.html = typographyAgentEnhance(result.html, finalConfig);
  result.html = parallaxAgentEnhance(result.html, finalConfig);
  const qaResult = qaValidate(result.html);
  const reviewerResult = reviewerAgent(result.html);
  return res.status(200).json({
    success: true,
    content: { title: finalConfig.businessName, html: result.html },
    source: 'agents',
    qa: Object.assign({}, qaResult, { reviewer: reviewerResult })
  });
}