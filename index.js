let botao = document.querySelector("#botao-calcular")
let nome = document.querySelector("#dados-nome")
let altura = document.querySelector("#dados-altura")
let peso = document.querySelector("#dados-peso")
let texto = document.querySelector("#texto-resultado")

botao.addEventListener("click", calcularimc)

function calcularimc() {
    let imc = peso.value / (altura.value * altura.value)
    imc = imc.toFixed(1)
    if (imc <= 18.4) {
        console.log(imc)
        texto.innerHTML = `${nome.value} seu IMC é ${imc} e você está abaixo do peso.`
    } else if (imc >= 25.0) {
        console.log(imc)
        texto.innerHTML = `${nome.value} seu IMC é ${imc} e você está acima do peso.`
    } else {
        console.log(imc)
        texto.innerHTML = `${nome.value} seu IMC é ${imc} e você está no peso ideal.`
    }
}