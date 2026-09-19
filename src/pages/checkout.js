import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Checkout.module.css';

export default function Checkout() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState('basico');

  useEffect(() => {
    if (router.query.plan) {
      setSelectedPlan(router.query.plan);
    }
  }, [router.query.plan]);
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [loading, setLoading] = useState(false);

  const plans = {
    basico: { price: 97, name: 'Plano Básico', features: ['1 Landing Page', 'Suporte por email'] },
    profissional: { price: 197, name: 'Plano Profissional', features: ['5 Landing Pages', 'Suporte prioritário', 'Relatórios'] },
    empresarial: { price: 497, name: 'Plano Empresarial', features: ['Landing Pages ilimitadas', 'Suporte 24/7', 'API personalizada'] }
  };

  const handleCheckout = async () => {
    if (!email || !businessName) {
      alert('Preencha todos os campos');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: selectedPlan,
          email: email,
          businessName: businessName
        })
      });

      const data = await response.json();
      if (data.init_point) {
        window.location.href = data.init_point;
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao processar pagamento');
    }
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Checkout - SaaS Generator</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.checkoutBox}>
          <h1>Finalizar Compra</h1>
          
          <div className={styles.planSummary}>
            <h2>{plans[selectedPlan].name}</h2>
            <div className={styles.price}>R$ {plans[selectedPlan].price}<span>/mês</span></div>
            <ul>
              {plans[selectedPlan].features.map((f, i) => (
                <li key={i}>✓ {f}</li>
              ))}
            </ul>
          </div>

          <div className={styles.form}>
            <div className={styles.formGroup}>
              <label>Seu Email:</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label>Nome da Empresa:</label>
              <input 
                type="text" 
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Sua Empresa Ltda"
              />
            </div>

            <div className={styles.planSelect}>
              <label>Escolha o plano:</label>
              <select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}>
                <option value="basico">Básico - R$ 97/mês</option>
                <option value="profissional">Profissional - R$ 197/mês</option>
                <option value="empresarial">Empresarial - R$ 497/mês</option>
              </select>
            </div>

            <button 
              className={styles.checkoutButton}
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? 'Processando...' : 'Pagar com Mercado Pago'}
            </button>

            <p className={styles.security}>
              🔒 Pagamento seguro via Mercado Pago
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
