// Função para converter os valores inseridos

function converter() {
    //Pegando o valor digitado pelo usuário
    const valor = document.getElementById("valor").value 

    //Pegando a moeda escolhida pelo usuário
    const moeda = document.getElementById("moeda").value

    // Taxas de conversão
    const taxas = {
        "USD": 0.17, //Taxa BRL para USD
        "EUR": 0.16, //Taxa BRL para EUR
        "GBP": 0.14, //Taxa BRL para GBP
    }
    // Verificação se o valor é um número válido
    if(valor && !isNaN(valor)) {
        //Calcular o valor convertido 
        const convertido = valor * taxas[moeda]
        //Exibindo o resultado na tela
        document.getElementById("resultado").innerHTML = `O valor convertido é: ${convertido.toFixed(2)} ${moeda}`
    } else {
        //Se o valor for inválido, exiba uma msg de erro
        document.getElementById("resultado").innerHTML = "Por favor, insira um valor válido."
    }
}