import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { getPokemonDetailsByIdApi } from '../api/pokemon';
import { getPokemonsFavoriteApi } from '../api/favorite';

export const useFavorites = (auth) => {
  const [pokemons, setPokemons] = useState([]);

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const results = await getPokemonsFavoriteApi();
          const pokemonsDetails = await Promise.all(
            results.map(async (pokemonId) => {
              const { id, name, types, order, sprites } =
                await getPokemonDetailsByIdApi(pokemonId);
              return {
                id,
                name,
                type: types[0].type.name,
                order,
                image: sprites.other['official-artwork'].front_default,
              };
            }),
          );

          setPokemons([...pokemonsDetails]);
        })();
      }
    }, [auth]),
  );

  return { pokemons };
};
