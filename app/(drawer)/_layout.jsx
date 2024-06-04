import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import {Drawer} from 'expo-router/drawer'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { router, usePathname } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import firebase from "../../firebase";




const CustomDrawerContent = (props) =>{
    const pathname = usePathname();
    const router = useRouter();


  // useEffect(() => {
  //   console.log(pathname);
  // }, [pathname]);

  const handleLogout = async()=>{
    await SecureStore.deleteItemAsync('userToken');
    await firebase.auth().signOut();
    router.push('login')
  }

    return (
    <DrawerContentScrollView {...props} >
        <View style={styles.userInfoWrapper}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/26.jpg' }}
          width={80}
          height={80}
          style={styles.userImg}
        />
        <View style={styles.userDetailsWrapper}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john@email.com</Text>
        </View>
      </View>
        <DrawerItem icon={({color,size})=>(
            <FontAwesome5 name="hands-helping" size={24} color={pathname == "/help" ? "#fff" : "#000"}/>
        )} labelStyle={[styles.navItemLabel, { color: pathname == "/help" ? "#fff" : "#000" },]} label={'Help'} style={{ backgroundColor: pathname == "/help" ? "green" : "#fff" }}  onPress={()=>router.push('(drawer)/(tabs)/help')}/>
        <DrawerItem icon={({color,size})=>(
            <FontAwesome5 name="user-alt" size={24} color={pathname == "/profile" ? "#fff" : "#000"} />
        )} labelStyle={[styles.navItemLabel,{ color: pathname == "/profile" ? "#fff" : "#000" }]} label={'Profile'} style={{ backgroundColor: pathname == "/profile" ? "green" : "#fff" }}  onPress={()=>router.push('(drawer)/(tabs)/profile')}/>
        <DrawerItem icon={({color,size})=>(
            <MaterialIcons name="payments" size={24} color={pathname == "/payments" ? "#fff" : "#000"} />
        )} labelStyle={[styles.navItemLabel,{ color: pathname == "/payments" ? "#fff" : "#000" }]} label={'Payments'} style={{ backgroundColor: pathname == "/payments" ? "green" : "#fff" }}  onPress={()=>router.push('/payments')}/>
        <DrawerItem icon={({color,size})=>(
            <Ionicons name="settings" size={24} color={pathname == "/settings" ? "#fff" : "#000"} />
        )} labelStyle={[styles.navItemLabel,{ color: pathname == "/settings" ? "#fff" : "#000" }]} label={'Settings'} style={{ backgroundColor: pathname == "/settings" ? "green" : "#fff" }}  onPress={()=>router.push('/settings')}/>
        <DrawerItem icon={({color,size})=>(
            <AntDesign name="logout" size={24} color={"#000"} />
        )} labelStyle={[styles.navItemLabel,{ color:"#000"}]} label={'Logout'} style={{ backgroundColor: "#fff",marginTop:300 }}  onPress={handleLogout}/>
        <View>
          <Text style={{color:"#ccc",textAlign:"center"}}>Version 1.0</Text>
        </View>
       
    </DrawerContentScrollView>
    )
}

export default function Layout() {
  return (
    <Drawer  drawerContent={(props)=><CustomDrawerContent {...props} />} screenOptions={{headerShown:false}}>
        <Drawer.Screen name='payments' options={{headerShown:true}} />
        <Drawer.Screen name='settings' options={{headerShown:true}} />
    </Drawer>
  )
}

const styles = StyleSheet.create({
    navItemLabel:{
        marginLeft: -20,
        fontSize: 18,
    },
    userInfoWrapper: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        marginBottom: 10,
      },
      userImg: {
        borderRadius: 40,
      },
      userDetailsWrapper: {
        marginTop: 25,
        marginLeft: 10,
      },
      userName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      userEmail: {
        fontSize:16,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
      }
})
