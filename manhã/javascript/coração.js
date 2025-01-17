// Seleção dos elementos do DOM
const frase = document.querySelector('#frase');
const dia = document.querySelector('#day');
const mes = document.querySelector('#month');
const ano = document.querySelector('#year');
const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');
const img = document.querySelector('img');

// Atualização do relógio a cada segundo
setInterval(relogio, 1000);

// Função para atualizar o relógio
function relogio() {
    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1; // Mês começa do 0
    let year = d.getFullYear();
    let hr = d.getHours();
    let min = d.getMinutes();
    let seg = d.getSeconds();

    // Atualiza a saudação e a imagem de fundo
    if (hr >= 5 && hr < 12) {
        frase.textContent = 'Bom dia';
        img.src = 'imagem/dia.jpg';
    } else if (hr >= 12 && hr < 18) {
        frase.textContent = 'Boa tarde';
        img.src = 'imagem/tarde.jpg';
    } else {
        frase.textContent = 'Boa noite';
        img.src = 'imagem/noite.jpg';
    }

    // Adiciona zero à esquerda quando necessário
    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;
    if (hr < 10) hr = "0" + hr;
    if (min < 10) min = "0" + min;
    if (seg < 10) seg = "0" + seg;

    // Atualiza os valores no DOM
    dia.textContent = day;
    mes.textContent = month;
    ano.textContent = year;
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
}