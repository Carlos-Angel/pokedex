import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFavorite } from '../../hooks/useFavorite';

export default function Favorite({ id }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorite(id);

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
