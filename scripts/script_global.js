document.addEventListener('DOMContentLoaded', function() {
    const buttonCaixa = document.getElementById('btn_caixa');
    const buttonProdutos = document.getElementById('btn_produtos');
    const buttonFinanceiro = document.getElementById('btn_financeiro');
    const buttonCadastro = document.getElementById('btn_cadastro');
    const image = document.getElementById('navigate-image');

    buttonCaixa.addEventListener('click', function() {
        window.location.href = '../caixa/caixa.html';
    });

    buttonProdutos.addEventListener('click', function() {
        window.location.href = '.html';
    });

    buttonFinanceiro.addEventListener('click', function() {
        window.location.href = '../gastos/gastos.html';
    });

    buttonCadastro.addEventListener('click', function() {
        window.location.href = '../cadastro/cadastro.html';
    });

    image.addEventListener('click', function() {
        window.location.href = '../perfil/perfil.html';
    });
});
