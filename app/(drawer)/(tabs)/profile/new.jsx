import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler'
import Avtar from '../../../../components/profile/Avtar'

export default function Page() {
  return (
  <ScrollView className='flex-1 bg-[green] w-screen h-screen' style={{flex:1,backgroundColor:'green'}}>
    <Avtar/>
  </ScrollView>
  )
}