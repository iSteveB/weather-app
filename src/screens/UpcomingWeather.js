import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  StatusBar,
  ImageBackground
} from 'react-native'

import ListItem from '../components/ListItem';

const DATA = [
  {
    dt_txt: ' 2024-03-14 10:00:00',
    main: {
      temp_max: 12.7,
      temp_min: 8.3
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  },
  {
    dt_txt: ' 2024-03-16 09:00:00',
    main: {
      temp_max: 16.5,
      temp_min: 9.2
    },
    weather: [
      {
        main: 'Cloudy'
      }
    ]
  },
  {
    dt_txt: ' 2024-03-17 12:10:00',
    main: {
      temp_max: 13.5,
      temp_min: 8.8
    },
    weather: [
      {
        main: 'Sunny'
      }
    ]
  }
]

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      condition={item.weather[0].main}
    />
  )

  const { wrapper, container, image } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <ImageBackground
          source={require('../../assets/upcoming-weather.jpg')}
          style={image}
        >
          <Text>UpcomingWeather</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_txt}
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'peachpuff'     
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
})
export default UpcomingWeather
