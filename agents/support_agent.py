import json
import time
from datetime import datetime

class SupportAgent:
    def __init__(self):
        self.faq = {
            'como_criar_landing_page': 'Para criar uma landing page, acesse seu painel e clique em "Criar Nova Página".',
            'planos': 'Temos 3 planos: Básico (R$97), Profissional (R$197) e Empresarial (R$497).',
            'pagamento': 'Aceitamos cartão de crédito, boleto e Pix via Mercado Pago.',
            'suporte': 'Nosso suporte está disponível por email 24/7.'
        }
        self.conversations = []
        
    def log(self, message):
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"[{timestamp}] [SUPPORT AGENT] {message}")
    
    def analyze_message(self, message):
        """Analisa a mensagem do cliente"""
        message_lower = message.lower()
        
        if 'landing page' in message_lower or 'criar' in message_lower:
            return 'como_criar_landing_page'
        elif 'plano' in message_lower or 'preço' in message_lower or 'valor' in message_lower:
            return 'planos'
        elif 'pagamento' in message_lower or 'pagar' in message_lower or 'pix' in message_lower:
            return 'pagamento'
        elif 'suporte' in message_lower or 'ajuda' in message_lower:
            return 'suporte'
        else:
            return 'default'
    
    def generate_response(self, intent, customer_name):
        """Gera resposta baseada na intenção"""
        if intent in self.faq:
            return f"Olá {customer_name}! {self.faq[intent]}"
        else:
            return f"Olá {customer_name}! Como posso ajudá-lo?"
    
    def handle_conversation(self, customer_name, message):
        """Processa uma conversa com o cliente"""
        self.log(f"Processando mensagem de {customer_name}: {message}")
        
        # Analisar intenção
        intent = self.analyze_message(message)
        
        # Gerar resposta
        response = self.generate_response(intent, customer_name)
        
        # Registrar conversa
        conversation = {
            'customer': customer_name,
            'message': message,
            'intent': intent,
            'response': response,
            'timestamp': datetime.now().isoformat()
        }
        self.conversations.append(conversation)
        
        self.log(f"Resposta gerada: {response[:50]}...")
        return response
    
    def save_conversations(self):
        """Salva todas as conversas"""
        with open('support_conversations.json', 'w', encoding='utf-8') as f:
            json.dump(self.conversations, f, indent=2, ensure_ascii=False)
        
        self.log(f"Conversas salvas: {len(self.conversations)}")
    
    def run(self):
        """Executa o agente de suporte"""
        self.log("=== AGENTE DE SUPORTE INICIADO ===")
        
        # Simular conversas
        sample_conversations = [
            {"name": "João", "message": "Como crio uma landing page?"},
            {"name": "Maria", "message": "Quais são os planos?"},
            {"name": "Pedro", "message": "Como posso pagar?"},
        ]
        
        for conv in sample_conversations:
            self.handle_conversation(conv['name'], conv['message'])
            time.sleep(1)
        
        # Salvar conversas
        self.save_conversations()
        
        self.log("=== AGENTE DE SUPORTE FINALIZADO ===")

if __name__ == "__main__":
    agent = SupportAgent()
    agent.run()
