//-----------------------------------------------------------------------------------------------------------------------------------
//USÁVEIS
var pergunta = document.querySelector("#pergunta");

function adicionarClasseCSS(classe, local) {
    local.classList.toggle(classe);
}

function trocaQuestao(questaoAtual, proxQuestao, classesDaProxQuestao) {
    questaoAtual.classList = "esconderDiv";
    proxQuestao.classList = classesDaProxQuestao;
}

function trocaTextoPergunta(texto, local) {
    local.textContent = texto;
}

//-----------------------------------------------------------------------------------------------------------------------------------
// QUESTÃO 1
var btnSim = document.querySelector(".q1 #btn-sim");
var btnNao = document.querySelector(".q1 #btn-nao");
var corpo = document.querySelector("body");

btnSim.addEventListener("click", function () {
    setTimeout(function () {
        trocaQuestao(document.querySelector(".q1"), document.querySelector(".q2"), "questao q2");
    }, 1500);
    trocaTextoPergunta("QUE PENA", document.querySelector(".q1 #pergunta"));
    adicionarClasseCSS("esconderDiv", btnSim);
    adicionarClasseCSS("esconderDiv", btnNao);
    adicionarClasseCSS("frenetico", corpo);
})

btnNao.addEventListener("click", function () {

    setTimeout(function () {
        trocaQuestao(document.querySelector(".q1"), document.querySelector(".q2"), "questao q2");
    }, 1500);
    
    trocaTextoPergunta("QUE BOM", document.querySelector(".q1 #pergunta"));
    adicionarClasseCSS("esconderDiv", btnSim);
    adicionarClasseCSS("esconderDiv", btnNao);
    adicionarClasseCSS("frenetico", corpo);
})

//-----------------------------------------------------------------------------------------------------------------------------------
// QUESTÃO 2
var bsim = document.querySelector(".q2 #btn-sim");
var bnao = document.querySelector(".q2 #btn-nao");

bsim.addEventListener("mouseover", function () {
    trocaBotoes(bsim, bnao);
});
bnao.addEventListener("mouseover", function () {
    trocaBotoes(bnao, bsim);
});

function trocaBotoes(botaoAReceberSim, botaoAReceberNao) {
    if (botaoAReceberSim.textContent == "Não") {

        botaoAReceberSim.textContent = "Sim";
        botaoAReceberNao.textContent = "Não";

        var aux = bsim.id;
        bsim.id = bnao.id;
        bnao.id = aux;
    }
}

bsim.addEventListener("click", function () {
    setTimeout(function () {
        trocaQuestao(document.querySelector(".q2"), document.querySelector(".q3"), "questao q3");
    }, 1500);
    adicionarClasseCSS("esconderDiv", bsim);
    adicionarClasseCSS("esconderDiv", bnao);
    trocaTextoPergunta("Parabêns, você tem muito bom gosto!", document.querySelector(".q2 p"));
});

bnao.addEventListener("click", function () {
    setTimeout(function () {
        trocaQuestao(document.querySelector(".q2"), document.querySelector(".q3"), "questao q3");
    }, 1500);
    adicionarClasseCSS("esconderDiv", bsim);
    adicionarClasseCSS("esconderDiv", bnao);
    trocaTextoPergunta("Parabêns, você tem muito bom gosto!", document.querySelector(".q2 p"));
});
