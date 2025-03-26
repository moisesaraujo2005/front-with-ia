const historico = []

function calcular(operacao) {

    const inputNum1 = document.getElementById('input-num1');
    const inputNum2 = document.getElementById('input-num2');
    const resultadoSection = document.getElementById('section-resultado');
    const divHistorico = document.getElementById('div-historico')

    const numero1 = inputNum1.value 
    const numero2 = inputNum2.value
    let resultado;

    if (numero1 === ''|| numero2 === '') {
        resultadoSection.textContent = "Informe os 2 números para realizar a operação";
        return;
    }
    
    if(operacao === 'somar') {
        resultado = Number(numero1) + Number(numero2);
        resultadoSection.textContent = `Resultado: ${numero1} mais ${numero2} = ${resultado}`;
        historico.unshift(`⏲️ ${numero1} mais ${numero2} = ${resultado}`);
    }
    else if(operacao === 'subtrair') {
        resultado = Number(numero1) - Number(numero2);
        resultadoSection.textContent = `Resultado: ${numero1} menos ${numero2} = ${resultado}`;
        historico.unshift(`⏲️ ${numero1} menos ${numero2} = ${resultado}`);
    }
    else if(operacao === 'dividir') {
        resultado = Number(numero1) / Number(numero2);
        resultadoSection.textContent = `Resultado: ${numero1} divido por ${numero2} = ${resultado}`;
     historico.unshift(`⏲️ ${numero1} divido por ${numero2} = ${resultado}`);
    }
    else {
        resultado = Number(numero1) * Number(numero2);
     resultadoSection.textContent = `Resultado: ${numero1} vezes ${numero2} = ${resultado}`;
        historico.unshift(`⏲️ ${numero1} vezes ${numero2} = ${resultado}`);
    }

    divHistorico.textContent = ''; 
    

    historico.forEach(operacao => {
        const span = document.createElement('span');
        span.textContent = operacao;

        divHistorico.appendChild(span);


    });
}

document.getElementById('btn-somar').addEventListener('click', (event) => {
        calcular('somar');
})
document.getElementById('btn-subtrair').addEventListener('click', (event) => {
    calcular('subtrair')}
);
document.getElementById('btn-multiplicar').addEventListener('click', (event) => {
    calcular('multiplicar')}
);
document.getElementById('btn-dividir').addEventListener('click', (event) =>{
    calcular('dividir')}
);