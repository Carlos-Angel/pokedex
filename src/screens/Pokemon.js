import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getPokemonDetailsByIdApi } from '../api/pokemon';
import Header from '../components/Pokemon/Header';
import Stats from '../components/Pokemon/Stats';
import Type from '../components/Pokemon/Type';

export default function Pokemon({ route: { params }, navigation }) {
  const [pokemon, setPokemon] = useState(null);
  const { id } = params;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null, //TODO: add favorites
      headerLeft: () => (
        <Icon
          name='arrow-left'
          color='#fff'
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

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

        <Type types={pokemon.types} />
        <Stats stats={pokemon.stats} />
      </ScrollView>
    )
  );
}
