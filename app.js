var calcular = document.getElementById("calcularIMC");
var lectura = document.getElementById("lectura");
var imc = document.getElementById("imc");

function myFunction() {
    var txt;
    var nombre = prompt("¿Cual es tu nombre?");

    var peso = prompt("¿Cual es tu peso en kg?");

    var altura = prompt("¿Cual es tu altura en metros?");
    if (nombre == null || nombre == "" && peso == null || peso == "" && altura == null || altura == "") {
        txt = "Ningun dato ingresado, por favor reintentalo.";
        document.getElementById("calculateimc").style.display = "none";
    } else {
        txt = "<p>Hola!! <strong>" + nombre + "</strong></p>" + "\n" + "" + "<p>Tu peso es de: <strong>" + peso + "kg" + "</strong></p>" + "\n" + "" + "<p>Tu altura es de: <strong>" + altura + "m" + "</strong></p>" + "\n" + "" + "<p>Tu IMC: <strong><span id='imc'>CALCULA IMC</span></strong></p>" + "\n" + "<p>Usted tiene un: <strong><span id='lectura'></span></strong></p>";
    }
    document.getElementById("demo").innerHTML = txt;
    document.getElementById("calcularIMC").style.display = "block";
    if (peso != "" && altura != "") {
        imcx = (Number(peso) / (Number(altura) * Number(altura)));
        var n = imcx.toFixed(1);

        document.getElementById("imc").innerHTML = n;
        alert("Para un peso de " + "" + peso + "" + "kg" + "" + " y una talla de " + "" + altura + "m" + "" + "\n" + "Tu IMC es de: " + "" + "" + n + "\n" + "Usuario:" + "" + "" + nombre + "");

        if (imcx <= 18.5) {
            document.getElementById("lectura").innerHTML = "Peso insuficiente";
            document.getElementById("PI").style.backgroundColor = "#890000";
            document.getElementById("PI").style.color = "#fff";

        } else if (imcx >= 18.6 && imcx <= 24.9) {
            document.getElementById("lectura").innerHTML = "Peso saludable";
            document.getElementById("PS").style.backgroundColor = "#890000";
            document.getElementById("PS").style.color = "#fff";

        } else if (imcx >= 25 && imcx <= 26.9) {
            document.getElementById("lectura").innerHTML = "Sobrepeso de grado I";
            document.getElementById("SGI").style.backgroundColor = "#890000";
            document.getElementById("SGI").style.color = "#fff";

        } else if (imcx >= 27 && imcx <= 29.9) {
            document.getElementById("lectura").innerHTML = "Sobrepeso (preobesidad)";
            document.getElementById("SPO").style.backgroundColor = "#890000";
            document.getElementById("SPO").style.color = "#fff";

        } else if (imcx >= 30 && imcx <= 34.9) {
            document.getElementById("lectura").innerHTML = "Obesidad de tipo I";
            document.getElementById("OTI").style.backgroundColor = "#890000";
            document.getElementById("OTI").style.color = "#fff";

        } else if (imcx >= 35 && imcx <= 39.9) {
            document.getElementById("lectura").innerHTML = "Obesidad de tipo II";
            document.getElementById("OTII").style.backgroundColor = "#890000";
            document.getElementById("OTII").style.color = "#fff";
        } else if (imcx >= 40 && imcx <= 49.9) {
            document.getElementById("lectura").innerHTML = "Obesidad Mórbida";
            document.getElementById("OM").style.backgroundColor = "#890000";
            document.getElementById("OM").style.color = "#fff";
        } else if (imcx >= 50) {
            document.getElementById("lectura").innerHTML = "Obesidad Extrema";
            document.getElementById("OE").style.backgroundColor = "#890000";
            document.getElementById("OE").style.color = "#fff";
        } else {
            alert("Intentalo nuevamente....");
        }

    }
};

function newFunction(){
    alert('Vuelve a intentarlo');
    window.location.reload();

}