import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import OTPTextView from 'react-native-otp-textinput';
import { Link } from 'expo-router';
// import Clipboard from '@react-native-clipboard/clipboard';

export default function verifyotp() {
    // const [otpInput, setOtpInput] = useState('');
  return (
    <View style={styles.container}>
      <View>
      <Image
          source={require("../assets/images/otp4.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.top_text}>
            <Text style={{fontSize:35,fontWeight:'bold',color:'#fff'}}>OTP</Text>
            <Text style={{color:'#fff', fontSize:15}}>Please enter the OTP send to your mobile number</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <OTPTextView inputCount={5} containerStyle={styles.textInputContainer} keyboardType='numeric'/>
        <Text style={{marginTop:10,}}>Don't received an OTP ?</Text>
        <TouchableOpacity style={{marginTop:10}}>
            <Text style={{fontSize:15,fontWeight:'bold'}}>Resend an OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.otpbuttom}>
        <Link href={'/help'}>
            <Text style={{fontSize:20,color:'#fff'}}>Verify OTP</Text>
            </Link>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'green'
  },
  logo:{
    width:250,
    height:250,
    margin:'auto',
    color:'#fff',
    // marginTop:-0,

  },
  top_text:{
    marginTop:-10,
    display:'flex',
    alignItems:'center',
  },
  bottom:{
    flex:1,
    backgroundColor:'#fff',
    borderTopLeftRadius:150,
    marginTop:40,
    display:'flex',
    // justifyContent:"center",
    alignItems:'center',
    padding:20,
    // paddingHorizontal:300,
  },
  textInputContainer: {
    marginTop: 60,
    // marginLeft:-60,
    width:300,
  },
  otpbuttom:{
    marginTop:70,
    backgroundColor:'green',
    paddingVertical:10,
    paddingHorizontal:50,
    borderRadius:5

  }
})
