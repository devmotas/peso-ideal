var peso = document.getElementById("pesoInput")
const nome = document.getElementById("nomeInput")
const nomeCliente = document.getElementById("nomeCliente")
const altura = document.getElementById("alturaInput")
var idade = document.getElementById("idadeInput")
var sexo = document.querySelectorAll('.sexo')

function imprimir() {
    console.log(peso.value);
    console.log(nome.value);
    console.log(nomeCliente);
    console.log(altura.value);
    console.log(idade.value);
    console.log(sexo.value);
}