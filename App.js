import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles1.container}>110719001</Text>
      <Text style={styles2.container}>數位二</Text>
      <Text style={styles3.container}>許秉洋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const styles1 = StyleSheet.create({
  container: {
    flex: 1/15,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const styles2 = StyleSheet.create({
  container: {
    flex: 1/15,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:20,
  },
});
const styles3 = StyleSheet.create({
  container: {
    flex: 1/15,
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:30,
  },
});
