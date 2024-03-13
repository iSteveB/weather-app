import React from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ImageBackground
} from 'react-native'

import IconText from '../components/IconText'

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
    rowLayout
  } = styles
  return (
    <SafeAreaView style={container}>
        <ImageBackground
          source={require('../../assets/City.jpg')}
          style={image}
        >
          <Text style={[cityName, textWrapper]}>London</Text>
          <Text style={[country, textWrapper]}>UK</Text>
          <View style={[populationWrapper, rowLayout]}>
            <IconText
              iconName="user"
              iconColor="white"
              bodyText="80 000"
              bodyTextStyles={populationText}
            />
          </View>
          <View style={[riseSetWrapper, rowLayout]}>
            <IconText
              iconName="sunrise"
              iconColor="white"
              bodyText="6:00:00am"
              bodyTextStyles={riseSetText}
            />
            <IconText
              iconName="sunset"
              iconColor="white"
              bodyText="21:34:00pm"
              bodyTextStyles={riseSetText}
            />
          </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    color: 'white',
    fontSize: 25,
    marginLeft: 7.5,
    flexDirection: 'row'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 7.5
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
export default City
