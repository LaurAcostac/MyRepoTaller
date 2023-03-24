function Sumar() {
    let valor1 = parseInt(document.getElementById("v1").value);
    let valor2 = parseInt(document.getElementById("v2").value);
    let valor3 = parseInt(document.getElementById("v3").value);
    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById("result").value = "ingrese dos valores";
    } else if (isNaN(valor3)) {
        document.getElementById("result").value = valor1 + valor2;
    }
    else {
        document.getElementById("result").value = valor1 + valor2 + valor3;
    }
}
function Restar() {
    let valor1 = parseInt(document.getElementById("v1").value);
    let valor2 = parseInt(document.getElementById("v2").value);
    let valor3 = parseInt(document.getElementById("v3").value);
    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById("result").value = "ingrese dos valores";
    } else if (isNaN(valor3)) {
        document.getElementById("result").value = valor1 - valor2;
    }
    else {
        document.getElementById("result").value = valor1 - valor2 - valor3;
    }
}
function Multiplicar() {
    let valor1 = parseInt(document.getElementById("v1").value);
    let valor2 = parseInt(document.getElementById("v2").value);
    let valor3 = parseInt(document.getElementById("v3").value);
    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById("result").value = "ingrese dos valores";
    } else if (isNaN(valor3)) {
        document.getElementById("result").value = valor1 * valor2;
    }
    else {
        document.getElementById("result").value = valor1 * valor2 * valor3;
    }
}
