import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pokedex, Account, Favorites } from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Account'
        component={Account}
        options={{
          tabBarLabel: 'Mi cuenta',
          tabBarIcon: ({ size, color }) => (
            <Icon name='user' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Pokedex'
        component={Pokedex}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ size, color }) => (
            <Icon name='heart' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}
