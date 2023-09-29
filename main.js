const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

function handleClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")

        if (xAttempts == 1) {
            document.querySelector(".screen2 h2").innerHTML = `Você acertou em ${xAttempts} tentativa.` 
        } else {
            document.querySelector(".screen2 h2").innerHTML = `Você acertou em ${xAttempts} tentativas.` 
        }
    }

    xAttempts++


    inputNumber.value = ' '
}

function tryClick() {
    document.querySelector('.screen2').classList.add('hide')
    document.querySelector('.screen1').classList.remove('hide')

    xAttempts = 1
}