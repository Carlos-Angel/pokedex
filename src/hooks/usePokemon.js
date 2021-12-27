import { useState, useEffect } from 'react';
import { getPokemonDetailsByIdApi } from '../api/pokemon';

export const usePokemon = (id) => {
  const [pokemon, setPokemon] = useState(null);

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

  return { pokemon };
};
