import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonApi, getPokemonDetails, getPokemonSearchApi } from "../Api/Api";
import { setLoading } from './uiSlice'

const initialState = {
    pokemons: [],
    pokemonSearched: [],
};

export const fetchPokemonsWithDeatails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true));
        const data = await getPokemonApi();
        const pokemonDetailed = await Promise.all(data.map(pokemon =>
            getPokemonDetails(pokemon)));
        dispatch(setPokemons(pokemonDetailed));
        dispatch(setLoading(false));
    },
);

export const fetchPokemonsWithSearched = createAsyncThunk(
    'data/fetchPokemonsWithSearched',
    async (_, { dispatch }) => {
        dispatch(setLoading(true));
        const data = await getPokemonSearchApi();
        const pokemonDetailed = await Promise.all(data.map(pokemon =>
            getPokemonDetails(pokemon)));
        dispatch(setPokemons(pokemonDetailed));
        dispatch(setLoading(false));
    },
);


// const response = await Instance.get(`pokemon/${searched.toLowerCase()}/`);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex(pokemon => {
                return pokemon.id === action.payload.pokemonId;
            });

            if (currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].
                    favorite;

                state.pokemons[currentPokemonIndex].favorite = !isFavorite;
            };
        }
    },
})

export const { setFavorite, setPokemons } = dataSlice.actions;

export default dataSlice.reducer;