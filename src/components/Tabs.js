import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import CurrentWeather from '../screens/CurrentWeather'
import UpComingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'


const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
    return (
        <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#fffffe',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#004643',
          },
          headerStyle: {
            backgroundColor: '#004643',
          },
   
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
            color: '#fffffe',
          },
        }}
      >
        <Tab.Screen
          name="Current"
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="droplet"
                size={25}
                color={focused ? '#fffffe' : 'gray'}
              />
            )
          }}
        >{()=> <CurrentWeather weatherData={weather.list[0]} />}</Tab.Screen>
        <Tab.Screen name="Upcoming" options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="clock"
                size={25}
                color={focused ? '#fffffe' : 'gray'}
              />
            )
          }}>{() => <UpComingWeather weatherData={weather.list} />} </Tab.Screen>

        <Tab.Screen name="City" component={City} options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="home"
                size={25}
                color={focused ? '#fffffe' : 'gray'}
              />
            )
          }}/>
      </Tab.Navigator>
    );
};

export default Tabs;