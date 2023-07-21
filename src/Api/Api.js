import axios from "axios";

export const getPokemonApi = () => {
  return axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
};

export const getPokemonDetails = (pokemon) => {
  return axios.get(pokemon.url)
  .then(res => res.data)
  .catch((err) => console.log(err));
}
export const getPokemonSearchApi = () => {
  return axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=1010')
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
};