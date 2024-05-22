import { View, Text, Button, StyleSheet,TextInput, Pressable, Platform } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler'
import Avtar from '../../../../components/Avtar'
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from "@react-native-community/datetimepicker";
import { RadioButton } from 'react-native-paper'; 

export default function Page() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [dateofBirth,setDateofBirth] = useState('')
  const [gender, setGender] = useState('');
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const toggleDatePicker = () => {
    setShow(!show);
  };
  const onChangeDate = ({type},seletedDate) =>{
    if (type == "set"){
      const currentDate = seletedDate;
      setDate(currentDate);
      if(Platform.OS === "android"){
        toggleDatePicker();
        setDateofBirth(currentDate.toDateString());
      }
    }else{
      toggleDatePicker()
    }
  }
  return (
  <ScrollView className='flex-1 bg-[green] w-screen h-screen' style={{flex:1,backgroundColor:'green'}}>
    <Avtar className='pt-10'/>
    <View className=' bg-gray-100 max-w-screen h-max p-4 pt-6 flex flex-col gap-1 items-center mt-5' style={{flex:1, borderTopLeftRadius:50,borderTopRightRadius:50}}>
      <View className='bg-white w-full rounded-lg shadow-lg flex flex-col gap-2 pb-3 mb-2 pr-3'>
        <View className='w-full flex flex-row justify-between p-2 px-4  border-b border-gray-200'>
          <Text className='font-bold'>Name</Text>
          <TextInput className='w-full text-gray-500 text-right pr-8' placeholder='Your Name' defaultValue={name}/>
        </View>
        <View className='w-full flex flex-row justify-between p-2 px-4  border-b border-gray-200'>
          <Text className='font-bold'>Email</Text>
          <TextInput className='w-full text-gray-500 text-right pr-8' placeholder='Your Email' defaultValue={email}/>
        </View>
        <View className='w-full flex flex-row justify-between p-2 px-4  border-b border-gray-200'>
          <Text className='font-bold'>Date of birth</Text>
          {!show && (<Pressable onPress={toggleDatePicker} >
            <TextInput placeholder='Sat Aug 21 2024' value={dateofBirth} onChange={setDateofBirth} editable={false} onPressIn={toggleDatePicker}/>
          </Pressable>)}
          {show && (<DateTimePicker mode='date' display='spinner' value={date} onChange={onChangeDate}/>)}
        </View>
        <View className='w-full flex flex-row justify-between p-2 px-4  border-b border-gray-200'>
          <Text className='font-bold'>Gender</Text>
          <View style={styles.radioButton}> 
                    <RadioButton.Android 
                        value="Female"
                        status={gender === 'Female' ?  
                                'checked' : 'unchecked'} 
                        onPress={() => setGender('Female')} 
                        color="#007BFF"
                    /> 
                    <Text style={styles.radioLabel}> 
                        Female 
                    </Text> 
                </View> 
  
                <View style={styles.radioButton}> 
                    <RadioButton.Android 
                        value="Male"
                        status={gender === 'Male' ?  
                                 'checked' : 'unchecked'} 
                        onPress={() => setGender('Male')} 
                        color="#007BFF"
                    /> 
                    <Text style={styles.radioLabel}> 
                        Male 
                    </Text> 
                </View> 
        </View>
        <View className='w-full flex flex-row justify-between p-2 px-4'>
          <Text className='font-bold'>Phone</Text>
          <Text className='text-gray-500'>9876354267</Text>
        </View>
      </View>
      <View className='bg-white w-full rounded-lg shadow-lg flex flex-col gap-2 pb-3 pr-3 mb-2'>
        <Text className='text-base' style={{color:'green'}}>Payment Details</Text>
        <View className='w-full flex flex-row justify-between p-2 px-4 border-b border-gray-200'>
          <Text className='font-bold'>PAN</Text>
          <Text className='text-gray-500'>HFSPT8765J</Text>
        </View>
        <View className='w-full flex flex-row justify-between p-2 px-4 border-b border-gray-200'>
          <Text className='font-bold'>UPI</Text>
          <Text className='text-gray-500'>sgshdh3236@ybl</Text>
        </View>
        <View className='w-full flex flex-row justify-between p-2 px-4 border-b border-gray-200'>
          <Text className='font-bold'>Bank name</Text>
          <Text className='text-gray-500'>STATE BANK OF INDIA</Text>
        </View>
        <View className='w-full flex flex-row justify-between p-2 px-4 border-b border-gray-200'>
          <Text className='font-bold'>IFSC</Text>
          <Text className='text-gray-500'>HUYTFRF64543</Text>
        </View>
        <View className='w-full flex flex-row justify-between p-2 px-4 '>
          <Text className='font-bold'>Account</Text>
          <Text className='text-gray-500'>64752647890</Text>
        </View>
      </View>
      <View className='bg-white w-full rounded-lg shadow-lg flex flex-col gap-2 pb-3 pr-3'>
        <Text className='text-base' style={{color:'green'}}>Other Details</Text>
        <View className='w-full flex flex-row justify-between p-2 px-4 border-b border-gray-200'>
          <Text className='font-bold'>DL number</Text>
          <Text className='text-gray-500'>KHU-BH0-HUYTFRF64543</Text>
        </View>
        <View className='w-full flex flex-row justify-between p-2 px-4 border-b border-gray-200'>
          <Text className='font-bold'>Aadhar number</Text>
          <Text className='text-gray-500'>9876-4657-4657</Text>
        </View>
        </View>
      </View>
  </ScrollView>
  )
}
const styles = StyleSheet.create({
  radioButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
}, 
radioLabel: { 
    marginLeft: 8, 
    fontSize: 16, 
    color: '#333', 
},
});