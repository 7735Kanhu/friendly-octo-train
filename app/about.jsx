import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function About() {
    const router = useRouter();
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'green'}}>
      <Text>About us</Text>
      <Button onPress={()=>router.back()} title='Go Back'/>
    </View>
  )
}