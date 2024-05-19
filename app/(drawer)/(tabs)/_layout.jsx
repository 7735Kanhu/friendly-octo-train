import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Tabs, router } from "expo-router";
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { DrawerToggleButton } from "@react-navigation/drawer";
import Buttomsheet from "../../../components/Buttomsheet";


const CustomTabBarButton = ({ onPress, color }) => (
  <TouchableOpacity onPress={onPress} style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Image 
      source={require('./../../../assets/images/button/help-button.png')} 
      style={{ width: 24, height: 24, tintColor: color }}
    />
  </TouchableOpacity>
);

export default function Layout() {


  
  return (
    <>
      
    <Tabs initialRouteName='profile' screenOptions={{
      // headerShown: false,
      headerLeft:() =><DrawerToggleButton  tintColor="#FFF"/>,
          tabBarStyle: {
            backgroundColor: "white",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            height: 80,
          },
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight:'bold',
            marginBottom: 8,
          },
    }}>
      <Tabs.Screen
        name="help"
        options={{
          tabBarIcon: ({ color }) => {
            return <FontAwesome5 name="hands-helping" size={22} color={color} />;
          },
          tabBarLabel: "HELP",
          headerTitle: "Help",
        }}
      />
       <Tabs.Screen
          name="history"
          options={{
            tabBarIcon: ({ color }) => {
             return <FontAwesome5 name="history" size={22} color={color} />
            },
            tabBarLabel: "HISTORY",
            headerTitle: "History",
          }}
        />
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color }) => {
           <CustomTabBarButton color='black'/>
          },
          tabBarLabel: "",
          headerShown: false,
        }} 
      />
        <Tabs.Screen
          name="wallet"
          options={{
            tabBarIcon: ({ color }) => {
              return <Entypo name="wallet" size={22} color={color} />
            },
            tabBarLabel: "WALLET",
            headerTitle: "Wallet",
          }}
        />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => {
            return <FontAwesome5 name="user-alt" size={22} color={color} />;
          },
          tabBarLabel: "PROFILE",
          headerTitle: "Profile",
          headerRight: () => (
            <FontAwesome5 name="edit" size={24} color="#fff" onPress={() => router.push("profile/new")} style={{ marginRight: '15%' }}/>
            // <Button
            //   onPress={() => router.push("profile/new")}
            //   title="Edit Profile"
            // />
          ),
          headerStyle: {
            backgroundColor: 'green',
            borderBottomWidth: 0,  
            elevation: 0,          
            shadowOpacity: 0,      
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff', 
        }}
      />
    </Tabs>
      <Buttomsheet />
    </>
  );
}
