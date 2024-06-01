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

const Buttomsheet = () => {
    const bottomSheetModalRef  = useRef(null);
    const snapPoints = ['25%','85%'];
    const [features, setFeatures] = useState([]);
    const [subFeatures, setSubFeatures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handlePresentModalPress = () => {
        bottomSheetModalRef.current?.present();
        fetchFeatures();
    }

    // Fetch features
    const fetchFeatures = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${apiUrl}/feature_view/`);
            setFeatures(response.data.data || []);  // Ensure data is an array
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
        console.log(responce.data);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
        console.log(features);
    }, [features]);

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
                        <Text>Choose your Help 🎉</Text>
                        {loading ? (
                            <Text>Loading...</Text>
                        ) : error ? (
                            <Text>{error}</Text>
                        ) : (
                            <Animatable.View 
                                style={[{ flexDirection: "row", gap: 10 }, styles.featureContainer]}
                                animation="fadeInUp"
                                duration={1000}
                                delay={300}
                            >
                                {features.length > 0 ? (
                                    features.map((item, id) => (
                                      <TouchableOpacity style={styles.feature} key={id} onPress={()=>handleSubFeatucher(item.type)}>
                                        <Text >{item.type}</Text>
                                      </TouchableOpacity>
                                    ))
                                ) : (
                                    <Text>No Help Available right now, please wait...</Text>
                                )}
                            </Animatable.View>
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
        justifyContent: "center"
    },
    feature: {
        backgroundColor: '#ACF5CA',
        color: '#000',
        padding: 7,
        borderRadius: 50,
        paddingHorizontal: 15,
        borderWidth: 2,
        borderColor: "green"
    }
});
