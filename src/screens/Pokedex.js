import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonDetailsByUrlApi, getPokemonsApi } from '../api/pokemon';
import PokemonsList from '../components/PokemonsList';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => await loadPokemons())();
  }, []);

  const loadPokemons = async () => {
    try {
      const { results } = await getPokemonsApi();
      const pokemonsDetails = [];

      for await (const pokemon of results) {
        const { id, name, types, order, sprites } =
          await getPokemonDetailsByUrlApi(pokemon.url);
        const item = {
          id,
          name,
          type: types[0].type.name,
          order,
          image: sprites.other['official-artwork'].front_default,
        };
        pokemonsDetails.push(item);
      }

      setPokemons((pokemons) => [...pokemons, ...pokemonsDetails]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      {pokemons.length > 0 && <PokemonsList pokemons={pokemons} />}
    </SafeAreaView>
  );
}
