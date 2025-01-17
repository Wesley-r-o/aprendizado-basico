// Seleção dos elementos do DOM
const lampada = document.querySelector('#lampada');
const btLigar = document.querySelector('#btligar');
const btDesligar = document.querySelector('#btdesligar');

// Adiciona eventos aos botões e à lâmpada
btLigar.addEventListener('click', ligar);
btDesligar.addEventListener('click', desligar);
lampada.addEventListener('dblclick', quebrar);

// Função para ligar a lâmpada
function ligar() {
    lampada.src = 'imagem/acesa.gif';
}

// Função para desligar a lâmpada
function desligar() {
    lampada.src = 'imagem/apagada.gif';
}

// Função para quebrar a lâmpada ao dar duplo clique
function quebrar() {
    lampada.src = 'imagem/quebrada.jpg';
}
