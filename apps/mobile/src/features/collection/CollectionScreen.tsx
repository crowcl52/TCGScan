import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function CollectionScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Collection</Text>
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

