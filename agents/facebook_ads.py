import json
import os
import requests
from datetime import datetime


class FacebookAdsAgent:
    def __init__(self):
        self.app_id = '1758403262661304'
        self.pixel_id = '4634906726828414'
        self.access_token = None  # Será configurado pelo usuário
        self.campaigns_file = 'database/campaigns.json'
        self.load_campaigns()

    def log(self, msg):
        ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"[{ts}] [FACEBOOK ADS] {msg}")

    def load_campaigns(self):
        if os.path.exists(self.campaigns_file):
            with open(self.campaigns_file, 'r', encoding='utf-8') as f:
                self.campaigns = json.load(f)
        else:
            self.campaigns = []

    def save_campaigns(self):
        os.makedirs(os.path.dirname(self.campaigns_file), exist_ok=True)
        with open(self.campaigns_file, 'w', encoding='utf-8') as f:
            json.dump(self.campaigns, f, indent=2, ensure_ascii=False)

    def create_campaign(self, name, objective, budget_daily):
        campaign = {
            'id': f"camp_{int(datetime.now().timestamp())}",
            'name': name,
            'objective': objective,
            'budget_daily': budget_daily,
            'status': 'ativa',
            'created': datetime.now().isoformat(),
            'impressions': 0,
            'clicks': 0,
            'conversions': 0,
            'spend': 0
        }
        self.campaigns.append(campaign)
        self.save_campaigns()
        self.log(f"Campanha criada: {name}")
        return campaign

    def create_ad_set(self, campaign_id, name, targeting):
        ad_set = {
            'id': f"adset_{int(datetime.now().timestamp())}",
            'campaign_id': campaign_id,
            'name': name,
            'targeting': targeting,
            'status': 'ativa'
        }
        self.log(f"Conjunto de anúncios criado: {name}")
        return ad_set

    def create_ad(self, ad_set_id, name, creative):
        ad = {
            'id': f"ad_{int(datetime.now().timestamp())}",
            'ad_set_id': ad_set_id,
            'name': name,
            'creative': creative,
            'status': 'ativa'
        }
        self.log(f"Anúncio criado: {name}")
        return ad

    def get_suggestions(self):
        suggestions = [
            {
                'name': 'Landing Pages - Empreendedores',
                'objective': 'OUTCOME_TRAFFIC',
                'budget_daily': 50,
                'targeting': {
                    'age_min': 25,
                    'age_max': 55,
                    'interests': ['Empreendedorismo', 'Marketing digital', 'Pequenas empresas'],
                    'locations': ['Brazil']
                },
                'creative': {
                    'title': 'Crie Landing Pages com IA',
                    'description': 'Gere páginas profissionais em minutos. Sem saber programar.',
                    'url': 'https://saasgenerator.vercel.app'
                }
            },
            {
                'name': 'Landing Pages - Clínicas',
                'objective': 'OUTCOME_TRAFFIC',
                'budget_daily': 30,
                'targeting': {
                    'age_min': 30,
                    'age_max': 60,
                    'interests': ['Saúde', 'Odontologia', 'Clínicas'],
                    'locations': ['Brazil']
                },
                'creative': {
                    'title': 'Sistema para Clínicas',
                    'description': 'Atraia mais pacientes com uma landing page profissional.',
                    'url': 'https://saasgenerator.vercel.app'
                }
            }
        ]
        return suggestions

    def generate_report(self):
        self.log("=== RELATÓRIO DE CAMPANHAS ===")
        total_spend = sum(c.get('spend', 0) for c in self.campaigns)
        total_clicks = sum(c.get('clicks', 0) for c in self.campaigns)
        total_conversions = sum(c.get('conversions', 0) for c in self.campaigns)
        
        self.log(f"Total de campanhas: {len(self.campaigns)}")
        self.log(f"Gasto total: R$ {total_spend:.2f}")
        self.log(f"Total de cliques: {total_clicks}")
        self.log(f"Total de conversões: {total_conversions}")
        
        if total_clicks > 0:
            cpc = total_spend / total_clicks
            self.log(f"CPC médio: R$ {cpc:.2f}")
        
        return {
            'campaigns': len(self.campaigns),
            'spend': total_spend,
            'clicks': total_clicks,
            'conversions': total_conversions
        }

    def run(self):
        self.log("=== AGENTE DE FACEBOOK ADS INICIADO ===")
        
        suggestions = self.get_suggestions()
        self.log(f"Sugestões de campanhas: {len(suggestions)}")
        
        for s in suggestions:
            self.log(f"  - {s['name']}: R$ {s['budget_daily']}/dia")
        
        self.generate_report()
        self.log("=== AGENTE FINALIZADO ===")


if __name__ == "__main__":
    agent = FacebookAdsAgent()
    agent.run()
