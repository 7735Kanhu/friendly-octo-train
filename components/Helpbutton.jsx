import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const Helpbutton = ({press}) => {
  return (
    <TouchableOpacity style={styles.help} onPress={press}>
        <Image source={require('../assets/images/helpbutton.png')} style={{width: 90, height: 90, borderRadius: 35 }}/>
    </TouchableOpacity>
  )
}

export default Helpbutton
const styles = StyleSheet.create({
  help:{
    position:'absolute',
    top:-100,
    left:135,
    backgroundColor:'#fff',
    padding:4,
    borderRadius:50

  }
})
