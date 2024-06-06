document.addEventListener('DOMContentLoaded', function () {
    const navButtons = document.querySelectorAll('.btn_imagem');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent.trim().toLowerCase();
            let page = '';

            switch (buttonText) {
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
                default:
                    page = 'servicos/servicos.html';
            }

            window.location.href = page;

            const url = `../${page}`;
            window.location.href = url;
        });
    });
});

