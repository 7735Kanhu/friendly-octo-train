import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native'
import React from 'react'

export default function Avtar() {
  return (
    <View>
      <TouchableOpacity>
         <Image
     source={{
       uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
     }}
   />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  image:{
    borderRadius:75,
    width:150,
    height:150,
    borderColor:'gray',
    borderWidth:5
  }
})
