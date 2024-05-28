
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={require('../assets/images/logoicon.png')} style={styles.logo} resizeMode="contain"/>
      </View>
      <View style={styles.buttomBox}>
        <View >
        <Image source={require('../assets/images/community.png')} style={styles.headLogo} resizeMode="contain"/>
        </View>
        <View style={styles.middle_content}>

      <Text style={styles.header}>Community Helper</Text>
      <Text style={styles.sub_header}>Your go-to app for finding assistance when you need it most. Whether you're looking for health services, financial advice, or simply someone to talk to, Community Helper is here to connect you with the resources you need.</Text>
        </View>
      <TouchableOpacity style={styles.startBtn}>
      <Link href={'/help'}>
        <Text style={styles.btnText}>Get Started</Text>
        </Link>
      </TouchableOpacity>
      </View>
    {/* <Text style={{fontSize:30}}>Welcome To Our App</Text>
    <Link href={'/about'}>
    <Button title='Goto About us Page'/>
    </Link>
    <Link href={'/blog'} asChild>
        <Button title='Goto Blog Page'/>
    </Link>
    <Link href={'/contact'} asChild>
        <Button title='Goto Contact Page'/>
    </Link>
    <Link href={'/help'} asChild>
        <Button title='Goto Tabs'/>
    </Link> */}
  </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'green',
    alignItems:'center',
  },
  logo:{
    width:150,
    marginTop:-20
  },
  headLogo:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:-90,
    width:150,
    height:150,
    borderRadius:100,
    backgroundColor:'#000'
  },
  middle_content:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:20,
    marginHorizontal:'auto'
  },
  header:{
    fontSize:25,
    fontWeight:'bold'
  },
  sub_header:{
    fontSize:18,
    textAlign:'justify',
    marginTop:50,
    marginBottom:40,
    padding:6
  },
  buttomBox:{
    flex:1,
    width:'100%',
    backgroundColor:'#fff',
    borderTopLeftRadius:170,
    borderTopRightRadius:170,
    marginTop:50,
    padding:10,
    textAlign:'center',
    alignItems:'center'

  },
  startBtn:{
    backgroundColor:'green',
    padding:10,
    borderRadius:5
  },
  btnText:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
  }
})
