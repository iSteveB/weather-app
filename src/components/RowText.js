import React from 'react'
import { Text, View } from 'react-native'

const RowText = ({ firstMessage, secondMessage, containerStyles, secondMessageStyles, firstMessageStyles }) => {
  return (
    <View style={containerStyles}>
      <Text style={firstMessageStyles}>{firstMessage}</Text>
      <Text style={secondMessageStyles}>{secondMessage}</Text>
    </View>
  )
}

export default RowText
