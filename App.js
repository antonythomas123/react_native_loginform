import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  return (
    <View style={styles.root}>
      <LoginScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;