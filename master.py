import json
import time
import os
from datetime import datetime


def log_master(msg):
    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{ts}] [MASTER] {msg}")
    with open('master_log.txt', 'a', encoding='utf-8') as f:
        f.write(f"[{ts}] {msg}\n")


def main():
    log_master("=== SISTEMA SaaS GENERATOR - MODO AUTONOMO ===")
    log_master("Capital inicial: R$ 4,00")
    log_master("Meta: R$ 350.000 - R$ 500.000 em 3 meses")

    cycle = 0
    while True:
        cycle += 1
        log_master(f"\n--- CICLO {cycle} ---")

        log_master("Executando agentes...")
        os.system("cd agents && python orchestrator.py")

        log_master("Ciclo finalizado. Aguardando 60 segundos...")
        time.sleep(60)


if __name__ == "__main__":
    main()
