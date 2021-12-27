import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/Pokemon/Header';
import Stats from '../components/Pokemon/Stats';
import Type from '../components/Pokemon/Type';
import Favorite from '../components/Pokemon/Favorite';
import { useAuth } from '../hooks/useAuth';
import { usePokemon } from '../hooks/usePokemon';

export default function Pokemon({ route: { params }, navigation }) {
  const { auth } = useAuth();
  const { id } = params;
  const { pokemon } = usePokemon(id);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={pokemon?.id} />,
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
  }, [navigation, params, pokemon]);

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
