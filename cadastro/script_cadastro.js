function fazerCadastro() {
    const nomeUsuario = document.getElementById("nomeUsuario").value;
    const cpfUsuario = document.getElementById("cpfUsuario").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const cargo = document.getElementById("cargo").value;
    const salarioUsuario = document.getElementById("salarioUsuario").value;
    const senhaUsuario = document.getElementById("senhaUsuario").value;

    let usuariosCadastrados = JSON.parse(localStorage.getItem('usuariosCadastrados')) || [];

    let idUsuario;
    if (usuariosCadastrados.length > 0) {
        const lastUser = usuariosCadastrados[usuariosCadastrados.length - 1];
        idUsuario = lastUser.id + 1;
    } else {
        idUsuario = 1;
    }

    usuariosCadastrados.push({ id: idUsuario, nome: nomeUsuario, cpf: cpfUsuario, dt_nascimento: dataNascimento, cargo: cargo, salario: salarioUsuario, senha: senhaUsuario });

    localStorage.setItem('usuariosCadastrados', JSON.stringify(usuariosCadastrados));

    alert("Cadastro realizado com sucesso.");
}
