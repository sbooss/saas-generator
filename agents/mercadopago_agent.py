import json
import os
from datetime import datetime


class MercadoPagoAgent:
    def __init__(self):
        self.access_token = None
        self.public_key = None
        self.payments_file = 'database/payments.json'
        self.load_payments()

    def log(self, msg):
        ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"[{ts}] [MERCADO PAGO] {msg}")

    def load_payments(self):
        if os.path.exists(self.payments_file):
            with open(self.payments_file, 'r', encoding='utf-8') as f:
                self.payments = json.load(f)
        else:
            self.payments = []

    def save_payments(self):
        os.makedirs(os.path.dirname(self.payments_file), exist_ok=True)
        with open(self.payments_file, 'w', encoding='utf-8') as f:
            json.dump(self.payments, f, indent=2, ensure_ascii=False)

    def configure(self, access_token, public_key):
        self.access_token = access_token
        self.public_key = public_key
        self.log("Credenciais configuradas")

    def create_payment(self, amount, description, payer_email):
        payment = {
            'id': f"pag_{int(datetime.now().timestamp())}",
            'amount': amount,
            'description': description,
            'payer_email': payer_email,
            'status': 'pendente',
            'created': datetime.now().isoformat()
        }
        self.payments.append(payment)
        self.save_payments()
        self.log(f"Pagamento criado: R$ {amount}")
        return payment

    def confirm_payment(self, payment_id):
        for payment in self.payments:
            if payment['id'] == payment_id:
                payment['status'] = 'pago'
                payment['paid_at'] = datetime.now().isoformat()
                self.save_payments()
                self.log(f"Pagamento confirmado: {payment_id}")
                return payment
        return None

    def get_stats(self):
        total = sum(p['amount'] for p in self.payments if p['status'] == 'pago')
        pending = sum(p['amount'] for p in self.payments if p['status'] == 'pendente')
        self.log(f"Total recebido: R$ {total:.2f}")
        self.log(f"Pendente: R$ {pending:.2f}")
        return {'total': total, 'pending': pending}

    def run(self):
        self.log("=== AGENTE MERCADO PAGO INICIADO ===")
        self.get_stats()
        self.log("=== AGENTE FINALIZADO ===")


if __name__ == "__main__":
    agent = MercadoPagoAgent()
    agent.run()
