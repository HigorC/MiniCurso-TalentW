//-----------------------------------------------------------------------------------------------------------------------------------
//USÁVEIS
var pergunta = document.querySelector("#pergunta");

function adicionarClasse(classe) {
    corpo.classList.toggle('frenetico');
}

function trocaQuestao(questaoAtual, proxQuestao) {
    questaoAtual.classList.toggle("esconderDiv");
    proxQuestao.classList.toggle("exibirDiv");
}

function trocaTextoPergunta(texto) {
    pergunta.textContent = texto;
}

//-----------------------------------------------------------------------------------------------------------------------------------
// QUESTÃO 1
var btnSim = document.querySelector(".btn-sim");
var btnNao = document.querySelector(".btn-nao");
var corpo = document.querySelector("body");

btnSim.addEventListener("click", function () {
    setTimeout(function () {
        trocaQuestao(document.querySelector(".q1"), document.querySelector(".q2"));
    }, 1500);
    trocaTextoPergunta("QUE BOM");
    adicionarClasse("frenetico");
})

btnNao.addEventListener("click", function () {
    setTimeout(() => {
        trocaQuestao(2)
    }, 1500);
    trocaTextoPergunta("QUE PENA");
    adicionarClasse("frenetico");
})







// QUESTÃO 2