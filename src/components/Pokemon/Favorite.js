import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
} from '../../api/favorite';

export default function Favorite({ id }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const isFavorite = await isPokemonFavoriteApi(id);
        setIsFavorite(isFavorite);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  const addFavorite = async () => await addPokemonFavoriteApi(id);

  const removeFavorite = () => console.log('remove favorite');

  return (
    <Icon
      name='heart'
      color='#fff'
      size={20}
      solid={isFavorite}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
