import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

smtp_host = 'smtp.gmail.com'
smtp_port = 587
email_user = 'vendassmercado2@gmail.com'
email_pass = 'wlsgffytgdheltnh'
to_email = 'williannunes31994@gmail.com'

msg = MIMEMultipart('alternative')
msg['From'] = f'SaaS Generator <{email_user}>'
msg['To'] = to_email
msg['Subject'] = 'Teste - SaaS Generator'

html = '<div style="font-family: Arial; max-width: 600px; margin: 0 auto; padding: 20px;">'
html += '<h1 style="color: #667eea;">Email de Teste!</h1>'
html += '<p>Se voce recebeu este email, o sistema esta funcionando!</p>'
html += '<p>Sistema: SaaS Generator</p>'
html += '<p>Status: <strong style="color: #28a745;">ATIVO</strong></p>'
html += '<hr>'
html += '<p style="color: #666; font-size: 12px;">Email automatico - SaaS Generator</p>'
html += '</div>'

msg.attach(MIMEText(html, 'html', 'utf-8'))

server = smtplib.SMTP(smtp_host, smtp_port)
server.starttls()
server.login(email_user, email_pass)
server.sendmail(email_user, to_email, msg.as_string())
server.quit()

print('Email enviado com sucesso para williannunes31994@gmail.com')
