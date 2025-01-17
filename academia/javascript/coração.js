// Seleção dos elementos do DOM
const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const calculateButton = document.querySelector('#calculate');
const infos = document.querySelector('#infos');
const valueElement = document.querySelector('#value');
const resultDescription = document.querySelector('#resultado');

// Adiciona evento ao botão de calcular
calculateButton.addEventListener('click', () => {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (weight && height) {
        const bmi = (weight / (height * height)).toFixed(2);

        valueElement.textContent = bmi;

        if (bmi < 18.5) {
            resultDescription.textContent = 'Você está abaixo do peso.';
        } else if (bmi < 24.9) {
            resultDescription.textContent = 'Você está com peso normal.';
        } else if (bmi < 29.9) {
            resultDescription.textContent = 'Você está com sobrepeso.';
        } else {
            resultDescription.textContent = 'Você está com obesidade.';
        }

        infos.classList.remove('hidden');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
