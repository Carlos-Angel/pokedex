import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { capitalize } from '../../utils/capitalize';

export default function Stats({ stats }) {
  const barStyles = (num) => ({
    backgroundColor: num > 49 ? '#00ac17' : '#ff3e3e',
    width: `${num}%`,
  });

  return (
    stats && (
      <View style={styles.content}>
        <Text style={styles.title}>Stats</Text>
        {stats.map(({ stat, base_stat }, index) => (
          <View key={index} style={styles.stat}>
            <View style={styles.statTitle}>
              <Text style={styles.statName}>{capitalize(stat.name)}</Text>
            </View>
            <View style={styles.statInfo}>
              <Text style={styles.statNumber}>{base_stat}</Text>
              <View style={styles.bgBar}>
                <View style={[styles.bar, barStyles(base_stat)]} />
              </View>
            </View>
          </View>
        ))}
      </View>
    )
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 5,
  },
  stat: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  statTitle: {
    width: '30%',
  },
  statName: {
    fontSize: 12,
    color: '#6b6b6b',
  },
  statInfo: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statNumber: {
    width: '12%',
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: '#dedede',
    width: '88%',
    height: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bar: {
    height: 5,
    borderRadius: 20,
  },
});
