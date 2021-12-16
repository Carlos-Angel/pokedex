import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonDetailsByIdApi } from '../api/pokemon';

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
    <SafeAreaView>
      <Text>Pokemon</Text>
    </SafeAreaView>
  );
}
