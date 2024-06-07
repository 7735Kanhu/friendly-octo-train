import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';

export default function Features({features}) {
    // const [features, setFeatures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedFeature,setSelectedFeature] = useState()
    const router = useRouter();


    // handle Subfeature selection
    const handleSubFeatucher= async(id)=>{
        router.push(`/subcategory/${id}`)
    }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexDirection:"row",marginTop:15,gap:10,alignItems:'center',flexWrap:'wrap'}}>
                                {
                                    features?.length > 0 && features ? features.map(item=><View key={item.id}>
                                <TouchableOpacity style={styles.categoryView} onPress={()=>handleSubFeatucher(item.type)}>
                                <FontAwesome5 name="hand-holding-medical" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>{item.type}</Text>
                                </TouchableOpacity>
                                    </View>):<View><Text>There are no feature avilable</Text></View>
                                }
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialIcons name="local-grocery-store" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Grocery</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialCommunityIcons name="book-education" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Education</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <FontAwesome5 name="hand-holding-medical" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Medical</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialIcons name="local-grocery-store" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Grocery</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialCommunityIcons name="book-education" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Education</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialCommunityIcons name="book-education" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Education</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <FontAwesome5 name="hand-holding-medical" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Medical</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <FontAwesome5 name="hand-holding-medical" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Medical</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <FontAwesome5 name="hand-holding-medical" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Medical</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialIcons name="local-grocery-store" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Grocery</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialCommunityIcons name="book-education" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Education</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <FontAwesome5 name="hand-holding-medical" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Medical</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialIcons name="local-grocery-store" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Grocery</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialCommunityIcons name="book-education" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Education</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <FontAwesome5 name="hand-holding-medical" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Medical</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialIcons name="local-grocery-store" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Grocery</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialCommunityIcons name="book-education" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Education</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <FontAwesome5 name="hand-holding-medical" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Medical</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialIcons name="local-grocery-store" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Grocery</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialCommunityIcons name="book-education" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Education</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <FontAwesome5 name="hand-holding-medical" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Medical</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialIcons name="local-grocery-store" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Grocery</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialCommunityIcons name="book-education" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Education</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <FontAwesome5 name="hand-holding-medical" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Medical</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialIcons name="local-grocery-store" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Grocery</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialCommunityIcons name="book-education" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Education</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <FontAwesome5 name="hand-holding-medical" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Medical</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialIcons name="local-grocery-store" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Grocery</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryView}>
                                <MaterialCommunityIcons name="book-education" size={24} color="#fff" />
                                <Text style={{color:'#fff'}}>Education</Text>
                                </TouchableOpacity>
                            </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
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