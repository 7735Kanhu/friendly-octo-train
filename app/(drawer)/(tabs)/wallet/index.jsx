import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function Page() {
  return (
    <View style={{flex:1,alignItems:'center', backgroundColor:'green'}}>
      <View style={styles.topwallet}>
        <Text style={styles.rupees}> ₹ 1902.00</Text>
        <Text style={styles.balanceText}>Avaliable Balance</Text>
      </View>
      <View style={styles.bottomwallet} className='bg-gray-100'>
          <View style={styles.totalIncom} className='bg-white shadow-xl py-6 px-5'>
            <View className='flex flex-row gap-2'>
            <AntDesign name="plussquare" size={40} color="green" />
            <View>
              <Text className='font-bold text-md'>₹ 2460 </Text>
              <Text className='text-xs'>Total Income </Text>
            </View>
            </View>
            <View className='flex flex-row gap-2'>
            <AntDesign name="minussquare" size={40} color="red" />
            <View>
              <Text className='font-bold text-md'>₹ 2460 </Text>
              <Text className='text-xs'>Total Expenditure </Text>
            </View>
            </View>
          </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  topwallet:{
    marginTop:20,
    marginHorizontal:'auto',
    color:'#fff'
  },
  rupees:{
    color:'#fff',
    fontSize:30,
    fontWeight:'bold',
    marginBottom:4
  },
  balanceText:{
    marginHorizontal:'auto',
    color:'#fff'
  },
  bottomwallet:{
    flex:1,
    width:'100%',
    // backgroundColor:'#fff',
    marginTop:20,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    padding:15
  },
  totalIncom:{
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:5,
    borderRadius:15
  }
})
