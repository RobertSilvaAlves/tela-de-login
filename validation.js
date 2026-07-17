
const loginTela = document.getElementById('loginTela');
const campoNome = document.getElementById('iname');
const campoSenha = document.getElementById('isenha');


loginTela.addEventListener('submit', function(event) {
    //remover espaços em branco extras
    const valorNome = campoNome.value.trim();

    // Condição de validação: tamanho menor que 5
    if (valorNome.length < 5) {
        event.preventDefault(); // Impede o envio do formulário
        document.getElementById('iname-error').innerText = '*O nome de usuário deve ter pelo menos 5 caracteres.'
        return; // Sai da função para evitar a validação da senha
    }

    const valorSenha = campoSenha.value.trim();
    if (valorSenha.length < 8) {
        event.preventDefault();
        document.getElementById('isenha-error').innerText = '*A senha deve ter pelo menos 8 caracteres.';
        return;
    }
})

function mostrarSenha() {
  var inputSenha = document.getElementById("isenha");
  var iconeOlho = document.getElementById("olho");
  var logo = document.querySelector('.logo');
  
  
  if (inputSenha.type === "password") {
    inputSenha.type = "text";
    iconeOlho.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/2759/2759686.png" alt="Olho fechado">'; // Altera o ícone para olho fechado
  } else {
    inputSenha.type = "password";
    iconeOlho.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/822/822153.png" alt="Olho aberto">'; // Altera o ícone para olho aberto
  }
}




