# SaaS Landing Page Generator

Sistema de geração de landing pages com Inteligência Artificial.

## Funcionalidades

- Geração automática de landing pages por nicho
- Integração com Mercado Pago para pagamentos
- Sistema de emails automatizados
- IA local via Ollama para geração de conteúdo

## Configuração

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente em `.env.local`

3. Execute em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse: http://localhost:3000

## Deploy no Vercel

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente no painel do Vercel
3. Deploy automático a cada push

## Estrutura

```
saas_generator/
├── src/
│   ├── pages/
│   │   ├── index.js          # Landing page principal
│   │   └── api/
│   │       ├── generate.js   # API de geração
│   │       ├── payment.js    # API de pagamentos
│   │       └── email.js      # API de emails
│   ├── components/
│   └── styles/
├── public/
├── package.json
└── vercel.json
```

## Planos

- **Básico:** R$ 97/mês - 1 Landing Page
- **Profissional:** R$ 197/mês - 5 Landing Pages
- **Empresarial:** R$ 497/mês - Ilimitado

## Tecnologias

- Next.js
- React
- Mercado Pago
- Ollama (IA local)
- Vercel
