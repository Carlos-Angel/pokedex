import AsyncStorage from '@react-native-async-storage/async-storage';
import { includes, pull } from 'lodash';
import { FAVORITE_STORAGE } from '../utils/constants';

export async function getPokemonsFavoriteApi() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return response ? JSON.parse(response) : [];
  } catch (error) {
    throw error;
  }
}

export async function addPokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonsFavoriteApi();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

export async function isPokemonFavoriteApi(id) {
  try {
    const pokemonsFavorites = await getPokemonsFavoriteApi();
    return includes(pokemonsFavorites, id);
  } catch (error) {
    throw error;
  }
}
