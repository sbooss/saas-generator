import json
import time
import os
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


class EmailMarketingAgent:
    def __init__(self):
        self.smtp_host = 'smtp.gmail.com'
        self.smtp_port = 587
        self.email_user = 'vendassmercado2@gmail.com'
        self.email_pass = 'wlsgffytgdheltnh'  # Senha sem espaços
        self.from_name = 'SaaS Generator'
        self.leads_file = 'database/leads_email.json'
        self.stats_file = 'database/email_stats.json'
        self.load_leads()
        self.load_stats()

    def log(self, msg):
        ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"[{ts}] [EMAIL MARKETING] {msg}")

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

    def load_stats(self):
        if os.path.exists(self.stats_file):
            with open(self.stats_file, 'r', encoding='utf-8') as f:
                self.stats = json.load(f)
        else:
            self.stats = {'emails_sent': 0, 'opens': 0, 'clicks': 0}

    def save_stats(self):
        os.makedirs(os.path.dirname(self.stats_file), exist_ok=True)
        with open(self.stats_file, 'w', encoding='utf-8') as f:
            json.dump(self.stats, f, indent=2)

    def add_lead(self, email, name, niche=None):
        lead = {
            'email': email,
            'name': name,
            'niche': niche or 'geral',
            'added': datetime.now().isoformat(),
            'status': 'novo',
            'emails_received': 0
        }
        self.leads.append(lead)
        self.save_leads()
        self.log(f"Lead adicionado: {name} ({email})")

    def send_email(self, to_email, to_name, subject, html_content):
        try:
            msg = MIMEMultipart('alternative')
            msg['From'] = f"{self.from_name} <{self.email_user}>"
            msg['To'] = to_email
            msg['Subject'] = subject

            msg.attach(MIMEText(html_content, 'html', 'utf-8'))

            server = smtplib.SMTP(self.smtp_host, self.smtp_port)
            server.starttls()
            server.login(self.email_user, self.email_pass)
            server.sendmail(self.email_user, to_email, msg.as_string())
            server.quit()

            self.stats['emails_sent'] += 1
            self.save_stats()
            self.log(f"Email enviado para {to_name}")
            return True
        except Exception as e:
            self.log(f"Erro ao enviar email: {str(e)}")
            return False

    def welcome_sequence(self, lead):
        sequence = [
            {
                'day': 0,
                'subject': 'Bem-vindo ao SaaS Generator!',
                'template': 'welcome'
            },
            {
                'day': 1,
                'subject': 'Como criar sua primeira landing page',
                'template': 'tutorial'
            },
            {
                'day': 3,
                'subject': 'Dicas para aumentar suas vendas',
                'template': 'tips'
            },
            {
                'day': 7,
                'subject': 'Oferta especial para você!',
                'template': 'offer'
            }
        ]
        return sequence

    def get_template(self, template_name, lead):
        templates = {
            'welcome': f"""
                <div style="font-family: Arial; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h1 style="color: #667eea;">Bem-vindo, {lead['name']}!</h1>
                    <p>Obrigado por se cadastrar no SaaS Generator.</p>
                    <p>Agora você pode criar landing pages profissionais em minutos.</p>
                    <a href="https://saasgenerator.vercel.app/dashboard" style="background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px;">Acessar Painel</a>
                </div>
            """,
            'tutorial': f"""
                <div style="font-family: Arial; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h1 style="color: #667eea;">Como criar sua primeira landing page</h1>
                    <p>Olá {lead['name']}!</p>
                    <p>Crear uma landing page é simples:</p>
                    <ol>
                        <li>Acesse seu painel</li>
                        <li>Clique em "Criar Nova Landing Page"</li>
                        <li>Escolha o nicho</li>
                        <li>Digite o nome da empresa</li>
                        <li>Clique em "Gerar"</li>
                    </ol>
                    <a href="https://saasgenerator.vercel.app/dashboard" style="background: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px;">Criar Agora</a>
                </div>
            """,
            'tips': f"""
                <div style="font-family: Arial; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h1 style="color: #667eea;">5 Dicas para Aumentar suas Vendas</h1>
                    <p>Olá {lead['name']}!</p>
                    <ul>
                        <li>Use títulos chamativos</li>
                        <li>Adicione depoimentos</li>
                        <li>Crie urgência</li>
                        <li>Ofereça garantia</li>
                        <li>Simplifique o checkout</li>
                    </ul>
                </div>
            """,
            'offer': f"""
                <div style="font-family: Arial; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h1 style="color: #dc3545;">Oferta Especial!</h1>
                    <p>Olá {lead['name']}!</p>
                    <p>Estamos oferecendo <strong>50% de desconto</strong> no plano anual.</p>
                    <p>Apenas por tempo limitado!</p>
                    <a href="https://saasgenerator.vercel.app/#pricing" style="background: #dc3545; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px;">Aproveitar Oferta</a>
                </div>
            """
        }
        return templates.get(template_name, templates['welcome'])

    def run_sequence(self):
        self.log("=== INICIANDO SEQUÊNCIA DE EMAILS ===")
        
        for lead in self.leads:
            if lead['status'] == 'novo':
                sequence = self.welcome_sequence(lead)
                for step in sequence:
                    if lead['emails_received'] <= step['day']:
                        html = self.get_template(step['template'], lead)
                        self.send_email(lead['email'], lead['name'], step['subject'], html)
                        lead['emails_received'] += 1
                        lead['status'] = 'em_sequencia'
                        self.save_leads()
                        time.sleep(2)
        
        self.log("=== SEQUÊNCIA FINALIZADA ===")
        self.log(f"Total de emails enviados: {self.stats['emails_sent']}")

    def run(self):
        self.log("=== AGENTE DE EMAIL MARKETING INICIADO ===")
        self.run_sequence()


if __name__ == "__main__":
    agent = EmailMarketingAgent()
    agent.run()
