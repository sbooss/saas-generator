import json
import time
import os
from datetime import datetime

from sales_agent import SalesAgent
from content_agent import ContentAgent
from support_agent import SupportAgent
from financial_agent import FinancialAgent


class Orchestrator:
    def __init__(self):
        self.agents = {
            'sales': SalesAgent(),
            'content': ContentAgent(),
            'support': SupportAgent(),
            'financial': FinancialAgent()
        }
        self.status = 'idle'
        self.start_time = None

    def log(self, msg):
        ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"[{ts}] [ORCHESTRATOR] {msg}")

    def start(self):
        self.log("=== ORQUESTRADOR INICIADO ===")
        self.status = 'running'
        self.start_time = datetime.now()

        self.log("Iniciando agentes em paralelo...")
        for name, agent in self.agents.items():
            self.log(f"Executando agente: {name}")
            try:
                agent.run()
                self.log(f"Agente {name} finalizado com sucesso")
            except Exception as e:
                self.log(f"Erro no agente {name}: {str(e)}")

        self.status = 'completed'
        self.log("=== TODOS OS AGENTES FINALIZADOS ===")

    def status_report(self):
        elapsed = datetime.now() - self.start_time if self.start_time else None
        self.log(f"Status: {self.status}")
        self.log(f"Tempo ativo: {elapsed}")
        return self.status


if __name__ == "__main__":
    orch = Orchestrator()
    orch.start()
