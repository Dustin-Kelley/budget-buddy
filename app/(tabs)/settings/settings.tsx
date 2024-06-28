import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const settings = () => {
  return (
    <View>
      <Text>settings</Text>
      <Link href="/settings/coolSettings">I will take you to cool settings</Link>
    </View>
  )
}

export default settings