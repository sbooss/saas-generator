export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { plan, email, businessName } = req.body;

  const plans = {
    'basico': { price: 97, name: 'Plano Basico' },
    'profissional': { price: 197, name: 'Plano Profissional' },
    'empresarial': { price: 497, name: 'Plano Empresarial' }
  };

  const selectedPlan = plans[plan];
  if (!selectedPlan) {
    return res.status(400).json({ error: 'Plano invalido' });
  }

  try {
    const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN;

    const paymentData = {
      items: [{
        id: plan,
        title: selectedPlan.name,
        quantity: 1,
        unit_price: selectedPlan.price,
        currency_id: 'BRL'
      }],
      payer: {
        email: email
      },
      metadata: {
        business_name: businessName,
        plan: plan
      },
      back_urls: {
        success: (process.env.NEXT_PUBLIC_URL || 'https://saasgenerator.vercel.app') + '/dashboard',
        failure: (process.env.NEXT_PUBLIC_URL || 'https://saasgenerator.vercel.app') + '/checkout',
        pending: (process.env.NEXT_PUBLIC_URL || 'https://saasgenerator.vercel.app') + '/dashboard'
      },
      auto_return: 'approved'
    };

    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paymentData)
    });

    const data = await response.json();

    if (data.id) {
      res.status(200).json({
        success: true,
        preference_id: data.id,
        init_point: data.init_point,
        sandbox_init_point: data.sandbox_init_point,
        message: 'Pagamento criado com sucesso'
      });
    } else {
      res.status(400).json({ error: data.message || 'Erro ao criar pagamento' });
    }
  } catch (error) {
    console.error('Erro Mercado Pago:', error);
    res.status(500).json({ error: 'Erro ao processar pagamento' });
  }
}
