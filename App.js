import {View, Text, StyleSheet, Dimensions, Platform} from 'react-native';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <View style={[styles.root, {height: height, width: width}]}>
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
