import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { isEmpty } from 'lodash';
import PokemonsList from '../components/PokemonsList';
import { usePokemons } from '../hooks/usePokemons';

export default function Pokedex() {
  const { pokemons, isNext, loadPokemons } = usePokemons();

  return (
    <SafeAreaView>
      {!isEmpty(pokemons) && (
        <PokemonsList
          pokemons={pokemons}
          loadPokemons={loadPokemons}
          isNext={isNext}
        />
      )}
    </SafeAreaView>
  );
}
