import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'

import RowText from '../components/RowText'

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    descritpion,
    message
  } = styles

  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="#f9bc60" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like it is 5</Text>
        <RowText
          firstMessage="Hight: 8"
          secondMessage=" Low: 6"
          containerStyles={highLowWrapper}
          firstMessageStyles={highLow}
          secondMessageStyles={highLow}
        />
      </View>
      <RowText
        firstMessage="It's Sunny"
        secondMessage={weatherType['Thunderstorm'].message}
        containerStyles={bodyWrapper}
        firstMessageStyles={descritpion}
        secondMessageStyles={message}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#abd1c6',
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight
  },
  temp: {
    color: '#001e1d',
    fontSize: 50
  },
  feels: {
    color: '#001e1d',
    fontSize: 30
  },
  highLow: {
    color: '#001e1d',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 40
  },
  descritpion: {
    color: '#001e1d',
    fontSize: 48
  },
  message: {
    color: '#001e1d',
    fontSize: 30
  }
});

export default CurrentWeather;
