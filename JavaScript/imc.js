
var botaoCalcular = document.querySelector("#adicionar-paciente");

botaoCalcular.addEventListener("click", function (event) {

    event.preventDefault(); //impede comportamento padrao

    var campoNome = document.querySelector("#campo-nome");
    var campoPeso = document.querySelector("#campo-peso");
    var campoAltura = document.querySelector("#campo-altura");

    var pacienteNovo = "<tr class='paciente'>" +
        "<td class='info-nome'>"+campoNome.value +"</td >" +
        "<td class='info-peso'>"+campoPeso.value+"</td>" +
        "<td class='info-altura'>"+campoAltura.value+"</td>" +
        "<td class='info-imc'></td>" +
        "</tr>";

    var tabela = document.querySelector("table");

    tabela.innerHTML = tabela.innerHTML + pacienteNovo;

    campoNome.value = "";
    campoAltura.value = "";
    campoPeso.value = "";
});

var trsPacientes = document.getElementsByClassName("paciente");

percorreArray(trsPacientes,function (pacienteTr) {
    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];

    var paciente = {
        nome: tdNome.textContent,
        altura: tdAltura.textContent,
        peso: tdPeso.textContent,
        pegaImc: function () {
            if (this.altura != 0) {
                var imc = this.peso / (this.altura * this.altura);
                return imc;
            } else {
                console.log("Altura é zero")
            }
        }
    };

    console.log(paciente.nome);
});

function percorreArray(trsPacientes, comportamento) {
    for (var i = 0; i < trsPacientes.length; i++) {
        var pacienteTrAtual = trsPacientes[i];
        comportamento(pacienteTrAtual);
    }
}



var botaoCalcular = document.getElementById("calcula-imcs");

botaoCalcular.addEventListener("click",function () {
    var trsPacientes = document.getElementsByClassName("paciente"); //Array de trs pacientes

    percorreArray(trsPacientes, function (pacienteTr) {
        var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
        var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
        var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
        var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];

        var paciente = {
            nome: tdNome.textContent,
            altura: tdAltura.textContent,
            peso: tdPeso.textContent,
            pegaImc: function () {
                var imc = this.peso / (this.altura * this.altura);
                return imc;
            }
        };

        if (paciente.altura != 0) {
            var imc = paciente.pegaImc();
            tdImc.textContent = imc;
            console.log(imc);
        } else {
            console.log("Altura é zero")
        }
    });
});