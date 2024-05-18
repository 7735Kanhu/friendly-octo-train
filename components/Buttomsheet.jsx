import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import Helpbutton from './Helpbutton';

const Buttomsheet = () => {
    const bottomSheetModalRef  = useRef(null);
    const snapPoints = ['25%','85%'];

    const handlePresentModalPress = () => {
      bottomSheetModalRef.current?.present();
    }
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
          <Text>Awesome 🎉</Text>
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
});