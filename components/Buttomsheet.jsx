import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import apiUrl from '../apiUrl';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import Helpbutton from './Helpbutton';
import axios from 'axios';


const Buttomsheet = () => {
    const bottomSheetModalRef  = useRef(null);
    const snapPoints = ['25%','85%'];
    const [subFeatures, setSubFeatures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handlePresentModalPress = () => {
      bottomSheetModalRef.current?.present();
      fetchSubFeatures();

    }
    // fetch featchers
// useEffect(()=>{
  // console.log(apiUrl);
  const fetchSubFeatures  = async()=>{
  try {
      const responce = await axios.get(`${apiUrl}/feature_view/`);
      console.log(responce.data);
    }catch (error) {
      console.log(error);
    }
  } 
// },[])

  return (
    <BottomSheetModalProvider>
    <View style={styles.container}>
      <Helpbutton press={handlePresentModalPress}/>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Choose your Help 🎉</Text>
          <View style={[{flexDirection:"row",gap:10},styles.featureContainer]}>
            <Text style={styles.featcher}>Grocerry</Text>
            <Text style={styles.featcher}>Medical</Text>
            <Text style={styles.featcher}>Vehicle</Text>
            <Text style={styles.featcher}>Education</Text>
            <Text style={styles.featcher}>Picker</Text>
            <Text style={styles.featcher}>Workers</Text>
            <Text style={styles.featcher}>Health</Text>
            <Text style={styles.featcher}>Delivery</Text>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  </BottomSheetModalProvider>
  )
}

export default Buttomsheet

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 0,
    justifyContent: 'center',
    backgroundColor: 'transperant',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  featureContainer:{
    marginTop:5,
 flexWrap:"wrap",
 justifyContent:"center"
  },
  featcher:{
    backgroundColor:'#ACF5CA',
    color:'#000',
    padding:4,
    borderRadius:50,
    paddingHorizontal:15,
    borderWidth:2,
    borderColor:"green"
  }
});