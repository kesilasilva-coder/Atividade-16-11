document.getElementById("formulario").addEventListener("submit", function(event) {

event.preventDefault();

let nome = document.getElementById("nome").value;
let senha = document.getElementById("senha").value;

if (nome == "" || senha == "") {
alert("Preencha todos os campos!");
} else {
alert("Cadastro realizado com sucesso!");
}

});