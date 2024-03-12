import React from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ImageBackground
} from 'react-native'

import { Feather } from '@expo/vector-icons'

const City = () => {
  const {
    wrapper,
    container,
    image,
    cityName,
    country,
    textWrapper,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <ImageBackground
          source={require('../../assets/City.jpg')}
          style={image}
        >
          <Text style={[cityName, textWrapper]}>London</Text>
          <Text style={[country, textWrapper]}>UK</Text>
          <View style={populationWrapper}>
            <Feather name="user" size={50} color="white" />
            <Text style={populationText}>80 000</Text>
          </View>
          <View style={riseSetWrapper}>
            <Feather name="sunrise" size={50} color="white" />
            <Text style={riseSetText}>6:00:00am</Text>
            <Feather name="sunset" size={50} color="white" />
            <Text style={riseSetText}>21:34:00pm</Text>
          </View>
      
   
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'navy'
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  image: {
    flex: 1
  },
  cityName: {
    fontSize: 50
  },
  country: {
    fontSize: 30
  },
  textWrapper: {
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  populationWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  populationText: {
    color: 'white',
    fontSize: 25,
    marginLeft: 7.5,
    fontWeight: 'bold'
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 7.5,
    fontWeight: 'bold',
  }
})
export default City
