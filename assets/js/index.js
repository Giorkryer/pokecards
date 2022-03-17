/*
Quando clicar no pokemon da listagem temos que esconder o cartao do pokemon aberto e mostrar o cartao clicado.

Preciso trabalhar com dois elementos
1- listagem
2- cartao pokemon

criar duas variáveis no JS para trabalhar com os elementos da tela

Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokemons

- remover a classe aberto só do cartao que está aberto
- ao clicar em um pokemon da listagem pegamos o id do pokemon para saber qual cartao mostrar
- remover a classe active que marca o pokemon selecionado
- adicionar a classe active no item da lista selecionado
*/

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