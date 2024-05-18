import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function Page() {
    const router = useRouter();
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text> Blog Page</Text>
      <Button onPress={()=>router.push('/blog/1')} title='Go To Blog 1'/>
      <Button onPress={()=>router.push('/blog/2')} title='Go To Blog 2'/>
      <Button onPress={()=>router.push('/blog/3?author=jhon')} title='Go To Blog 3'/>
      <Button onPress={()=>router.back()} title='Go Back'/>
    </View>
  )
}