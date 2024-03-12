import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ListItem = ({ dt_txt, min, max, condition }) => {

  const { item, date, temp } = styles;
  return (
    <View style={item}>
      <Feather name="sun" size={50} color="black" />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    padding: 20,
    backgroundColor: 'peachpuff'
  },
  date: {
    color: 'black',
    fontSize: 15
  },
  temp: {
    color: 'black',
    fontSize: 20
  }
})

export default ListItem
