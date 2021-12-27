import React from 'react';
import { View } from 'react-native';
import PokemonsList from '../components/PokemonsList';
import NoLogged from '../components/NoLogged';
import { useAuth } from '../hooks/useAuth';
import { useFavorites } from '../hooks/useFavorites';

export default function Favorites() {
  const { auth } = useAuth();
  const { pokemons } = useFavorites(auth);

  return (
    <View>{!auth ? <NoLogged /> : <PokemonsList pokemons={pokemons} />}</View>
  );
}
