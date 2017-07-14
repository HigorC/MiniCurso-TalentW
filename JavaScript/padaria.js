//INPUTS
var inputPao = document.querySelector("#qtd-pao");
var inputQueijo = document.querySelector("#qtd-queijo");
var inputBolo = document.querySelector("#qtd-bolo");

var btnCalcular = document.querySelector("#btn-calcular");

var total = document.querySelector("#p-total");

inputPao.addEventListener("change", function () {
    if (inputPao.value < 0) {
        alert("A quantidade não pode ser negativa!");
        inputPao.value = "";
    }
})

inputQueijo.addEventListener("blur", function () {
    if (inputQueijo.value < 0) {
        alert("A quantidade não pode ser negativa!");
        inputQueijo.value = "";
    }
})


btnCalcular.addEventListener("click", function () {
    var totalPao, totalQueijo, totalBolo;

    if (inputPao.value == "") {
        totalPao = 0;
    } else {
        totalPao = parseInt(inputPao.value) * 0.30;
    }

    if (inputQueijo.value == "") {
        totalQueijo = 0;
    } else {
        totalQueijo = parseFloat(inputQueijo.value) * 20;
    }
    
    totalBolo = parseInt(inputBolo.value) * 6;

    total.innerHTML = "R$ " + (totalPao + totalQueijo + totalBolo);
})