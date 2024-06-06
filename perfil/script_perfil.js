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


