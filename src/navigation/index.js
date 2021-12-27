import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountNavigation from './AccountNavigation';
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName='Pokedex'>
      <Tab.Screen
        name='Account'
        component={AccountNavigation}
        options={{
          tabBarLabel: 'Mi cuenta',
          tabBarIcon: ({ size, color }) => (
            <Icon name='user' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Pokedex'
        component={PokedexNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={FavoriteNavigation}
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
      style={{ width: 35, height: 35, top: 5 }}
    />
  );
}
