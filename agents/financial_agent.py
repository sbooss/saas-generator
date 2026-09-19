import json
import time
from datetime import datetime


class FinancialAgent:
    def __init__(self):
        self.initial_capital = 4.00
        self.current_balance = self.initial_capital
        self.revenue = 0
        self.expenses = 0
        self.transactions = []

    def log(self, message):
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"[{timestamp}] [FINANCIAL] {message}")

    def record(self, tipo, amount, desc):
        tx = {
            'type': tipo,
            'amount': amount,
            'description': desc,
            'timestamp': datetime.now().isoformat()
        }
        self.transactions.append(tx)
        if tipo == 'income':
            self.revenue += amount
            self.current_balance += amount
        else:
            self.expenses += amount
            self.current_balance -= amount
        self.log(f"{tipo} R${amount:.2f} - {desc} | Saldo: R${self.current_balance:.2f}")

    def status(self):
        self.log("=== STATUS FINANCEIRO ===")
        self.log(f"Capital: R${self.initial_capital:.2f}")
        self.log(f"Saldo: R${self.current_balance:.2f}")
        self.log(f"Receita: R${self.revenue:.2f}")
        self.log(f"Despesas: R${self.expenses:.2f}")
        self.log(f"Lucro: R${self.revenue - self.expenses:.2f}")
        return self.current_balance

    def project(self, months=3):
        self.log("=== PROJECAO ===")
        growth = 50
        rev = self.revenue
        for m in range(1, months + 1):
            rev *= (1 + growth / 100)
            self.log(f"Mes {m}: R${rev:.2f}")
        return rev

    def save(self):
        report = {
            'date': datetime.now().isoformat(),
            'balance': self.current_balance,
            'revenue': self.revenue,
            'expenses': self.expenses,
            'transactions': self.transactions
        }
        with open('financial_report.json', 'w', encoding='utf-8') as f:
            json.dump(report, f, indent=2, ensure_ascii=False)
        self.log("Relatorio salvo")

    def run(self):
        self.log("=== AGENTE FINANCEIRO INICIADO ===")
        self.record('expense', 0, 'Capital inicial')
        self.status()
        self.project()
        self.save()


if __name__ == "__main__":
    agent = FinancialAgent()
    agent.run()
