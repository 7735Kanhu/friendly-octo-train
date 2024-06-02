import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
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

const Buttomsheet = () => {
    const bottomSheetModalRef  = useRef(null);
    const snapPoints = ['25%','85%'];
    const [features, setFeatures] = useState([]);
    const [subFeatures, setSubFeatures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedFeature,setSelectedFeature] = useState()

    const handlePresentModalPress = () => {
        bottomSheetModalRef.current?.present();
        fetchFeatures();
    }

    // Fetch features
    const fetchFeatures = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${apiUrl}/feature_view/`);
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
      try {
        const responce = await axios.get(`${apiUrl}/subfeature_view/${id}`);
        console.log(responce.data.data);
        setSubFeatures(responce.data.data);
        setFeatures([])
        setSelectedFeature(id)
        // console.log(features);
      } catch (error) {
        console.log(error);
      }
    }
    // handelcreateHelp
    const handelcreateHelp =()=>{

    }


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
                        <Text style={{fontSize:15,marginBottom:10}}>Choose your Help 🎉</Text>
                        {loading ? (
                            <Text>Loading...</Text>
                        ) : error ? (
                            <Text>{error}</Text>
                        ) : (
                          <View style={{flex:1, flexDirection:"row",flexWrap:"wrap",margin:"auto",padding:5,width:"auto",justifyContent:"center",gap:10}}>

                          {selectedFeature? <Animatable.View
                          style={[{ flexDirection: "row"}, styles.selectedFeature]}
                          animation = {animations}
                          duration={1000}
                          delay={300}
                          >

                          <TouchableOpacity style={styles.feature}>
                                        <Text >{selectedFeature}</Text>
                                      </TouchableOpacity>
                          </Animatable.View>:
                          features.length > 0 ? (
                            features.map((item, id) => (
                              <Animatable.View 
                              style={[{ flexDirection: "row", gap: 10 }, styles.featureContainer]}
                              animation = {animations}
                              duration={1000}
                              delay={id * 300}
                              key={id}
                              >
                                      <TouchableOpacity style={styles.feature} key={id} onPress={()=>handleSubFeatucher(item.type)}>
                                        <Text >{item.type}</Text>
                                      </TouchableOpacity>
                                      </Animatable.View>
                                    ))
                                  ) : (
                                    <Text>No Help Available right now, please wait...</Text>
                                  )}
                                {/* <View style={{borderBottomColor:"green",borderBottomWidth:2,paddingBottom:10}}><Text>Select your Sub Help</Text></View> */}
                                  <View style={styles.subFeatures}>
                                  {
                                    subFeatures.length >0 &&(
                                        subFeatures.map((item,id)=>(
                                            <Animatable.View
                                            style={[{ flexDirection: "row", gap: 10 }, styles.featureContainer]}
                                            animation={animations}
                                            duration={1000}
                                            delay={id * 200}
                                            key={id}
                                        >
                                            <View>

                                            <TouchableOpacity style={styles.subfeature} key={id} onPress={()=>handelcreateHelp(item.type)}>
                                        <Text >{item.type}</Text>
                                      </TouchableOpacity>
                                            </View>
                                        </Animatable.View>
                                        ))
                                    )
                                  }
                                  </View>
                                  </View>
                        )}
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
    }
});
