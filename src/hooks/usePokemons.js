import { useState, useEffect } from 'react';
import { getPokemonDetailsByUrlApi, getPokemonsApi } from '../api/pokemon';

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);

  useEffect(() => {
    (async () => await loadPokemons())();
  }, []);

  const loadPokemons = async () => {
    try {
      const { results, next } = await getPokemonsApi(nextPageUrl);
      setNextPageUrl(next);
      const pokemonsDetails = await Promise.all(
        results.map(async ({ url }) => {
          const { id, name, types, order, sprites } =
            await getPokemonDetailsByUrlApi(url);
          return {
            id,
            name,
            type: types[0].type.name,
            order,
            image: sprites.other['official-artwork'].front_default,
          };
        }),
      );

      setPokemons((pokemons) => [...pokemons, ...pokemonsDetails]);
    } catch (error) {
      setPokemons((pokemons) => [...pokemons]);
    }
  };

  return {
    pokemons,
    isNext: nextPageUrl ? true : false,
    loadPokemons,
  };
};
