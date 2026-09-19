import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { to, subject, body, type } = req.body;

  if (!to || !subject) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s/g, '') : ''
      }
    });

    const emailTemplates = {
      'welcome': '<div style="font-family: Arial; max-width: 600px; margin: 0 auto; padding: 20px;"><h1 style="color: #667eea;">Bem-vindo ao SaaS Generator!</h1><p>Olá!</p><p>Sua conta foi criada com sucesso.</p><p>Acesse seu painel:</p><a href="' + (process.env.NEXT_PUBLIC_URL || 'https://saasgenerator.vercel.app') + '/dashboard" style="background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">Acessar Painel</a><p style="margin-top: 20px; color: #666;">Equipe SaaS Generator</p></div>',
      'payment': '<div style="font-family: Arial; max-width: 600px; margin: 0 auto; padding: 20px;"><h1 style="color: #28a745;">Pagamento Confirmado!</h1><p>Olá!</p><p>Seu pagamento foi processado com sucesso.</p><a href="' + (process.env.NEXT_PUBLIC_URL || 'https://saasgenerator.vercel.app') + '/dashboard" style="background: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">Acessar Painel</a></div>',
      'newsletter': '<div style="font-family: Arial; max-width: 600px; margin: 0 auto; padding: 20px;"><h1 style="color: #667eea;">Novidades do SaaS Generator</h1><p>Olá!</p><a href="' + (process.env.NEXT_PUBLIC_URL || 'https://saasgenerator.vercel.app') + '" style="background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">Visitar Site</a></div>'
    };

    const htmlContent = type && emailTemplates[type] ? emailTemplates[type] : body;

    const mailOptions = {
      from: '"SaaS Generator" <' + (process.env.EMAIL_FROM || 'vendassmercado2@gmail.com') + '>',
      to: to,
      subject: subject,
      html: htmlContent
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email enviado:', info.messageId);

    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
