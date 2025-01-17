// Seleção do carro no DOM
const carro = document.getElementById('carro');

// Função para alternar animação (pausar/iniciar)
carro.addEventListener('click', () => {
    if (carro.style.animationPlayState === 'paused') {
        carro.style.animationPlayState = 'running';
    } else {
        carro.style.animationPlayState = 'paused';
    }
});