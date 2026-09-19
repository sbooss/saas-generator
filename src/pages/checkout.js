import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Checkout.module.css';

export default function Checkout() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState('basico');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [loading, setLoading] = useState(false);

  const plans = {
    basico: { price: 97, name: 'Plano Basico', features: ['1 Landing Page', 'Templates prontos', 'Suporte por email'] },
    profissional: { price: 197, name: 'Plano Profissional', features: ['5 Landing Pages', 'Templates premium', 'Suporte prioritario', 'Relatorios de acesso', 'Integracao Mercado Pago', 'A/B Testing'] },
    empresarial: { price: 497, name: 'Plano Empresarial', features: ['Landing Pages ilimitadas', 'Templates exclusivos', 'Suporte 24/7', 'API personalizada', 'Consultoria inclusa', 'White Label'] }
  };

  useEffect(() => {
    if (router.query.plan && plans[router.query.plan]) {
      setSelectedPlan(router.query.plan);
    }
  }, [router.query.plan]);

  const handleCheckout = async () => {
    if (!email || !businessName) { alert('Preencha todos os campos'); return; }
    setLoading(true);
    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: selectedPlan, email, businessName })
      });
      const data = await response.json();
      if (data.init_point) { window.location.href = data.init_point; }
      else { alert(data.error || 'Erro ao processar pagamento'); setLoading(false); }
    } catch (error) {
      alert('Erro ao processar pagamento');
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Checkout - SaaS Generator</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.bgBlob} />
        <div className={styles.bgBlob2} />
        <div className={styles.checkoutBox}>
          <div className={styles.header}>
            <h1>Finalizar Compra</h1>
            <p>Seu plano esta quase pronto</p>
          </div>

          <div className={styles.planSummary}>
            <h2>{plans[selectedPlan].name}</h2>
            <div className={styles.price}>
              R$ {plans[selectedPlan].price}<span className={styles.period}>/mes</span>
            </div>
            <ul>
              {plans[selectedPlan].features.map((f, i) => (
                <li key={i}><span className={styles.checkmark}>✓</span> {f}</li>
              ))}
            </ul>
          </div>

          <div className={styles.form}>
            <div className={styles.formGroup}>
              <label>Seu Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" />
            </div>
            <div className={styles.formGroup}>
              <label>Nome da Empresa</label>
              <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="Sua Empresa Ltda" />
            </div>
            <div className={styles.formGroup}>
              <label>Plano</label>
              <select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}>
                <option value="basico">Basico - R$ 97/mes</option>
                <option value="profissional">Profissional - R$ 197/mes</option>
                <option value="empresarial">Empresarial - R$ 497/mes</option>
              </select>
            </div>

            <button className={styles.checkoutBtn} onClick={handleCheckout} disabled={loading}>
              {loading ? 'Processando...' : 'Pagar com Mercado Pago'}
            </button>

            <p className={styles.security}>Pagamento seguro via Mercado Pago</p>
          </div>

          <a className={styles.backLink} href="/">{'<'} Voltar ao site</a>
        </div>
      </div>
    </>
  );
}
