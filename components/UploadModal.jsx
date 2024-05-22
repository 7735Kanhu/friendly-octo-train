import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const UploadModal = ({ visible, onClose, onSelectImage, onRemoveImage }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalView}>
        <View className="flex bg-white justify-center align-middle rounded-lg" style={styles.modelContainer}>
          <Text style={{fontSize:20, fontWeight:'bold',margin:'auto',marginBottom:20}}>Profile Photo</Text>
          <View style={styles.switchContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={() => onSelectImage('camera')}>
            <Feather name="camera" size={28} color="green" />
            <Text>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => onSelectImage('gallery')}>
            <Foundation name="photo" size={28} color="green" />
            <Text>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={onRemoveImage}>
            <AntDesign name="delete" size={28} color="red" />
            <Text>Remove</Text>
            </TouchableOpacity>
          </View>

        </View>
        <TouchableOpacity style={styles.close} onPress={onClose}>
          <Entypo name="cross" size={28} color="gray" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    display:'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modelContainer:{
    display:'flex',
    justifyContent:'center',
    marginHorizontal:'auto',
    backgroundColor:'#fff',
    padding:10,
    paddingVertical:20,
    width:'80%',
    borderRadius:5
  },
  switchContainer:{
    display:'flex',
    flexDirection:'row',
    gap:10,
    justifyContent:'space-around'
  },
  modalButton: {
    display:'flex',
    backgroundColor: 'lightgray',
    padding: 8,
    // margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  close:{
    backgroundColor:'#cecdcd',
    padding:1,
    width:30,
    height:30,
    borderRadius:50,
    marginHorizontal:'auto',
    marginTop:25,
  }

});

export default UploadModal;
