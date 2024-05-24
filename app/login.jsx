import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import PhoneInput from "react-native-phone-input";
import CountryPicker from "react-native-country-picker-modal";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useRouter } from 'expo-router';
import firebase from "../firebase";
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { useDispatch } from 'react-redux';
import { setVerificationId } from '../store/authSlice'

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({
    callingCode: "91",
    name: "India",
  });
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  const [otp, setOtp] = useState('');
  const [userId, setUserId] = useState(null);
  const recaptchaVerifier = useRef(null);
  // const [verificationId, setVerificationId] = useState(null);
  const [message, setMessage] = useState('');

  const onSelectCountry = (country) => {
    setCountryCode(country.cca2);
    setSelectedCountry(country);
    setCountryPickerVisible(false);
  };


  const onSubmit = async () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    try {
      const verificationId = await phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current);
      setMessage('Verification code sent to your phone');
      if(verificationId){
        Alert.alert(`OTP send to your phone number${phoneNumber}`)
        dispatch(setVerificationId(verificationId));
        router.push('/verifyotp')
      }else{
        Alert.alert("Something wents wrong.")
      }
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  const toggleCountryPicker = () => {
    setCountryPickerVisible(!countryPickerVisible);
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={{
          apiKey: "AIzaSyA5THpt_2geodgKCzjKP0D0k8wyeAHGdZA",
          authDomain: "help-7c56d.firebaseapp.com",
          projectId: "help-7c56d",
          storageBucket: "help-7c56d.appspot.com",
          messagingSenderId: "313013637870",
          appId: "1:313013637870:web:7dcb9681483f1ba95199ff",
          measurementId: "G-EZHY8516RB"
        }}
      />
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/images/otp3.webp")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.logo_text}>Mobile Number</Text>
        <Text style={styles.logo_text2}>
          We will send you a{" "}
          <Text style={{ fontWeight: "bold" }}>One Time Password</Text> on your
          phone number
        </Text>
      </View>
      <KeyboardAvoidingView style={styles.buttom_box}>
        <ScrollView>
          <View style={[styles.buttom_box, { paddingTop: insets.top }]}>
            <View style={styles.form}>
              <PhoneInput
                initialCountry="in"
                value={phoneNumber}
                onChangePhoneNumber={(number) => setPhoneNumber(number)}
                onPressFlag={toggleCountryPicker}
                style={styles.phoneInput}
                flagStyle={styles.flag}
                pickerButtonColor="#000"
              />
              {countryPickerVisible && (
                <CountryPicker
                  withFilter={true}
                  withFlagButton={false}
                  withCountryNameButton={false}
                  onSelect={onSelectCountry}
                  onClose={() => setCountryPickerVisible(false)}
                  visible={countryPickerVisible}
                  containerButtonStyle={styles.countryPickerButton}
                  closeButtonImageStyle={styles.countryPickerCloseButton}
                />
              )}
              <TouchableOpacity onPress={onSubmit} style={[styles.submitButton,phoneNumber.length < 10 && { opacity: 0.5 }]} disabled={phoneNumber.length <10}>
                {/* <Link href={'/verifyotp'}> */}
                  <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>Send OTP</Text>
                {/* </Link> */}
              </TouchableOpacity>
            </View>
            <View style={styles.policy}>
              <Text style={styles.policy_text}>
                By continuing you agree that you have read and accept our <Text style={{ fontSize: 15, fontWeight: 'bold' }}>T&Cs and
                Privacy Policy.</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "auto",
    backgroundColor: "green",
    display: "flex",
    alignItems: "center",
    marginTop: -90,
    position: "relative",
  },
  logo: {
    width: 200,
    margin: "auto",
    height: 400,
  },
  logo_text: {
    margin: "auto",
    position: "absolute",
    top: 290,
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  logo_text2: {
    paddingHorizontal: 15,
    fontSize: 15,
    marginTop: -70,
    color: "#fff",
    textAlign: "center",
  },
  buttom_box: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 10,
    borderTopLeftRadius: 150,
    display: "flex",
    alignItems: "center",
  },
  form: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  phoneInput: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    marginBottom: 50,
    paddingHorizontal: 10,
  },
  submitButton: {
    width: 280,
    backgroundColor: "green",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flag: {
    width: 30,
    height: 20,
  },
  policy: {
    paddingHorizontal: 20,
    marginTop: 50
  },
  policy_text: {
    textAlign: 'center',
  }
});

export default Login;
