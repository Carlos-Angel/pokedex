import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Favorites } from '../screens';
import { Pokemon } from '../screens';

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Favorite'
        component={Favorites}
        options={{ title: 'Favoritos' }}
      />
      <Stack.Screen
        name='Pokemon'
        component={Pokemon}
        options={{ title: '', headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
