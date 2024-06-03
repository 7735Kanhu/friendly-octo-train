import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, router } from 'expo-router'
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Provider } from 'react-redux';
import { store } from '../store/index';
import * as SecureStore from 'expo-secure-store';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function _layout() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
        const token = await SecureStore.getItemAsync('userToken');
        setUserToken(token);
        setIsLoading(false);
        console.log(token);
            };

    checkToken();
   
}, []);

useEffect(() => {
  if (!isLoading) {
    if (userToken) {
      router.push('/help');
    } else {
      return;
    }
  }
}, [isLoading, userToken]);

if (isLoading) {
    return null; // or a loading spinner
}
  
  return (
    // <ClerkProvider publishableKey="pk_test_bGFyZ2UtZHJhZ29uLTI0LmNsZXJrLmFjY291bnRzLmRldiQ">
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
      {
        userToken ? (
          <Stack screenOptions={{headerShown:false,headerStyle: {backgroundColor: "green",},headerTintColor: "white",}}initialRouteName='help' >
      <Stack.Screen name="(drawer)" options={{ headerShown:false }} />
      <Stack.Screen name="about" options={{ headerTitle: "About" }} />
      <Stack.Screen name="blog/index" options={{ headerTitle: "All Blog post" }}/>
      <Stack.Screen name="contact" options={{ headerTitle: "Contact",presentation: 'modal' }} />
    </Stack>
        ):(
          <Stack screenOptions={{headerShown:false,headerStyle: {backgroundColor: "green",},headerTintColor: "white",}}initialRouteName='index' >
      <Stack.Screen name="index" options={{ headerShown:false }} />
      <Stack.Screen name="login" options={{ headerShown:false }} />
      <Stack.Screen name="verifyotp" options={{ headerShown:false }} />

    </Stack>
        )
      }
    </SafeAreaView>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'green'
  }
})
