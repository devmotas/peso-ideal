var peso = document.getElementById("pesoInput")
const nome = document.getElementById("nomeInput")
const nomeCliente = document.getElementById("nomeCliente")
const altura = document.getElementById("alturaInput")
var idade = document.getElementById("idadeInput")
var sexo = document.querySelectorAll('.sexo')
var input = document.getElementById("input")
var dados = document.getElementById("dados")
var logo = document.getElementById("logo")
var dadosCabecalho = document.getElementById("dadosCabecalho")
var header = document.getElementById("head")
var inserir30Dias = document.getElementById("adicionar30Dias")
var peso30Dias = document.getElementById("peso30Dias")
var pesoInputTrinta = document.getElementById("pesoInputTrinta")
var hoje = document.getElementById("hoje")
var proximoMes = document.getElementById("proximoMes")
var buttonComparativo = document.getElementById("buttonComparativo")

function checarDados() {
    if (peso.value == "" || idade.value == "" || altura.value == "" || nome.value == "") {
        { alert("Dados incompletos!") }
    }
    if (nome.value != "" && altura.value != "" && idade.value != "" && peso.value != "") { mostrar() }
}

function adicionarDados() {
    inserir30Dias.style.display = "none"
    peso30Dias.style.display = "block"
}

function checarInput30Dias() {
    if (pesoInputTrinta.value != "") {
        hoje.innerHTML = ("Antes")
        proximoMes.innerHTML = ("Depois")

    }
    return pesoInputTrinta.value == "" ? pesoIdeal() : pesoInputTrinta.value
}

function mostrar() {
    nomeCliente.innerHTML = nome.value.toUpperCase()
    nomeCliente.style.display = ("block")
    document.getElementById("data").innerHTML += " " + data()
    document.getElementById("p1").innerHTML = altura.value
    document.getElementById("p2").innerHTML = peso.value
    document.getElementById("p3").innerHTML = pesoIdeal()
    document.getElementById("p4").innerHTML = imc(peso.value)
    document.getElementById("p5").innerHTML = massaGorda(peso.value)
    console.log(`Altura = ${altura.value}`);
    console.log(`IMC = ${imc()}`);
    console.log(`Massa Gorda = ${massaGorda()}`);
    mostrar30Dias()
    mudarTela()

}

function mostrar30Dias() {
    document.getElementById("p6").innerHTML = altura.value
    document.getElementById("p7").innerHTML = checarInput30Dias()
    document.getElementById("p8").innerHTML = pesoIdeal()
    document.getElementById("p9").innerHTML = imc(checarInput30Dias())
    document.getElementById("p10").innerHTML = massaGorda(checarInput30Dias())
}


function mudarTela() {
    input.style.display = "none"
    dados.style.display = "grid"
    logo.style.display = "none"
    dadosCabecalho.style.display = "block"
    header.style.height = "100px"
    buttonComparativo.style.display = "block"

}

function data() {
    let date = new Date()
    if (date.getMonth() < 10) {
        return date.getDate() + "/" + "0" + (date.getMonth() + 1) + "/" + date.getFullYear()
    } else {
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    }
}

function pesoIdeal() {
    return (Math.pow(altura.value, 2) * 21.7).toFixed(2)
}

function imc(p) {
    return (p / Math.pow(altura.value, 2)).toFixed(2)
}

function massaGorda(pe) {
    checarSexo()
    massa = (1.20 * imc(pe)) + (0.23 * idade.value) - (10.8 * checarSexo()) - 5.4
    return massa.toFixed(2)
}

function checarSexo() {
    var sex = 0
    for (var i = 0 in sexo)
        if (sexo[i].checked)
            sex = sexo[i].value
    return (sex == "m" ? 1 : 0).toFixed(2)
}

function mostrarComparativo() {
    nomeCliente.style.display = "none"
    buttonComparativo.style.display = "none"
    novaConsulta = document.getElementById("novaConsulta")
    resultadoIdade = document.getElementById("resultadoIdade")
    resultadoSexo = document.getElementById("resultadoSexo")
    resultadoPeso = document.getElementById("resultadoPeso")
    resultadoPesoIdeal = document.getElementById("resultadoPesoIdeal")
    resultadoImc = document.getElementById("resultadoImc")
    resultadoMassaGorda = document.getElementById("resultadoMassaGorda")
    resultado = document.getElementById("resultado")

    resultado.style.display = "block"
    dados.style.display = "none"
    novaConsulta.style.display = "block"


}