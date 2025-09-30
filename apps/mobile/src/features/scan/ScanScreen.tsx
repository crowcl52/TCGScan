import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function ScanScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Scan - Single</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

