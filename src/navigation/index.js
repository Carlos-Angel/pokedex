import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pokedex, Account, Favorites } from '../screens';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Account' component={Account} />
      <Tab.Screen name='Pokedex' component={Pokedex} />
      <Tab.Screen name='Favorites' component={Favorites} />
    </Tab.Navigator>
  );
}
