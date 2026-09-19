import json
import os
import time
import requests
from datetime import datetime

# Importar todos os agentes
from email_marketing import EmailMarketingAgent
from facebook_ads import FacebookAdsAgent
from mercadopago_agent import MercadoPagoAgent
from ollama_agent import OllamaAgent
from uiux_designer import UIUXDesignerAgent
from prospec_agent import ProspecAgent


class MasterOrchestrator:
    def __init__(self):
        self.agentes = {
            'email': EmailMarketingAgent(),
            'facebook': FacebookAdsAgent(),
            'mercadopago': MercadoPagoAgent(),
            'ollama': OllamaAgent(),
            'uiux': UIUXDesignerAgent(),
            'prospec': ProspecAgent()
        }
        self.status = 'inicializado'
        self.ciclos = 0
        self.meta_lucro = 350000
        self.lucro_atual = 0
        self.log_file = 'database/master_log.json'

    def log(self, msg):
        ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"[{ts}] [MESTRE] {msg}")
        self.salvar_log(msg)

    def salvar_log(self, msg):
        logs = []
        if os.path.exists(self.log_file):
            with open(self.log_file, 'r', encoding='utf-8') as f:
                logs = json.load(f)
        
        logs.append({
            'timestamp': datetime.now().isoformat(),
            'mensagem': msg
        })
        
        # Manter apenas os últimos 1000 logs
        logs = logs[-1000:]
        
        os.makedirs(os.path.dirname(self.log_file), exist_ok=True)
        with open(self.log_file, 'w', encoding='utf-8') as f:
            json.dump(logs, f, indent=2, ensure_ascii=False)

    def verificar_ollama(self):
        try:
            response = requests.get('http://localhost:11434/api/tags', timeout=5)
            return response.status_code == 200
        except:
            return False

    def executar_ciclo(self):
        self.ciclos += 1
        self.log(f"\n{'='*60}")
        self.log(f"CICLO {self.ciclos} - {datetime.now().strftime('%H:%M:%S')}")
        self.log(f"{'='*60}")
        
        # 1. Verificar Ollama
        if self.verificar_ollama():
            self.log("✅ Ollama está rodando - IA gratuita disponível")
        else:
            self.log("⚠️ Ollama não está rodando - usando API externa")
        
        # 2. Executar agente de prospecção
        self.log("\n--- Prospecção ---")
        self.agentes['prospec'].run()
        
        # 3. Executar agente de email marketing
        self.log("\n--- Email Marketing ---")
        self.agentes['email'].run()
        
        # 4. Verificar pagamentos
        self.log("\n--- Mercado Pago ---")
        self.agentes['mercadopago'].run()
        
        # 5. Gerar conteúdo com Ollama (se disponível)
        if self.verificar_ollama():
            self.log("\n--- Geração de Conteúdo ---")
            ollama = self.agentes['ollama']
            texto = ollama.gerar_copy_vendas(
                'SaaS Generator - Gerador de Landing Pages',
                'Empreendedores e empresas que querem vender mais online'
            )
            if texto:
                self.log(f"Copy gerada: {len(texto)} caracteres")
        
        # 6. Relatório de status
        self.log(f"\n--- Status ---")
        self.log(f"Ciclos realizados: {self.ciclos}")
        self.log(f"Meta: R$ {self.meta_lucro:,.2f}")
        self.log(f"Atual: R$ {self.lucro_atual:,.2f}")
        progresso = (self.lucro_atual / self.meta_lucro) * 100
        self.log(f"Progresso: {progresso:.2f}%")
        
        return True

    def calcular_proximos_passos(self):
        passos = []
        
        if self.lucro_atual < 1000:
            passos.append("Foco em prospecção e primeiras vendas")
        elif self.lucro_atual < 10000:
            passos.append("Escalar email marketing e anúncios")
        elif self.lucro_atual < 50000:
            passos.append("Expandir para novos nichos")
        elif self.lucro_atual < 100000:
            passos.append("Criar programas de afiliados")
        else:
            passos.append("Consolidar e automatizar tudo")
        
        return passos

    def run(self):
        self.log("🚀 SISTEMA MESTRE INICIADO")
        self.log(f"Meta: R$ {self.meta_lucro:,.2f}")
        self.log("Modo: Autônomo 24/7")
        self.log("")
        
        while True:
            try:
                self.executar_ciclo()
                
                # Intervalo entre ciclos (5 minutos)
                self.log(f"\nAguardando 5 minutos para próximo ciclo...")
                time.sleep(300)
                
            except KeyboardInterrupt:
                self.log("Sistema interrompido pelo usuário")
                break
            except Exception as e:
                self.log(f"Erro no ciclo: {str(e)}")
                time.sleep(60)


if __name__ == "__main__":
    orchestrator = MasterOrchestrator()
    orchestrator.run()
