import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'

import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

const CurrentWeather = () => {

  const { wrapper, container, temp, feels, highLowWrapper, highLow, bodyWrapper, descritpion, message } = styles;
  
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like it is 5</Text>
        <RowText firstMessage="Hight: 8" secondMessage=" Low: 6" containerStyles={highLowWrapper} firstMessageStyles={highLow} secondMessageStyles={highLow} />
      </View>
      <RowText firstMessage="It's Sunny" secondMessage="It's t-shirt Time !" containerStyles={bodyWrapper} firstMessageStyles={descritpion} secondMessageStyles={message} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'pink',
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight
  },
  temp: {
    color: 'black',
    fontSize: 50
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
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
    color: 'black',
    fontSize: 48
  },
  message: {
    color: 'black',
    fontSize: 30
  }
})

export default CurrentWeather
