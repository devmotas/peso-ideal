var peso = document.getElementById("pesoInput")
var nome = document.getElementById("nomeInput")
var nomeCliente = document.getElementById("nomeCliente")
var altura = document.getElementById("alturaInput")
var idade = document.getElementById("idadeInput")
var sexo = document.querySelectorAll('.sexo');
var input = document.getElementById("input")
var dados = document.getElementById("dados")

function checarDados() {
    if (nome.value == "") { alert("Insira um Nome.") }
    if (altura.value == "") { alert("Insira uma Altura.") }
    if (idade.value == "") { alert("Insira uma Idade.") }
    if (peso.value == "") { alert("Insira um Peso.") }
    if (nome.value != "" && altura.value != "" && idade.value != "" && peso.value != "") { mostrar() }
}

function mostrar() {
    nomeCliente.innerHTML = nome.value
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
    document.getElementById("p7").innerHTML = pesoIdeal()
    document.getElementById("p8").innerHTML = pesoIdeal()
    document.getElementById("p9").innerHTML = imc(pesoIdeal())
    document.getElementById("p10").innerHTML = massaGorda(pesoIdeal())
}


function mudarTela() {
    input.style.display = "none"
    dados.style.display = "grid"
}

function data() {
    var date = new Date()
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
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