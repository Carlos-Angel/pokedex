import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { getPokemonDetailsByIdApi } from '../api/pokemon';
import Header from '../components/Pokemon/Header';

export default function Pokemon({ route: { params }, navigation }) {
  const [pokemon, setPokemon] = useState(null);
  const { id } = params;
  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const detailsPokemon = await getPokemonDetailsByIdApi(id);
          setPokemon(detailsPokemon);
        } catch (error) {
          navigation.goBack();
        }
      })();
    }
  }, [id]);

  return (
    pokemon && (
      <ScrollView>
        <Header
          name={pokemon.name}
          order={pokemon.order}
          image={pokemon.sprites.other['official-artwork'].front_default}
          type={pokemon.types[0].type.name}
        />
      </ScrollView>
    )
  );
}
