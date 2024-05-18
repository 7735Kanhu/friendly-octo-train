import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import PhoneInput from "react-native-phone-input";
import CountryPicker from "react-native-country-picker-modal";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function login() {
  const insets = useSafeAreaInsets();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({
    // cca2: 'IN',
    callingCode: "91",
    name: "India",
  });
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);

  const onSelectCountry = (country) => {
    setCountryCode(country.cca2);
    setSelectedCountry(country);
    setCountryPickerVisible(false);
  };

  const onSubmit = () => {
    // Perform your desired action with
    // the phone number and country code
    Alert.alert(
      "Form Submitted",
      `Phone Number: ${phoneNumber} 
                    \nCountry Code: ${countryCode}`
    );
  };

  const toggleCountryPicker = () => {
    setCountryPickerVisible(!countryPickerVisible);
  };

  return (
    <View style={styles.container}>
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
            <TouchableOpacity onPress={onSubmit} style={styles.submitButton}>
            <Link href={'/verifyotp'}>
              <Text
                style={{ color: "#fff", fontSize: 20, textAlign: "center" }}
              >
                Send OTP
              </Text>
              </Link>
            </TouchableOpacity>
          </View>
          <View style={styles.policy}>
            <Text style={styles.policy_text}>
              By countinue you agree that you have read and accept our <Text style={{fontSize:15, fontWeight:'bold'}}>T&Cs and
              Privacy Policy.</Text>
            </Text>
          </View>
      </View>
      </ScrollView>
        </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "auto",
    backgroundColor: "green",
    display: "flex",
    // justifyContent:'center',
    alignItems: "center",
    marginTop: -90,
    position: "relative",
  },
  logo: {
    width: 200,
    margin: "auto",
    height: 400,
    // backgroundColor:'#000'
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
    // justifyContent:'center',
    alignItems: "center",
  },
  form: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    // marginVertical:50
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
    textAlign:'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  flag: {
    width: 30,
    height: 20,
  },
  policy:{
    paddingHorizontal:20,
    marginTop:50
  },
  policy_text:{
    textAlign:'center',
    // fontSize:12,
  }
});
