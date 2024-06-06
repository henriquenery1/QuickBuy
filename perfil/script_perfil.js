document.addEventListener('DOMContentLoaded', function() {
    const userData = JSON.parse(localStorage.getItem('user'));

    if (usuarioEncontrado) {
        const userInfoDiv = document.getElementById('user-info');

        userInfoDiv.innerHTML = `
            <h2>Cargo: ${userData.nomeUsuario}</h2>
            <p>Cpf: ${userData.cpfUsuario}</p>
            <p>Data de nascimento: ${userData.dataNascimento}</p>
            <p>Data de salário: ${userData.salarioUsuario}</p>
            <p>Data de senha: ${userData.senhaUsuario}</p>
        `;

        userInfoDiv.style.display = 'block';
    } else {
        console.log('Nenhum dado de usuário encontrado no localStorage.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const buttonCaixa = document.getElementById('btn_caixa');
    const buttonProdutos = document.getElementById('btn_produtos');
    const buttonFinanceiro = document.getElementById('btn_financeiro');
    const buttonCadastro = document.getElementById('btn_cadastro');
    const image = document.getElementById('navigate-image');

    buttonCaixa.addEventListener('click', function() {
        window.location.href = 'caixa.html';
    });

    buttonProdutos.addEventListener('click', function() {
        window.location.href = '.html';
    });

    buttonFinanceiro.addEventListener('click', function() {
        window.location.href = 'gastos.html';
    });

    buttonCadastro.addEventListener('click', function() {
        window.location.href = 'cadastro.html';
    });

    image.addEventListener('click', function() {
        window.location.href = 'perfil.html';
    });
});

