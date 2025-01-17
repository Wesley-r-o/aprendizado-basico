// (const) cria uma variável cujo o valor é fixo
// (document.querySelector) permite que você acesse elementos no DOM
const btgoku = document.querySelector('#btgoku') // Seleciona os botões e a imagem
const btichigo = document.querySelector('#btichigo')
const btluffy = document.querySelector('#btluffy')
const btnaruto = document.querySelector('#btnaruto')
const imgDisplay = document.querySelector('#x')

// Adiciona os eventos de clique aos botões
// (addEventListener) permite que responda a eventos associados a um elemento por meio de uma função
btgoku.addEventListener('click', () => {
    imgDisplay.src = 'imagem/goku.jpg'
    imgDisplay.alt = 'Imagem de Goku'
});

btichigo.addEventListener('click', () => {
    imgDisplay.src = 'imagem/ichigo.jpg'
    imgDisplay.alt = 'Imagem de Ichigo'
});

btluffy.addEventListener('click', () => {
    imgDisplay.src = 'imagem/luffy.jpg'
    imgDisplay.alt = 'Imagem de Luffy'
});

btnaruto.addEventListener('click', () => {
    imgDisplay.src = 'imagem/naruto.webp'
    imgDisplay.alt = 'Imagem de Naruto'
});