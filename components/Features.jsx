import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Features({features}) {
    // const [features, setFeatures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedFeature,setSelectedFeature] = useState()
    const router = useRouter();
// console.log(features);

    // handle Subfeature selection
    const handleSubFeatucher= async(id,type)=>{
        router.push(`/subcategory/${id}?type=${type}`)
        
    }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexDirection:"row",marginTop:15,gap:10,alignItems:'center',flexWrap:'wrap'}}>
                                {
                                    features?.length > 0 && features ? features.map(item=><View key={item.id}>
                                <TouchableOpacity style={styles.categoryView} onPress={()=>handleSubFeatucher(item.id,item.type)}>
                                <FontAwesome5 name="hand-holding-medical" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>{item.type}</Text>
                                </TouchableOpacity>
                                    </View>):<View><Text>There are no feature avilable</Text></View>
                                }
                                {/* <TouchableOpacity style={styles.categoryView}>
                                <MaterialIcons name="local-grocery-store" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Grocery</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialCommunityIcons name="book-education" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Education</Text>
                                </TouchableOpacity> */}
                            </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:0,
        justifyContent:'center',
        alignItems:'center',
        height:"auto",
        // marginBottom:200
    },
    // categoryView
    categoryView:{
        color:'#fff',
        alignItems:"center",
        gap:5,
        backgroundColor:"green",
        padding:5,
        borderRadius:5,
        width:100
        
    }
})