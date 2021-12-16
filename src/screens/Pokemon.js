import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Pokemon({ route, navigation }) {
  console.log(route);
  return (
    <SafeAreaView>
      <Text>Pokemon</Text>
    </SafeAreaView>
  );
}
