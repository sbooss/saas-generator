import json
import time
import requests
from datetime import datetime

class SalesAgent:
    def __init__(self):
        self.leads = []
        self.conversions = 0
        self.revenue = 0
        
    def log(self, message):
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"[{timestamp}] [SALES AGENT] {message}")
        
    def find_leads(self):
        """Encontra leads potenciais em nichos específicos"""
        self.log("Buscando leads em nichos de saúde, tecnologia e imobiliário...")
        
        # Simular busca de leads (integrar com APIs reais)
        sample_leads = [
            {"name": "Clínica Saúde Total", "niche": "saude", "email": "contato@saudetotal.com.br"},
            {"name": "Tech Solutions", "niche": "tecnologia", "email": "vendas@techsolutions.com.br"},
            {"name": "Imóveis Premium", "niche": "imobiliario", "email": "contato@imoveispremium.com.br"},
        ]
        
        self.leads.extend(sample_leads)
        self.log(f"Encontrados {len(sample_leads)} leads")
        
    def send_email(self, lead):
        """Envia email personalizado para o lead"""
        self.log(f"Enviando email para {lead['name']}...")
        
        # Template de email personalizado
        email_content = f"""
        Assunto: Aumente suas vendas com landing pages profissionais
        
        Olá {lead['name']},
        
        Soube que você opera no nicho de {lead['niche']}.
        
        Posso criar uma landing page profissional para sua empresa em apenas 5 minutos, 
        usando inteligência artificial. Sem precisar saber programar.
        
        Quer ver um exemplo? Responda este email.
        
        Atenciosamente,
        Equipe SaaS Generator
        """
        
        # Simular envio (integrar com API de email real)
        self.log(f"Email enviado para {lead['email']}")
        return True
    
    def follow_up(self, lead):
        """Faz follow-up com leads que não responderam"""
        self.log(f"Fazendo follow-up com {lead['name']}...")
        
        follow_up_content = f"""
        Assunto: Última chance - Landing page gratuita
        
        Olá {lead['name']},
        
        Não consegui sua resposta sobre a landing page gratuita.
        
        Estou oferecendo 1 landing page gratuita para 5 empresas selecionadas.
        Quer garantir sua vaga?
        
        Atenciosamente,
        Equipe SaaS Generator
        """
        
        # Simular envio
        self.log(f"Follow-up enviado para {lead['email']}")
        return True
    
    def convert_lead(self, lead):
        """Converte lead em cliente"""
        self.log(f"Convertendo {lead['name']} em cliente...")
        
        # Simular conversão
        self.conversions += 1
        self.revenue += 97  # Plano básico
        
        self.log(f"Conversão realizada! Receita total: R$ {self.revenue}")
        return True
    
    def run(self):
        """Executa o agente de vendas"""
        self.log("=== AGENTE DE VENDAS INICIADO ===")
        
        # Buscar leads
        self.find_leads()
        
        # Processar cada lead
        for lead in self.leads:
            self.send_email(lead)
            time.sleep(2)  # Simular delay
            
            # 30% chance de conversão (simulação)
            if random.random() < 0.3:
                self.convert_lead(lead)
            
            time.sleep(5)
        
        self.log(f"=== RELATÓRIO ===")
        self.log(f"Leads processados: {len(self.leads)}")
        self.log(f"Conversões: {self.conversions}")
        self.log(f"Receita: R$ {self.revenue}")

if __name__ == "__main__":
    agent = SalesAgent()
    agent.run()
