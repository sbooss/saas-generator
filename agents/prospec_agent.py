import json
import os
import requests
from datetime import datetime


class ProspecAgent:
    def __init__(self):
        self.leads_file = 'database/leads_prospec.json'
        self.load_leads()

    def log(self, msg):
        ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"[{ts}] [PROSPEC] {msg}")

    def load_leads(self):
        if os.path.exists(self.leads_file):
            with open(self.leads_file, 'r', encoding='utf-8') as f:
                self.leads = json.load(f)
        else:
            self.leads = []

    def save_leads(self):
        os.makedirs(os.path.dirname(self.leads_file), exist_ok=True)
        with open(self.leads_file, 'w', encoding='utf-8') as f:
            json.dump(self.leads, f, indent=2, ensure_ascii=False)

    def gerar_leads_nicho(self, nicho):
        nichos_data = {
            'saude': {
                'termos': ['clínica', 'consultório', 'odonto', 'dermatologia', 'oftalmologia'],
                'empresas_exemplo': [
                    {'nome': 'Clínica Saúde+', 'setor': 'saude', 'contato': 'contato@saudemais.com.br'},
                    {'nome': 'OdontoVida', 'setor': 'saude', 'contato': 'admin@odontovida.com.br'},
                ]
            },
            'tecnologia': {
                'termos': ['software', 'sistema', 'tech', 'digital', 'automação'],
                'empresas_exemplo': [
                    {'nome': 'Tech Solutions', 'setor': 'tecnologia', 'contato': 'vendas@techsolutions.com.br'},
                    {'nome': 'Digital System', 'setor': 'tecnologia', 'contato': 'contato@digitalsystem.com.br'},
                ]
            },
            'imobiliario': {
                'termos': ['imobiliária', 'imóveis', 'corretor', 'construtora'],
                'empresas_exemplo': [
                    {'nome': 'Imóveis Premium', 'setor': 'imobiliario', 'contato': 'vendas@premium.com.br'},
                    {'nome': 'Construtora ABC', 'setor': 'imobiliario', 'contato': 'contato@abc.com.br'},
                ]
            }
        }
        
        dados = nichos_data.get(nicho, nichos_data['tecnologia'])
        
        for empresa in dados['empresas_exemplo']:
            lead = {
                'nome': empresa['nome'],
                'setor': empresa['setor'],
                'contato': empresa['contato'],
                'status': 'novo',
                'adicionado': datetime.now().isoformat(),
                'tentativas': 0
            }
            self.leads.append(lead)
        
        self.save_leads()
        self.log(f"Leads gerados para {nicho}: {len(dados['empresas_exemplo'])}")
        return dados['empresas_exemplo']

    def criar_mensagem_prospec(self, lead, nicho):
        mensagens = {
            'saude': f"""Olá {lead['nome']}!

Vi que vocês trabalham com saúde e percebi que uma landing page profissional pode atrair muito mais pacientes.

Nossa plataforma cria landing pages com IA em minutos, otimizadas para conversão.

Posso mostrar como?""",
            'tecnologia': f"""Olá {lead['nome']}!

Vi que vocês são da área de tecnologia e imagino que uma landing page moderna pode ajudar a atrair mais clientes.

Criamos páginas com IA que convertem 3x mais.

Quer ver um exemplo?""",
            'imobiliario': f"""Olá {lead['nome']}!

Vi que vocês trabalham com imóveis e uma landing page profissional pode ajudar a captar mais leads qualificados.

Nossa plataforma gera páginas que convertem em minutos.

Posso enviar um exemplo?"""
        }
        
        return mensagens.get(nicho, mensagens['tecnologia'])

    def listar_leads(self):
        self.log(f"Total de leads: {len(self.leads)}")
        for lead in self.leads:
            self.log(f"  - {lead['nome']} ({lead['status']})")
        return self.leads

    def run(self):
        self.log("=== AGENTE DE PROSPECÇÃO INICIADO ===")
        
        # Gerar leads para diferentes nichos
        for nicho in ['saude', 'tecnologia', 'imobiliario']:
            self.gerar_leads_nicho(nicho)
        
        self.listar_leads()
        self.log("=== AGENTE FINALIZADO ===")


if __name__ == "__main__":
    agent = ProspecAgent()
    agent.run()
