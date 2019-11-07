import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Playquiz from './PlayQuizz';

export default function App() {
  return (
    <Playquiz />
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
