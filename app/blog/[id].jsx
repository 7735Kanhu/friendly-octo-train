import { View, Text, Button } from 'react-native'
import React from 'react'
import { useLocalSearchParams,router, Stack } from 'expo-router'

export default function Page() {
    const {id,author}= useLocalSearchParams();
  return (
    <>
    <Stack.Screen options={{headerTitle:`Article ${id}`}} />
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text> Blog Post Details {id}</Text>
      <Text> Written By {author}</Text>
      <Button onPress={()=>router.back()} title='Go Back'/>
    </View>
    </>
  )
}