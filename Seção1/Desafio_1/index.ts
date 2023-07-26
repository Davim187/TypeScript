document.addEventListener("DOMContentLoaded", () => {
  const numero1Element = document.getElementById("numberX") as HTMLInputElement;
  const numero2Element = document.getElementById("numberY") as HTMLInputElement;
  const btn_somar = document.getElementById("somarButton") as HTMLInputElement;

  const resultadoElement = document.getElementById("result");

  btn_somar.addEventListener("click", ()=>{

    const numberX = Number(numero1Element.value);
    const numberY = Number(numero2Element.value);
  
    const resultado = numberX + numberY;
  
    // resultadoElement.textContent = `Resultado: ${resultado}`;
  })
});