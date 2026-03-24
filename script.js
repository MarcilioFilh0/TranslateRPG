const entrada = document.querySelector('#entrada');
const saida = document.querySelector('#saida');
const seletor = document.querySelector('#seletor-fonte');
const saidaConfig = document.querySelector('#saida');
const numTamanho = document.querySelector('#tamanho-fonte');
const corFonte = document.querySelector('#cor-fonte');
const corFundo = document.querySelector('#cor-fundo');
const resetBtn = document.querySelector('#bnt-reset');

entrada.addEventListener('input', () => {
    saida.textContent = entrada.value;
    saida.style.textContent = "Digite algo";

});

seletor.addEventListener('change', () => {
    saida.className = seletor.value;
});

document.addEventListener('DOMContentLoaded', () => {
    saida.className = seletor.value;
});

function ajustes() {
    const painel = document.querySelector('#div-ajuste');
    painel.classList.toggle('div-visivel');
}

numTamanho.addEventListener('input', () => {
    saidaConfig.style.fontSize = numTamanho.value + "px";
});

corFonte.addEventListener('input', () => {
    saidaConfig.style.color = corFonte.value;
});

corFundo.addEventListener('input', () => {
    saidaConfig.style.backgroundColor = corFundo.value;
});

resetBtn.addEventListener('click', () => {
    numTamanho.value = 30;
    corFonte.value = '#000000';
    saidaConfig.style.fontSize = numTamanho.value + "px";
    saidaConfig.style.color = '#000000';
    saidaConfig.style.backgroundColor = '#ffffff';
});