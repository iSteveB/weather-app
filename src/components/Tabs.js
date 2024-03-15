import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import CurrentWeather from '../screens/CurrentWeather'
import UpComingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'


const Tab = createBottomTabNavigator()

const Tabs = () => {
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
          component={CurrentWeather}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="droplet"
                size={25}
                color={focused ? '#fffffe' : 'gray'}
              />
            )
          }}
        />
        <Tab.Screen name="Upcoming" component={UpComingWeather} options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="clock"
                size={25}
                color={focused ? '#fffffe' : 'gray'}
              />
            )
          }}/>
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