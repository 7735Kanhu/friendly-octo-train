import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function Page() {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>History Page</Text>
      <Button onPress={()=>router.back()} title='Go Back'/>
    </View>
  )
}