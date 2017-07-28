// QUESTÃO 1




// QUESTÃO 2
function troca(a) {
    var bsim = document.getElementById("btn-sim");
    var bnao = document.getElementById("btn-nao");
    var aux;

    if (a == bnao.id) {
        aux = bsim.id;
        bsim.id = bnao.id;
        bnao.id = aux;

        bsim.textContent = "Não";
        bnao.textContent = "Sim";

    }

}

function con() {
   document.getElementById("pergunta").innerHTML= "Parabêns, você tem muito bom gosto!";
}