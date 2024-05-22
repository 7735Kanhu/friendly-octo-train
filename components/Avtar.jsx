import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import UploadModal from "./UploadModal";

export default function Avtar() {
  const [profileImage, setProfileImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectImage = async (type) => {
    let result;
    if (type === "gallery") {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
    } else if (type === "camera") {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
    }

    if (!result.canceled) {
      const manipResult = await ImageManipulator.manipulateAsync(
        result.assets[0].uri,
        [{ resize: { width: 300, height: 300 } }],
        { compress: 1, format: ImageManipulator.SaveFormat.PNG }
      );
      setProfileImage(manipResult.uri);
      setModalVisible(false);
    }
  };

  const removeImage = () => {
    setProfileImage(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          source={
            profileImage
              ? { uri: profileImage }
              : require('../assets/images/avtar.webp')
          }
          style={styles.profileImage}
        />
      </TouchableOpacity>

      <UploadModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelectImage={handleSelectImage}
        onRemoveImage={removeImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
