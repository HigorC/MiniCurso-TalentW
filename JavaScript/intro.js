

var botaoCalcular = document.getElementById("calcula-imcs");
// botao.onclick = calculaTodosImcs;

botaoCalcular.addEventListener("click", function () {
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




