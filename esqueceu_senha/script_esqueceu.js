const sendEmail = () => {
    const apiKey = 'SUA_API_KEY_DO_SENDGRID';
    const url = 'https://api.sendgrid.com/v3/mail/send';

    const cpfUsuario = document.getElementById('cpfUsuario').value;

    const emailData = {
        personalizations: [
            {
                to: [{ email: 'giulia.claro@fatec.sp.gov.br' }],
                subject: 'REDEFINIÇÃO DE SENHA'
            }
        ],
        from: { email: 'quickbuy.app@outlook.com' },
        content: [
            {
                type: 'text/plain',
                value: `O funcionário do CPF ${cpfUsuario} está solicitando uma definição de senha.`
            }
        ]
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(emailData)
    })
    .then(response => {
        if (response.ok) {
            // Exibir notificação de sucesso
            alert('E-mail enviado com sucesso!');
            // Redirecionar para a página de login
            window.location.href = '../login/login.html';
        } else {
            throw new Error('Erro ao enviar o e-mail.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar o e-mail. Por favor, tente novamente.');
    });
};