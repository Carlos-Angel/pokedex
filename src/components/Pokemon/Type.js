import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { capitalize } from '../../utils/capitalize';
import { getColorByPokemonType } from '../../utils/getColorByPokemonType';

export default function Type({ types }) {
  return (
    types && (
      <View style={styles.content}>
        {types.map(({ type }, index) => (
          <View
            key={index}
            style={{
              ...styles.pill,
              backgroundColor: getColorByPokemonType(type.name),
            }}
          >
            <Text>{capitalize(type.name)}</Text>
          </View>
        ))}
      </View>
    )
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
