import { View, Text, Button,ScrollView, Image } from 'react-native'
import React, { useEffect } from 'react'
import { router, usePathname } from 'expo-router'

export default function Page() {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <ScrollView className='flex-1' style={{backgroundColor:'green',flex:1}}>
      <View className='flex-1 mx-auto mt-4 mb-6'>
      <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/26.jpg' }}
          // style={styles.profileImg}
          width={80}
          height={80}
          resizeMode="contain"
          className='rounded-full mb-2 ml-3'
        />
        <Text className='text-center text-xl text-white font-bold'>Jhon Doe</Text>
        <Text className='text-white text-base'>+91123456789</Text>
      </View>
      <View className=' bg-gray-100 max-w-screen h-max p-4 pt-6 flex flex-col gap-1 items-center' style={{flex:1, borderTopLeftRadius:50,borderTopRightRadius:50}}>
      <View className='bg-white w-full rounded-lg shadow-lg flex flex-col gap-2 pb-3 mb-2 pr-3'>
        <View className='w-full flex flex-row justify-between p-2 px-4  border-b border-gray-200'>
          <Text className='font-bold'>Email</Text>
          <Text className='text-gray-500'>john@gmail.com</Text>
        </View>
        <View className='w-full flex flex-row justify-between p-2 px-4  border-b border-gray-200'>
          <Text className='font-bold'>Date of birth</Text>
          <Text className='text-gray-500'>12.07.2024</Text>
        </View>
        <View className='w-full flex flex-row justify-between p-2 px-4  border-b border-gray-200'>
          <Text className='font-bold'>Gender</Text>
          <Text className='text-gray-500'>Female</Text>
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
          <Text className='font-bold'>Adhar number</Text>
          <Text className='text-gray-500'>9876-4657-4657</Text>
        </View>
        </View>
      </View>
      {/* <Text>Profile Page</Text>
      <Button onPress={()=>router.back()} title='Go Back'/> */}
    </ScrollView>
  )
}