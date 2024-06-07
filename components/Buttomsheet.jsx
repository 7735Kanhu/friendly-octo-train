import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput, SafeAreaView, Dimensions, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import apiUrl from '../apiUrl';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import Helpbutton from './Helpbutton';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../constants/Animations';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Features from './Features';

const Buttomsheet = () => {
    const bottomSheetModalRef  = useRef(null);
    const snapPoints = ['25%','95%','85%',];
    const [features, setFeatures] = useState([]);
    const [subFeatures, setSubFeatures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedFeature,setSelectedFeature] = useState()
    const router = useRouter();


    const screenWidth = Dimensions.get('window').width;


    const handlePresentModalPress = () => {
        bottomSheetModalRef.current?.present();
        fetchFeatures();
    }

    // Fetch features
    const fetchFeatures = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${apiUrl}feature_view/`);
            console.log(response.data);
            setFeatures(response.data.data);  // Ensure data is an array
        } catch (error) {
            console.error(error);
            setError('Failed to fetch features');
        } finally {
            setLoading(false);
        }
    }

    // handleSubFeatucher
    const handleSubFeatucher= async(id)=>{
        setSelectedFeature(id)
    //   try {
    //     const responce = await axios.get(`${apiUrl}/subfeature_view/${id}`);
    //     console.log(responce.data.data);
    //     setSubFeatures(responce.data.data);
    //     setFeatures([])
    //     setSelectedFeature(id)
    //     // console.log(features);
    //   } catch (error) {
    //     console.log(error);
    //   }
    }
useEffect(()=>{
    if(selectedFeature?.length>0){
        router.push(`/subcategory/${selectedFeature}/`)
    }
},[selectedFeature])


    const animations = Animations[ Math.floor(Math.random() * Animations.length)] 
    return (
        <BottomSheetModalProvider>
            <View style={styles.container}>
                <Helpbutton press={handlePresentModalPress} />
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}
                >
                    <BottomSheetView style={styles.contentContainer}>
                        <SafeAreaView style={{alignItems:"center",paddingHorizontal:10}}>

                        <Text style={{fontSize:18}}>Choose Your Help Here</Text>
                        <View style={styles.searchBox}>
                        <Feather name="search" size={24} color="black" />
                        <TextInput placeholder='Search Category' style={{width:'100%'}}/>
                        </View>
                        <View style={{marginTop:10,width:screenWidth,paddingHorizontal:20}}>
                            <Text style={{fontWeight:"bold",fontSize:15,width:'100%'}}>Category</Text>
                            <Features features={features}/>
                        </View>
                        </SafeAreaView>
                    
                    </BottomSheetView>
                </BottomSheetModal>
            </View>
        </BottomSheetModalProvider>
    )
}

export default Buttomsheet

const styles = StyleSheet.create({
    container: {
        padding: 0,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    featureContainer: {
        marginTop: 5,
        flexWrap: "wrap",
        justifyContent: "center",
        // margin:"auto",
        alignItems:"center"
    },
    feature: {
        backgroundColor: '#ACF5CA',
        color: '#000',
        padding: 7,
        borderRadius: 50,
        paddingHorizontal: 15,
        borderWidth: 2,
        borderColor: "green"
    },
    selectedFeature:{
        width:"100%",
        margin:"auto",
        justifyContent:"center",
        marginBottom:10,
    },
    subFeatures:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:'row',
        margin:"auto",
        width:"auto",
        gap:10
    },
    subfeature:{
        backgroundColor: '#ACF5CA',
        color: '#000',
        padding: 7,
        borderRadius: 50,
        // paddingHorizontal: 5,
        borderWidth: 2,
        borderColor: "green",
        marginHorizontal:"auto",
        margin:20,
    },
    // search box container
    searchBox:{
        flexDirection:'row',
        borderColor:'#000',
        borderWidth:1,
        marginTop:20,
        width:"80%",
        padding:5,
        borderRadius:50,
        alignItems:"center",
        paddingHorizontal:10,
        gap:5
    },
    // categoryView
    categoryView:{
        color:'#fff',
        alignItems:"center",
        gap:5,
        backgroundColor:"green",
        padding:5,
        borderRadius:5,
        width:100
        
    }
});
