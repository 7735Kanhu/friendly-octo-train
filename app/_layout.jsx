import { SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';

export default function _layout() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync('userToken');
      console.log(token);
      setUserToken(token);
      setIsLoading(false);
    };

    checkToken();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (userToken) {
        router.push('/help');
      }
    }
  }, [isLoading, userToken]);

  if (isLoading) {
    return null; // or a loading spinner
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Stack 
          screenOptions={{ 
            headerShown: false, 
            headerStyle: { backgroundColor: "green" }, 
            headerTintColor: "white" 
          }} 
          initialRouteName={userToken ? 'help' : 'index'}
        >
          {userToken ? (
            <>
              <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
              {/* <Stack.Screen name="subcategory" options={{ headerShown: false }} /> */}
            </>
          ) : (
            <>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="login" options={{ headerShown: false }} />
              <Stack.Screen name="verifyotp" options={{ headerShown: false }} />
            </>
          )}
        </Stack>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});
