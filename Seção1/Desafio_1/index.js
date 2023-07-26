document.addEventListener("DOMContentLoaded", function () {
    var numero1Element = document.getElementById("numberX");
    var numero2Element = document.getElementById("numberY");
    var btn_somar = document.getElementById("somarButton");
    var resultadoElement = document.getElementById("result");
    btn_somar.addEventListener("click", function () {
        var numberX = Number(numero1Element.value);
        var numberY = Number(numero2Element.value);
        var resultado = numberX + numberY;
        resultadoElement.textContent = "Resultado: ".concat(resultado);
    });
});
