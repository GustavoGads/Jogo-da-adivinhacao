// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
const inputNumber = document.querySelector("#inputNumber")

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', pressEnter)

// Funções
function handleTryClick(event) {
        event.preventDefault() // Não faça o padrão
    
        if(Number(inputNumber.value) == randomNumber) {
            toggleScreen()
    
            if (xAttempts == 1) {
                document.querySelector(".screen2 h2").innerHTML = `Você acertou em ${xAttempts} tentativa.` 
            } else {
                document.querySelector(".screen2 h2").innerHTML = `Você acertou em ${xAttempts} tentativas.` 
            }
    
        } else if(Number(inputNumber.value) < 0){
            alert(`
            Valor inserido menor que 0.
            Tente novamente.`)
        } else if(Number(inputNumber.value) > 10) {
            alert(`
            Valor inserido maior que 10.
            Tente novamente.`)
        }

        
        xAttempts++
        inputNumber.value = ''
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressEnter(e) {
    if (e.key == 'Enter'&& screen1.classList.contains('hide')) {
        handleResetClick()
    }
}