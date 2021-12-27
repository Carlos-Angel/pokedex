import { useState, useEffect } from 'react';
import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
  removePokemonFavoriteApi,
} from '../api/favorite';

export const useFavorite = (id) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [reloadCheck, setReloadCheck] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const isFavorite = await isPokemonFavoriteApi(id);
        setIsFavorite(isFavorite);
      } catch (error) {
        setIsFavorite(false);
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

  return { isFavorite, addFavorite, removeFavorite };
};
