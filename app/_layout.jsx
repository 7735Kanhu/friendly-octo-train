import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Stack, router } from 'expo-router'
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from "expo-constants"

export default function _layout() {
  return (
    // <ClerkProvider publishableKey="pk_test_bGFyZ2UtZHJhZ29uLTI0LmNsZXJrLmFjY291bnRzLmRldiQ">
      <SafeAreaView style={styles.container}>
    <Stack
      screenOptions={{
        headerShown:false,
          headerStyle: {
          backgroundColor: "green",
        },
        headerTintColor: "white",
      }}
      initialRouteName='(tabs)'
    >
      {/* <Stack.Screen name="index" options={{ headerTitle: "Home", headerRight:()=><Button onPress={()=>router.push('contact')} title='Contact'/> }} /> */}
      <Stack.Screen name="index" options={{ headerShown:false }} />
      {/* <SignedIn> */}
      <Stack.Screen name="about" options={{ headerTitle: "About" }} />
      <Stack.Screen
        name="blog/index"
        options={{ headerTitle: "All Blog post" }}
      />
      <Stack.Screen name="contact" options={{ headerTitle: "Contact",presentation: 'modal' }} />
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      <Stack.Screen name="(drawer)" options={{ headerShown:false }} />
      {/* </SignedIn> */}
      {/* <SignedOut> */}
      <Stack.Screen name="login" options={{ headerShown:false }} />
      <Stack.Screen name="verifyotp" options={{ headerShown:false }} />
      {/* </SignedOut> */}
    </Stack>
    </SafeAreaView>
    // </ClerkProvider>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'green'
  }
})
