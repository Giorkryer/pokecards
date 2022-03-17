
const listSelectedPokemons = document.querySelectorAll('.pokemon')

const pokemonsCard = document.querySelectorAll('.card-pokemon')

listSelectedPokemons.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
         
        const idPokemonSelected = pokemon.attributes.id.value
        
        const cardPokemonParaAbrir = document.getElementById('card-' + idPokemonSelected)
        cardPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.active')
        pokemonAtivoNaListagem.classList.remove('active')

        const pokemonSelectedList = document.getElementById(idPokemonSelected)
        pokemonSelectedList.classList.add('active')

    })
})
