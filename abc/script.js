document.addEventListener("DOMContentLoaded", function () {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const resultadoSection = document.getElementById("section-resultado");
    const historicoDiv = document.getElementById("div-historico");
    
    function calcular(operacao) {
        const valor1 = parseFloat(num1.value);
        const valor2 = parseFloat(num2.value);
        
        if (isNaN(valor1) || isNaN(valor2)) {
            resultadoSection.innerHTML = "Informe os 2 números para realizar a operação";
            return;
        }
        
        let resultado;
        let mensagem;
        switch (operacao) {
            case "somar":
                resultado = valor1 + valor2;
                mensagem = `Resultado: ${valor1} mais ${valor2} = ${resultado}`;
                break;
            case "subtrair":
                resultado = valor1 - valor2;
                mensagem = `Resultado: ${valor1} menos ${valor2} = ${resultado}`;
                break;
            case "multiplicar":
                resultado = valor1 * valor2;
                mensagem = `Resultado: ${valor1} vezes ${valor2} = ${resultado}`;
                break;
            case "dividir":
                resultado = valor1 / valor2;
                mensagem = `Resultado: ${valor1} dividido por ${valor2} = ${resultado}`;
                break;
        }
        
        resultadoSection.innerHTML = mensagem;
        
        const novoHistorico = document.createElement("p");
        novoHistorico.textContent = mensagem;
        historicoDiv.prepend(novoHistorico);
    }
    
    document.getElementById("btn-somar").addEventListener("click", () => calcular("somar"));
    document.getElementById("btn-subtrair").addEventListener("click", () => calcular("subtrair"));
    document.getElementById("btn-multiplicar").addEventListener("click", () => calcular("multiplicar"));
    document.getElementById("btn-dividir").addEventListener("click", () => calcular("dividir"));
});
