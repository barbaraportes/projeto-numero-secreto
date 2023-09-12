const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio () {
    return parseInt((Math.random() * 100) + 1);
}

console.log(`O número secreto é: ${numeroSecreto}`);

