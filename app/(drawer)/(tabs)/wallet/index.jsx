import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

export default function Page() {
  return (
    <View style={{flex:1,alignItems:'center', backgroundColor:'green'}}>
      <View style={styles.topwallet}>
        <Text style={styles.rupees}> ₹ 1902.00</Text>
        <Text style={styles.balanceText}>Avaliable Balance</Text>
      </View>
      <View style={styles.bottomwallet} className='bg-gray-100 space-y-3'>
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
          <View className='w-full flex flex-row bg-white shadow-xl px-5 py-6 rounded-xl justify-between'>
            <View style={styles.service} className='flex align-middle justify-center text-center gap-3'>
            <FontAwesome6 name="money-bill-1" size={35} color="green" className=''/>
            <Text className='font-semibold'>Add Money</Text>
            </View>
            <View style={styles.service} className='flex align-middle justify-center text-center gap-3'>
            <FontAwesome6 name="money-check" size={35} color="orange" className=''/>
            <Text className='font-semibold'>Withdraw</Text>
            </View>
            <View style={styles.service} className='flex align-middle justify-center text-center gap-3'>
            <FontAwesome6 name="money-bill-transfer" size={35} color="blue" className=''/>
            <Text className='font-semibold'>Transfor</Text>
            </View>
          </View>
          <Text className='font-bold text-lg m-2'>Wallet History</Text>
          <View>
            <View>
              <Text>All</Text>
              <Text>Deposite</Text>
              <Text>Withdraw</Text>
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
  },
  service:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    // marginHorizontal:'auto'
  }
})
