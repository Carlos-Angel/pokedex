import AsyncStorage from '@react-native-async-storage/async-storage';
import { POKE_USER } from '../utils/constants';

export async function addPokeUser(user) {
  try {
    await AsyncStorage.setItem(POKE_USER, JSON.stringify(user));
  } catch (error) {
    throw error;
  }
}

export async function getPokeUser() {
  try {
    const response = await AsyncStorage.getItem(POKE_USER);
    return response ? JSON.parse(response) : undefined;
  } catch (error) {
    throw error;
  }
}

export async function removePokeUser() {
  try {
    await AsyncStorage.removeItem(POKE_USER);
  } catch (error) {
    throw error;
  }
}
