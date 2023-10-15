const calcular = document.getElementById('calcular');

function imc(){

    const nome = document.getElementById('nome').value;
    const alturaStr = document.getElementById('altura').value;
    const pesoStr = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    // Substituir vírgula por ponto e converter para número
    const altura = parseFloat(alturaStr.replace(',', '.'));
    const peso = parseFloat(pesoStr.replace(',', '.'));
    
    if(nome !== '' && !isNaN(altura) && !isNaN(peso)){

        const valorIMC = (peso / (altura * altura)).toFixed(1);
        
        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }
        else if(valorIMC < 25){
            classificacao = 'com peso Ideal.';
        }
        else if(valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }
        else if(valorIMC < 35){
            classificacao = 'com obesidade grau I';
        }
        else if(valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }
        else{
            classificacao = 'com obesidade grau III';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC}, e você está ${classificacao}`;

    }
    else{
        resultado.textContent = 'Preencha todos os campos!';
    }
}

calcular.addEventListener('click', imc);