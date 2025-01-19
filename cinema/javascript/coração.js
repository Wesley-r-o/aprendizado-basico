const apiKey = '68b67acc'
const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()
    const pesquisa = event.target.pesquisa.value

    if (pesquisa.trim() === "") {
        alert('Preencha o campo!')
        return
    }

    fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => carregaLista(data))
        .catch(error => console.error('Erro ao buscar filmes:', error))
}

const carregaLista = (data) => {
    const lista = document.querySelector("div.lista")
    lista.innerHTML = ""

    if (!data.Search) {
        alert('Nenhum filme encontrado')
        return
    }

    data.Search.forEach(filme => {
        const item = document.createElement("div")
        item.classList.add("item")

        item.innerHTML = `
            <img src="${filme.Poster !== "N/A" ? filme.Poster : 'https://via.placeholder.com/200x300?text=Sem+Imagem'}" alt="${filme.Title}">
            <h3>${filme.Title}</h3>
        `
        lista.appendChild(item)
    })
}