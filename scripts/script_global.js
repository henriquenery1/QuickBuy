document.addEventListener('DOMContentLoaded', function () {
    const navButtons = document.querySelectorAll('.btn_nav');
    const userIcon = document.querySelector('.icone_usuario');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent.trim().toLowerCase();
            let page = '';

            switch (buttonText) {
                case 'início':
                    page = 'servicos/servicos.html';
                    break;
                case 'caixa':
                    page = 'caixa/caixa.html';
                    break;
                case 'produtos':
                    page = 'produtos/produtos.html';
                    break;
                case 'financeiro':
                    page = 'financeiro/financeiro.html';
                    break;
                case 'cadastro':
                    page = 'cadastro/cadastro.html';
                    break;
                case 'sair':
                    page = 'login/login.html';
                    break;    
                default:
                    page = 'servicos/servicos.html';
            }

            window.location.href = page;

            const url = `../${page}`;
            window.location.href = url;
        });
    });

    userIcon.addEventListener('click', () => {
        window.location.href = '../perfil/perfil.html';
    });

    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        const user = JSON.parse(loggedInUser);
        const userNameDisplay = document.createElement('div');
        userNameDisplay.textContent = `Olá, ${user.name}`;
        userNameDisplay.style.color = '#FFFFFF';
        userNameDisplay.style.fontWeight = 'bold';
        userNameDisplay.style.marginLeft = 'auto';
        userNameDisplay.style.marginRight = '20px';
        userNameDisplay.style.fontSize = '20px';

        userIcon.insertAdjacentElement('beforebegin', userNameDisplay);
    }
});
