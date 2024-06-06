import { View, Text, StyleSheet, Image, TouchableOpacity, Alert,ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import OTPTextView from 'react-native-otp-textinput';
import { Link } from 'expo-router';
// import Clipboard from '@react-native-clipboard/clipboard';
import { verifyOtp } from './../appwriteConfig.js';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSelector } from 'react-redux';
// import { phoneNumbers } from '../store/authSlice';
import firebase from '../firebase';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import apiUrl from '../apiUrl.jsx';
import { PacmanIndicator } from 'react-native-indicators';


export default function verifyotp() {
  // const verificationId = useSelector(setVerificationId);
  const phoneNumber = useSelector((state)=>state.auth.phoneNumber);
    const [phone,setPhone] = useState(null)
    const [otpInput, setOtpInput] = useState('');
    const { userId } = useLocalSearchParams();
    const [isLoding,setisLoading] = useState(false)

    const router = useRouter();

    const handleOtpVerification = async () => {
      setisLoading(true)
      try {
      // const credential = firebase.auth.PhoneAuthProvider.credential(verificationId.payload.auth.verificationId, otpInput);
      // const userCredential = await firebase.auth().signInWithCredential(credential);
      // setMessage('Phone authentication successful');
      // const user = userCredential.user;
      // const token = await user.getIdToken();
      console.log(phoneNumber,otpInput,apiUrl);
      const responce = await axios.post(`http://98.70.76.242:8000/api/verify_otp/`,{phone:Number(phoneNumber),otp:Number(otpInput)});
      console.log(responce.data);
      await SecureStore.setItemAsync('userToken',  JSON.stringify(responce.data.token));
      // setPhone(user.phoneNumber)
      Alert.alert('Phone authentication successful')
      router.push('/help')
    } catch (err) {
      // setMessage(`Error: ${err.message}`);
      console.log(err.message);
    }finally{
      setisLoading(false)
    }
  };
  const handleOTPChange = (enteredOTP) => {
    // Update the state with the entered OTP
    setOtpInput(enteredOTP);
};
  return (
    <View style={styles.container}>
      {isLoding ? (<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <PacmanIndicator color='green' size={100}/>
        </View>):(<>
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
        <OTPTextView inputCount={6} containerStyle={styles.textInputContainer} keyboardType='numeric'  handleTextChange={handleOTPChange}/>
        <Text style={{marginTop:10,}}>Don't received an OTP ?</Text>
        <TouchableOpacity style={{marginTop:10}}>
            <Text style={{fontSize:15,fontWeight:'bold'}}>Resend an OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.otpbuttom} onPress={handleOtpVerification}>
        {/* <Link href={'/help'}> */}
            <Text style={{fontSize:20,color:'#fff'}}>Verify OTP</Text>
            {/* </Link> */}
        </TouchableOpacity>
      </View></>)}
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
    marginHorizontal:"auto",
    justifyContent:"center",
    width:250,
  },
  otpbuttom:{
    marginTop:70,
    backgroundColor:'green',
    paddingVertical:10,
    paddingHorizontal:50,
    borderRadius:5

  }
})
