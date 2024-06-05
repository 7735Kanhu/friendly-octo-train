import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import ServiceHistory from '../../../../components/ServiceHistory'

export default function Page() {
  return (
    <View style={{flex:1,backgroundColor:"green",padding:2,paddingHorizontal:15}}>
      <View style={styles.helpHistoryHead}>
        <TouchableOpacity>
        <Text style={[styles.headingText,styles.select]}>All History</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.headingText}>Received Help</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.headingText}>Getting Help</Text>
        </TouchableOpacity>
      </View>
      <ServiceHistory />
    </View>
  )
}
const styles = StyleSheet.create({
  helpHistoryHead:{
    flexDirection:"row",
    gap:10,
    justifyContent:"center"
  },
  headingText:{
    color:"#fff",
    fontSize:15,
    borderWidth:2,
    padding:5,
    paddingHorizontal:10,
    borderRadius:50,
    borderColor:"#fff"
  },
  select:{
    backgroundColor:"#c9c9c9b0",
  }
})
