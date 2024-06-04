function fazerLogin() {
    const nomeUsuario = document.getElementById("nomeUsuario").value;
    const senha = document.getElementById("senha").value;
  
    const usuariosCadastrados = [
      { nome: "teste", senha: "123" },
      { nome: "Henrique", senha: "senha" },
      { nome: "Paulo", senha: "01" },
    ];
  
    const usuarioEncontrado = usuariosCadastrados.find(
      (usuario) => usuario.nome === nomeUsuario && usuario.senha === senha
    );
  
    if (usuarioEncontrado) {
      const url = `../servicos/servicos.html?usuario=${usuarioEncontrado.nome}`;
      window.location.href = url;
    } else {
      alert("Usuário ou senha inválidos.");
    }
}
  
document.querySelector('.btn_entrar').addEventListener('click', fazerLogin);

document.getElementById('senha').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fazerLogin();
    }
});

document.getElementById('nomeUsuario').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fazerLogin();
    }
});

  