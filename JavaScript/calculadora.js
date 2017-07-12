
var um = document.getElementById("um");
var dois = document.getElementById("dois");
var tres = document.getElementById("tres");
var quatro = document.getElementById("quatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var sete = document.getElementById("sete");
var oito = document.getElementById("oito");
var nove = document.getElementById("nove");
var zero = document.getElementById("zero");

um.addEventListener("click", function () {
   document.querySelector(".visor").value += "1";
});

dois.addEventListener("click", function () {
   document.querySelector(".visor").value += "2";
});

tres.addEventListener("click", function () {
   document.querySelector(".visor").value += "3";
});

quatro.addEventListener("click", function () {
   document.querySelector(".visor").value += "4";
});

cinco.addEventListener("click", function () {
   document.querySelector(".visor").value += "5";
});

seis.addEventListener("click", function () {
   document.querySelector(".visor").value += "6";
});

sete.addEventListener("click", function () {
   document.querySelector(".visor").value += "7";
});

oito.addEventListener("click", function () {
   document.querySelector(".visor").value += "8";
});

nove.addEventListener("click", function () {
   document.querySelector(".visor").value += "9";
});

zero.addEventListener("click", function () {
   document.querySelector(".visor").value += "0";
});

