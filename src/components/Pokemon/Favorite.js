import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
  removePokemonFavoriteApi,
} from '../../api/favorite';

export default function Favorite({ id }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [reloadCheck, setReloadCheck] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const isFavorite = await isPokemonFavoriteApi(id);
        setIsFavorite(isFavorite);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id, reloadCheck]);

  const onReloadCheckFavorite = () =>
    setReloadCheck((reloadCheck) => !reloadCheck);

  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
    onReloadCheckFavorite();
  };

  const removeFavorite = async () => {
    await removePokemonFavoriteApi(id);
    onReloadCheckFavorite();
  };

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
