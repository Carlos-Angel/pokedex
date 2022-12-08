import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { useFocusEffect } from '@react-navigation/native';
import { size } from 'lodash';
import { getPokemonsFavoriteApi } from '../../api/favorite';

export default function UserData() {
  const [totalFavorites, setTotalFavorites] = useState(0);
  const { auth, logout } = useAuth();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonsFavoriteApi();
          setTotalFavorites(size(response));
        } catch (error) {
          setTotalFavorites(0);
        }
      })();
    }, []),
  );

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.title}>{auth.name}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title='Nombre:' text={auth.name} />
        <ItemMenu title='Usuario:' text={auth.username} />
        <ItemMenu title='Correo electrónico:' text={auth.email} />
        <ItemMenu title='Favoritos:' text={`${totalFavorites} Pokemons`} />
      </View>
      <Button title='cerrar sesión' onPress={logout} style={styles.btnLogout} />
    </View>
  );
}

function ItemMenu({ title, text }) {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#CFCFCF',
  },
  itemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120,
  },
  btnLogout: {
    paddingTop: 20,
  },
});
