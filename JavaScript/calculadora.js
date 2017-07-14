
var um = document.getElementById("um").innerHTML;
var dois = document.getElementById("dois").innerHTML;
var tres = document.getElementById("tres").innerHTML;
var quatro = document.getElementById("quatro").innerHTML;
var cinco = document.getElementById("cinco").innerHTML;
var seis = document.getElementById("seis").innerHTML;
var sete = document.getElementById("sete").innerHTML;
var oito = document.getElementById("oito").innerHTML;
var nove = document.getElementById("nove").innerHTML;
var zero = document.getElementById("zero").innerHTML;

var x, y;
var sinal;

function add1() {
    document.getElementById("visor").value += um;
}
function add2() {
    document.getElementById("visor").value += dois;
}
function add3() {
    document.getElementById("visor").value += tres;
}
function add4() {
    document.getElementById("visor").value += quatro;
}
function add5() {
    document.getElementById("visor").value += cinco;
}
function add6() {
    document.getElementById("visor").value += seis;
}
function add7() {
    document.getElementById("visor").value += sete;
}
function add8() {
    document.getElementById("visor").value += oito;
}
function add9() {
    document.getElementById("visor").value += nove;
}
function add0() {
    document.getElementById("visor").value += zero;
}
function limpar() {
    document.getElementById("visor").value = "";
}
function consoleVisor() {
    y = visor.value;
    console.log(visor.value);

    switch (sinal) {
        case "+":
            x = document.getElementById("visor").value = parseInt(x) + parseInt(y);
            break;
        case "-":
            x = document.getElementById("visor").value = parseInt(x) - parseInt(y);
            break;
        case "*":
            x = document.getElementById("visor").value = parseInt(x) * parseInt(y);
            break;
        case "/":
            if (y != 0)
                x = document.getElementById("visor").value = parseInt(x) / parseInt(y);
            break;
    }

}

function somar() {
    if (sinal != null && visor.value != null) {
        x = visor.value;
        sinal = "+";
    } else {
        x = visor.value;
        sinal = "+";

    }
    limpar();
}

function subtrair() {
    if (sinal != null && visor.value != null) {
        x = visor.value;
        sinal = "-";
    } else {
        x = visor.value;
        sinal = "-";
    }
    limpar();
}

function multiplicar() {
    if (sinal != null && visor.value != null 
    ) {
        x = visor.value;
        sinal = "*";
    } else {
        x = visor.value;
        sinal = "*";

    }
    limpar();
}

function dividir() {
    if (sinal != null && visor.value != null) {
        x = visor.value;
        sinal = "/";
    } else {
        x = visor.value;
        sinal = "/";

    }
    limpar();
}