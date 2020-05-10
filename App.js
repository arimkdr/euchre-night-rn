import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import {Buffer} from 'buffer';
window.localStorage = AsyncStorage;
global.Buffer = Buffer;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Does this still work?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
