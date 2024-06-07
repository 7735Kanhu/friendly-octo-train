import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
// import * as Permissions from 'expo-permissions';

export default function Help() {
  const [mapRegion,setMapRegion] = useState({
    latitude: 20.359296060599497,
    longitude: 85.82318143450989,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  const userLocation = async() =>{
    let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true,timeInterval: 3000});
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })
      console.log(location.coords.latitude,location.coords.longitude);
  };
  useEffect(()=>{userLocation()},[])
  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        <Marker coordinate={mapRegion} title='Marker' >
        <Image source={require('../../../assets/images/help_man.png')} style={{ width: 40, height: 40 }} />
        </Marker>
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});