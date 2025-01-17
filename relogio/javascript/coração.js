// Seleção dos elementos do DOM
const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

// Atualização do relógio a cada segundo
setInterval(relogio, 1000);

// Função para atualizar o relógio
function relogio() {
    const dia = new Date();
    let hr = dia.getHours();
    let min = dia.getMinutes();
    let seg = dia.getSeconds();

    // Adiciona o zero à esquerda se necessário
    if (hr < 10) hr = "0" + hr;
    if (min < 10) min = "0" + min;
    if (seg < 10) seg = "0" + seg;

    // Atualiza os elementos no DOM
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
}
