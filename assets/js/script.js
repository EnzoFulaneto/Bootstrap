let email = document.querySelector('#email') //se fosse uma classe ficaria .email
let sugestao = document.querySelector("#sugestao")
let mapa = document.querySelector("#mapa")
let emailOk = false
let sugestaoOk = false

function validaEmail () {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaSugestao() {
    let txtSugestao = document.querySelector("#txtSugestao")
    if (sugestao.value.length > 100) {
        txtSugestao.innerHTML = "Você ultrapassou o limite de caracteres :( o máximo é de 100"
        txtSugestao.style.color = "red"
    } else {
        txtSugestao.innerHTML = "Sugestão aceita :)"
        txtSugestao.style.color = "green"
        sugestaoOk = true
    }
}

function zoomMapa() {
    mapa.style.width="650px"
    mapa.style.height="350px"
}

function mapaNormal() {
    mapa.style.width="400px"
    mapa.style.height="250px"
}

function enviar() {
    if (emailOk == true && sugestaoOk == true) {
        alert ("Sugestão enviada com sucesso, agradecemos a atenção :)")
    } else {
        alert ("Algum campo está incorreto :( Por favor, revise e tente novamente")
    }
}