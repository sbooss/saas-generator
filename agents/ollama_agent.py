import json
import os
import requests
from datetime import datetime


class OllamaAgent:
    def __init__(self):
        self.ollama_url = 'http://localhost:11434'
        self.model = 'llama3.2'
        self.memory_file = 'database/ollama_memory.json'
        self.load_memory()

    def log(self, msg):
        ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"[{ts}] [OLLAMA] {msg}")

    def load_memory(self):
        if os.path.exists(self.memory_file):
            with open(self.memory_file, 'r', encoding='utf-8') as f:
                self.memory = json.load(f)
        else:
            self.memory = {'conversas': [], 'aprendizados': []}

    def save_memory(self):
        os.makedirs(os.path.dirname(self.memory_file), exist_ok=True)
        with open(self.memory_file, 'w', encoding='utf-8') as f:
            json.dump(self.memory, f, indent=2, ensure_ascii=False)

    def verificar_ollama(self):
        try:
            response = requests.get(f'{self.ollama_url}/api/tags', timeout=5)
            if response.status_code == 200:
                self.log("Ollama está rodando!")
                return True
        except:
            self.log("Ollama não está rodando. Iniciando...")
            return False

    def gerar_texto(self, prompt, contexto=None):
        try:
            payload = {
                'model': self.model,
                'prompt': prompt,
                'stream': False,
                'context': contexto or []
            }
            response = requests.post(
                f'{self.ollama_url}/api/generate',
                json=payload,
                timeout=120
            )
            if response.status_code == 200:
                resultado = response.json()['response']
                self.log(f"Texto gerado: {len(resultado)} caracteres")
                return resultado
        except Exception as e:
            self.log(f"Erro ao gerar texto: {str(e)}")
        return None

    def gerar_landing_page(self, nicho, empresa):
        prompt = f"""Crie uma landing page profissional para uma empresa de {nicho} chamada {empresa}.
        
        Retorne no formato JSON com:
        - titulo: título principal chamativo
        - subtitulo: subtítulo persuasivo
        - cta: texto do botão de ação
        - beneficios: lista de 3 benefícios
        - depoimento: depoimento fictício
        
        Seja persuasivo e focado em conversão."""
        
        resultado = self.gerar_texto(prompt)
        if resultado:
            try:
                # Tentar extrair JSON do resultado
                import re
                json_match = re.search(r'\{.*\}', resultado, re.DOTALL)
                if json_match:
                    return json.loads(json_match.group())
            except:
                pass
        return None

    def gerar_copy_vendas(self, produto, publico):
        prompt = f"""Escreva um texto de vendas persuasivo para: {produto}
        Público-alvo: {publico}
        
        Use gatilhos mentais como:
        - Escassez
        - Urgência
        - Prova social
        - Autoridade
        
        Seja direto e focado em conversão."""
        
        return self.gerar_texto(prompt)

    def analisar_concorrentes(self, nicho):
        prompt = f"""Analise os principais concorrentes no nicho de {nicho} e sugira:
        
        1. Pontos fortes dos concorrentes
        2. Oportunidades de diferenciação
        3. Estratégias de preço
        4. Canais de marketing mais eficazes
        
        Seja específico e prático."""
        
        return self.gerar_texto(prompt)

    def run(self):
        self.log("=== AGENTE OLLAMA INICIADO ===")
        
        if self.verificar_ollama():
            self.log("Ollama está pronto para uso!")
        else:
            self.log("Para usar o Ollama, instale-o em: https://ollama.ai")
        
        self.log("=== AGENTE FINALIZADO ===")


if __name__ == "__main__":
    agent = OllamaAgent()
    agent.run()
