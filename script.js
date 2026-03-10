const entrada = document.querySelector('#entrada');
const saida = document.querySelector('#saida');
const seletor = document.querySelector('#seletor-fonte');

// Função para atualizar o texto
entrada.addEventListener('input', () => {
    saida.textContent = entrada.value;
    if (entrada.value === " ") {
        saida.textContent = "O resultado aparecerá aqui.";
    } 
});

// Função para trocar a fonte (a classe CSS)
seletor.addEventListener('change', () => {
    // Remove qualquer classe de fonte anterior e aplica a nova
    saida.className = seletor.value;
});