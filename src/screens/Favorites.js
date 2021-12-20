import React, { useState, useCallback } from 'react';
import { Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import { getPokemonDetailsByIdApi } from '../api/pokemon';
import { getPokemonsFavoriteApi } from '../api/favorite';
import PokemonsList from '../components/PokemonsList';

export default function Favorites() {
  const { auth } = useAuth();
  const [pokemons, setPokemons] = useState([]);

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const results = await getPokemonsFavoriteApi();
          const pokemonsDetails = [];

          for await (const pokemonId of results) {
            const { id, name, types, order, sprites } =
              await getPokemonDetailsByIdApi(pokemonId);
            const item = {
              id,
              name,
              type: types[0].type.name,
              order,
              image: sprites.other['official-artwork'].front_default,
            };
            pokemonsDetails.push(item);
          }

          setPokemons([...pokemonsDetails]);
        })();
      }
    }, [auth]),
  );
  return (
    <View>
      {!auth ? (
        <Text>user no logged</Text>
      ) : (
        <PokemonsList pokemons={pokemons} />
      )}
    </View>
  );
}
