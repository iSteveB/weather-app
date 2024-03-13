import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import UpComingWeather from './src/screens/UpcomingWeather'
import City from './src/screens/City'
import CurrentWeather from './src/screens/CurrentWeather'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen
          name="Current"
          component={CurrentWeather}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="droplet"
                size={25}
                color={focused ? 'tomato' : 'gray'}
              />
            )
          }}
        />
        <Tab.Screen name="Upcoming" component={UpComingWeather} options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="clock"
                size={25}
                color={focused ? 'tomato' : 'gray'}
              />
            )
          }}/>
        <Tab.Screen name="City" component={City} options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="home"
                size={25}
                color={focused ? 'tomato' : 'gray'}
              />
            )
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
