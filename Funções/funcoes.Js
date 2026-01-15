let pokemons = ["charmander", "onix", "squirtle"];

console.log('Tier List de Pokémons:');

function ListarPokemons() {
    for (let i=0;i<pokemons.length; i++) {
        console.log(`${i+1}. ${pokemons[i]}`);
    }
}

function CapturarPokemon(pokemon) {
    if (Jatenhoesse(pokemon, pokemons)){
        return console.log(`Você já possui o pokémon ${pokemon} em sua coleção!`);
    }
    else {
        pokemons.push(pokemon);
       console.log(`Parabéns! Você capturou o pokémon ${pokemon}!`);

    }
}

function Jatenhoesse() {
    for (let i=0;i<pokemons.length; i++) {
        if (pokemons[i] === pokemon) {
            return true;
        }
        else {
            return false;
        }
    }
}

console.log(ListarPokemons());
console.log(CapturarPokemon("pikachu")) ;
console.log(CapturarPokemon("onix"))    ;
console.log(ListarPokemons())   ;