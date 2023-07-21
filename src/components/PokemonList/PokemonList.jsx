import React from 'react';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import './pokemonList.css'

const PokemonList = ({ pokemons }) => {

    return (
        <div className='PokemonList'>
            {pokemons.map((pokemon) => (
                <PokemonCard
                    name={pokemon.name}
                    key={pokemon.id}
                    image={pokemon.sprites.other["official-artwork"].front_default}
                    types={pokemon.types}
                    id={pokemon.id}
                    favorite={pokemon.favorite}
                />
            ))}
        </div>
    );
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
}

export { PokemonList };