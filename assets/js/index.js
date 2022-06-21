const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
    "Talvez.",
    "Definitivamente não",
    "Nao.",
    "Provavelmente.",
    "Pode ser que sim.",
    "Certeza!",
    "Concentre-se e pergunte novamente.",
    "Melhor não te dizer agora.",
    "Definitivamente sim!", 
    "Não é possível prever agora.",
    "Sem dúvidas!",
    "Minhas fontes dizem que não",
    "Sim.",
    "Vou pensar sobre essa pergunta. Volte mais tarde",
    "Não conte com isso.",
    "Minha resposta é não!",
    "Pode ser que não.",
    "Pergunte novamente mais tarde.",
    "Você realmente quer saber isso?",
    "Reformule a sua pergunta.",
    "Melhor não responder agora",
    "Obviamente sim",
    "Não é a melhor hora pra essa pergunta.",
    "Te aconselho a ir dormir",
    "O tempo te dirá..."
]



function fazerPergunta() {

    if (inputPergunta.value == "") {
        alert("Digite sua pergunta!")
        return
    }

    buttonPerguntar.setAttribute('disabled', true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

    elementoResposta.style.opacity = 1;

    setTimeout(function() {
        elementoResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute('disabled')
    }, 3000)
}