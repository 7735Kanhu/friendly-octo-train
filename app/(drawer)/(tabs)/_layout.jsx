import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Tabs, router } from "expo-router";
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { DrawerToggleButton } from "@react-navigation/drawer";
import Buttomsheet from "../../../components/Buttomsheet";


const CustomTabBarButton = ({ onPress, color }) => (
  <TouchableOpacity onPress={onPress} style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Image 
      source={require('./../../../assets/images/helpbutton.png')} 
      style={{ width: 24, height: 24, tintColor: color }}
    />
  </TouchableOpacity>
);

export default function Layout() {


  
  return (
    <>
    <Tabs screenOptions={{
      // headerShown: false,
      headerLeft:() =><DrawerToggleButton  tintColor="green"/>,
          tabBarStyle: {
            backgroundColor: "white",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            height: 80,
          },
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight:'bold',
            marginBottom: 8,
          },
    }}>
      <Tabs.Screen
        name="help"
        options={{
          tabBarIcon: ({ color }) => {
            return <FontAwesome5 name="hands-helping" size={24} color={color} />;
          },
          tabBarLabel: "HELP",
          headerTitle: "Help",
        }}
      />
       <Tabs.Screen
          name="history"
          options={{
            tabBarIcon: ({ color }) => {
             return <FontAwesome5 name="history" size={24} color={color} />
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
              return <Entypo name="wallet" size={24} color={color} />
            },
            tabBarLabel: "WALLET",
            headerTitle: "Wallet",
          }}
        />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => {
            return <FontAwesome5 name="user-alt" size={24} color={color} />;
          },
          tabBarLabel: "PROFILE",
          headerTitle: "Profile",
          headerRight: () => (
            <Button
              onPress={() => router.push("profile/new")}
              title="Edit Profile"
            />
          ),
        }}
      />
    </Tabs>
      <Buttomsheet />
    </>
  );
}
