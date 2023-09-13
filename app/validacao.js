function verificaSeOChutePossuiValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {

        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML = `
                <h2 style="color: red;">GAME OVER!!!!!</h2>
                <h4 style="color: white; margin:30px;">Pressione o botão para jogar novamente.</h4>
                <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `
            document.body.style.backgroundColor = "black";

        } else {

            elementoChute.innerHTML += '<div>Valor inválido. Você precisa dizer um número!</div>';
        
    }
}

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido. Fale um número entre ${menorValor} e ${maiorValor}!</div>`;
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!!! 
            <i class="fa-sharp fa-solid fa-trophy fa-shake" style="color: #ffd700;"></i>
            </h2>
            <h3>O número secreto era ${numeroSecreto}.</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i>
        </div>
        `
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }


}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})

