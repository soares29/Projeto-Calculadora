let elementoResultado = document.querySelector(".js-resultado")
let botoesPadroes = document.querySelectorAll(".js-btn-padroes")
let botaoResultado = document.querySelector(".js-btn-igual")
let botaoAC = document.querySelector(".js-btn-ac")
let botaoMaisMenos = document.querySelector(".js-btn-mais-menos")
let botaoDeletar = document.querySelector(".js-btn-del")



function addElementoAoInputResultado(numeroDigitado) {
    verificarSimboloDuplicado(numeroDigitado);
    if (verificarSimboloInicial(numeroDigitado)) {
        return;
    }
    elementoResultado.value += numeroDigitado;
}

function executarCalculo() {
    try {
        elementoResultado.value = eval(elementoResultado.value);
    } catch {
        alert('Algo deu errado, tente novamente.')
    }
}

function limparResultado() {
    elementoResultado.value = "";
}

function trocarSinal() {
    if (Number(elementoResultado.value)) {
        elementoResultado.value = elementoResultado.value  * -1
    }
}

function deletarUltimoNumeroDoResultado() {
    elementoResultado.value = elementoResultado.value.slice(0, -1);
}

function verificarSimboloDuplicado(numeroDigitadoRecebidoPorParametro) {
    let ultimoValorNoInputResultado = elementoResultado.value[elementoResultado.value.length -1];
    if (
        ultimoValorNoInputResultado &&
        !Number(ultimoValorNoInputResultado) &&
        !Number(numeroDigitadoRecebidoPorParametro) &&
        ultimoValorNoInputResultado != 0 &&
        numeroDigitadoRecebidoPorParametro != 0
    ){
        deletarUltimoNumeroDoResultado();
    }
}

function verificarSimboloInicial(numeroDigitadoRecebidoPorParametro) {
    if (elementoResultado.value.length == 0 && 
        !Number(numeroDigitadoRecebidoPorParametro)) {
        return true;
    }
}

function gerenciarEscutadores() {
    botoesPadroes.forEach((elementoCorrente) => {
        elementoCorrente.addEventListener('click', () => {
            let valorDoElementoClicado = elementoCorrente.dataset.valor;
            addElementoAoInputResultado(valorDoElementoClicado)
        });
    });
    
    botaoResultado.addEventListener('click', () => {
        executarCalculo();
    });
    
    botaoAC.addEventListener('click', () => {
        limparResultado();
    });
    
    botaoMaisMenos.addEventListener('click', () => {
        trocarSinal();
    });
    
    botaoDeletar.addEventListener('click', () => {
        deletarUltimoNumeroDoResultado();
    });
}

gerenciarEscutadores();