import { View, Text } from 'react-native'
import React from 'react'
import { Stack, router } from 'expo-router'
import { FontAwesome5, Entypo } from '@expo/vector-icons';


export default function _layout() {
  return (
    // <Stack screenOptions={{headerShown:false}}>
    <Stack initialRouteName='profile'>
      <Stack.Screen name='index' options={{headerShown:false}}/>
      <Stack.Screen name='new' options={{headerShown:true, headerTitle: "Profile edit",
       headerRight: () => (
        <FontAwesome5 name= "save" size={24} color="#fff" onPress={() => router.push("profile")} style={{ marginRight: '10%' }}/>
      ),
          headerStyle: {
            backgroundColor: 'green',
            borderBottomWidth: 0,  
            elevation: 0,          
            shadowOpacity: 0,      
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',}} />
    </Stack>
  )
}