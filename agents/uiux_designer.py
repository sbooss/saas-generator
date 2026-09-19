import json
import os
from datetime import datetime


class UIUXDesignerAgent:
    def __init__(self):
        self.templates_file = 'database/design_templates.json'
        self.load_templates()

    def log(self, msg):
        ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"[{ts}] [UI/UX DESIGNER] {msg}")

    def load_templates(self):
        if os.path.exists(self.templates_file):
            with open(self.templates_file, 'r', encoding='utf-8') as f:
                self.templates = json.load(f)
        else:
            self.templates = self.get_default_templates()

    def save_templates(self):
        os.makedirs(os.path.dirname(self.templates_file), exist_ok=True)
        with open(self.templates_file, 'w', encoding='utf-8') as f:
            json.dump(self.templates, f, indent=2, ensure_ascii=False)

    def get_default_templates(self):
        return {
            'saude': {
                'cores': {'primaria': '#0ea5e9', 'secundaria': '#10b981', 'fundo': '#f0f9ff'},
                'estilo': 'clean, profissional, confiável',
                'elementos': ['foto de profissional', 'ícones de saúde', 'selos de qualidade']
            },
            'tecnologia': {
                'cores': {'primaria': '#6366f1', 'secundaria': '#8b5cf6', 'fundo': '#0f172a'},
                'estilo': 'moderno, futurista, inovador',
                'elementos': ['animações', 'gradientes', 'cards de features']
            },
            'imobiliario': {
                'cores': {'primaria': '#f59e0b', 'secundaria': '#84cc16', 'fundo': '#fefce8'},
                'estilo': 'elegante, sofisticado, premium',
                'elementos': ['fotos de imóveis', 'tour virtual', 'localização']
            },
            'educacao': {
                'cores': {'primaria': '#3b82f6', 'secundaria': '#06b6d4', 'fundo': '#eff6ff'},
                'estilo': 'acolhedor, profissional, confiável',
                'elementos': ['fotos de alunos', 'depoimentos', 'certificados']
            },
            'ecommerce': {
                'cores': {'primaria': '#ec4899', 'secundaria': '#f97316', 'fundo': '#fdf2f8'},
                'estilo': 'vibrante, atrativo, conversão',
                'elementos': ['produtos', 'ofertas', 'frete grátis']
            }
        }

    def gerar_css(self, nicho):
        template = self.templates.get(nicho, self.templates['tecnologia'])
        cores = template['cores']
        
        css = f"""
/* Template CSS para {nicho} */
:root {{
    --cor-primaria: {cores['primaria']};
    --cor-secundaria: {cores['secundaria']};
    --cor-fundo: {cores['fundo']};
}}

.hero {{
    background: linear-gradient(135deg, var(--cor-primaria), var(--cor-secundaria));
    padding: 100px 20px;
    text-align: center;
}}

.cta-button {{
    background: var(--cor-primaria);
    color: white;
    padding: 15px 40px;
    border-radius: 30px;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    transition: transform 0.3s;
}}

.cta-button:hover {{
    transform: scale(1.05);
}}

.feature-card {{
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}}

.feature-card:hover {{
    transform: translateY(-5px);
}}
"""
        return css

    def sugestoes_design(self, nicho):
        template = self.templates.get(nicho, self.templates['tecnologia'])
        
        sugestoes = {
            'paleta_cores': template['cores'],
            'estilo_geral': template['estilo'],
            'elementos_recomendados': template['elementos'],
            'dicas_layout': [
                'Use whitespace generoso',
                'Mantenha o CTA visível sempre',
                'Use tipografia hierárquica',
                'Adicione animações sutis',
                'Otimize para mobile'
            ],
            'padroes_conversao': [
                'Headline + Subheadline + CTA',
                'Benefícios antes de características',
                'Depoimentos próximos ao CTA',
                'Formulário simples e direto',
                'Contato visível no header'
            ]
        }
        
        return sugestoes

    def run(self):
        self.log("=== AGENTE UI/UX DESIGNER INICIADO ===")
        
        for nicho in self.templates:
            self.log(f"Template disponível: {nicho}")
        
        self.log("=== AGENTE FINALIZADO ===")


if __name__ == "__main__":
    agent = UIUXDesignerAgent()
    agent.run()
