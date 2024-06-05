function fazerCadastro() {
    const nomeUsuario = document.getElementById("nomeUsuario").value;
    const cpfUsuario = document.getElementById("cpfUsuario").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const cargo = document.getElementById("cargo").value;
    const salarioUsuario = document.getElementById("salarioUsuario").value;
    const senhaUsuario = document.getElementById("senhaUsuario").value;

    // Verifica se já há usuários cadastrados no Local Storage
    let usuariosCadastrados = JSON.parse(localStorage.getItem('usuariosCadastrados')) || [];

    // Adiciona o novo usuário à lista de usuários cadastrados
    usuariosCadastrados.push({ nome: nomeUsuario, cpf: cpfUsuario, dt_nascimento: dataNascimento, cargo: cargo, salario: salarioUsuario, senha: senhaUsuario});

    // Salva a lista atualizada no Local Storage
    localStorage.setItem('usuariosCadastrados', JSON.stringify(usuariosCadastrados));

    // Redireciona para a página de login
    window.location.href = '../login/login.html';

    alert("Cadastro realizado com sucesso.");
}
