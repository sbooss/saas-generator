import json
import time
import requests
from datetime import datetime

class ContentAgent:
    def __init__(self):
        self.content_types = ['blog', 'social_media', 'email']
        self.topics = [
            'Como criar landing pages que convertem',
            '5 erros que afastam clientes do seu site',
            'Por que sua empresa precisa de uma landing page',
            'Inteligência Artificial para marketing digital',
            'Como aumentar suas vendas online'
        ]
        
    def log(self, message):
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"[{timestamp}] [CONTENT AGENT] {message}")
        
    def generate_blog_post(self, topic):
        """Gera um post para o blog"""
        self.log(f"Gerando post sobre: {topic}")
        
        content = f"""
        # {topic}
        
        ## Introdução
        Descubra como a inteligência artificial pode transformar seu marketing digital.
        
        ## Por que isso importa?
        Mais de 70% dos consumidores pesquisam online antes de comprar.
        
        ## Como começar
        1. Crie uma landing page profissional
        2. Use IA para personalizar a experiência
        3. Meça resultados e otimize
        
        ## Conclusão
        Comece hoje mesmo a usar tecnologia a seu favor.
        """
        
        self.log(f"Post gerado: {topic[:30]}...")
        return content
    
    def generate_social_media_post(self, topic):
        """Gera post para redes sociais"""
        self.log(f"Gerando post para redes sociais: {topic}")
        
        content = f"""
        {topic} 
        
        Saiba mais em nosso site!
        
        #MarketingDigital #LandingPage #IA #Empreendedorismo
        """
        
        self.log(f"Post de redes sociais gerado")
        return content
    
    def generate_email_newsletter(self):
        """Gera newsletter por email"""
        self.log("Gerando newsletter...")
        
        content = f"""
        Assunto: Novidades do SaaS Generator
        
        Olá!,
        
        Confira as últimas novidades:
        
        1. Novo template para clínicas
        2. Integração com Mercado Pago
        3. Dicas de marketing digital
        
        Acesse seu painel para ver mais.
        
        Equipe SaaS Generator
        """
        
        self.log("Newsletter gerada")
        return content
    
    def schedule_content(self):
        """Agenda conteúdo para publicação"""
        self.log("Agendando conteúdo...")
        
        scheduled = []
        
        # Gerar 5 posts para blog
        for i in range(5):
            content = self.generate_blog_post(self.topics[i])
            scheduled.append({
                'type': 'blog',
                'content': content,
                'scheduled_for': f"2026-09-{20+i}"
            })
        
        # Gerar posts para redes sociais
        for i in range(3):
            content = self.generate_social_media_post(self.topics[i])
            scheduled.append({
                'type': 'social_media',
                'content': content,
                'scheduled_for': f"2026-09-{20+i}"
            })
        
        # Gerar newsletter
        newsletter = self.generate_email_newsletter()
        scheduled.append({
            'type': 'email',
            'content': newsletter,
            'scheduled_for': '2026-09-20'
        })
        
        self.log(f"Total de conteúdos agendados: {len(scheduled)}")
        return scheduled
    
    def run(self):
        """Executa o agente de conteúdo"""
        self.log("=== AGENTE DE CONTEÚDO INICIADO ===")
        
        # Agendar conteúdo
        scheduled_content = self.schedule_content()
        
        # Salvar conteúdo agendado
        with open('scheduled_content.json', 'w', encoding='utf-8') as f:
            json.dump(scheduled_content, f, indent=2, ensure_ascii=False)
        
        self.log("Conteúdo salvo em scheduled_content.json")
        self.log("=== AGENTE DE CONTEÚDO FINALIZADO ===")

if __name__ == "__main__":
    agent = ContentAgent()
    agent.run()
