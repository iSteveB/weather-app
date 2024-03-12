import React from 'react';
import { View, StyleSheet } from 'react-native';

import UpComingWeather from './src/screens/UpcomingWeather';
import City from './src/screens/City';

const App = () => {
  return (
    <View style={styles.container}>
      <UpComingWeather />
      <City />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
