import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function ServiceHistory() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
        <View style={styles.historyCard}>
            <View style={styles.cardBody}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Akshya Kumar</Text>
            <Text style={{color:"#999595"}}>Medicne</Text>
            <Text style={{color:"#999595"}}>05.06.2024</Text>
            </View>
            <View>
                <Text style={{fontSize:15,fontWeight:"bold",color:"green",textAlign:"right"}}>₹ 140.00</Text>
                <View style={styles.tag}>
                    <Text style={{margin:"auto"}}>Pending</Text>
                </View>
            </View>
        </View>
        <View style={styles.historyCard}>
            <View style={styles.cardBody}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Sunil Sethy</Text>
            <Text style={{color:"#999595"}}>Grocery</Text>
            <Text style={{color:"#999595"}}>02.06.2024</Text>
            </View>
            <View>
                <Text style={{fontSize:15,fontWeight:"bold",color:"green",textAlign:"right"}}>₹ 440.20</Text>
                <View style={styles.tagComplete}>
                    <Text style={{margin:"auto",color:"#fff"}}>complete</Text>
                </View>
            </View>
        </View>
        <View style={styles.historyCard}>
            <View style={styles.cardBody}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Pradyumna Ojha</Text>
            <Text style={{color:"#999595"}}>Vehicle</Text>
            <Text style={{color:"#999595"}}>30.05.2024</Text>
            </View>
            <View>
                <Text style={{fontSize:15,fontWeight:"bold",color:"green",textAlign:"right"}}>₹ 1188.00</Text>
                <View style={styles.tagComplete}>
                    <Text style={{margin:"auto",color:"#fff"}}>complete</Text>
                </View>
            </View>
        </View>
        <View style={styles.historyCard}>
            <View style={styles.cardBody}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Dev Kumar</Text>
            <Text style={{color:"#999595"}}>Worker</Text>
            <Text style={{color:"#999595"}}>05.06.2024</Text>
            </View>
            <View>
                <Text style={{fontSize:15,fontWeight:"bold",color:"red",textAlign:"right"}}>₹ 40.00</Text>
                <View style={styles.tagCanceled}>
                    <Text style={{margin:"auto",color:"#fff"}}>canceled</Text>
                </View>
            </View>
        </View>
        <View style={styles.historyCard}>
            <View style={styles.cardBody}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Pradip Sutar</Text>
            <Text style={{color:"#999595"}}>Vehicle</Text>
            <Text style={{color:"#999595"}}>30.05.2024</Text>
            </View>
            <View>
                <Text style={{fontSize:15,fontWeight:"bold",color:"green",textAlign:"right"}}>₹ 1188.00</Text>
                <View style={styles.tagComplete}>
                    <Text style={{margin:"auto",color:"#fff"}}>complete</Text>
                </View>
            </View>
        </View>
        <View style={styles.historyCard}>
            <View style={styles.cardBody}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Kangana Raut</Text>
            <Text style={{color:"#999595"}}>Vehicle</Text>
            <Text style={{color:"#999595"}}>30.05.2024</Text>
            </View>
            <View>
                <Text style={{fontSize:15,fontWeight:"bold",color:"green",textAlign:"right"}}>₹ 738.00</Text>
                <View style={styles.tagComplete}>
                    <Text style={{margin:"auto",color:"#fff"}}>complete</Text>
                </View>
            </View>
        </View>
        <View style={styles.historyCard}>
            <View style={styles.cardBody}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Pradyumna Ojha</Text>
            <Text style={{color:"#999595"}}>Vehicle</Text>
            <Text style={{color:"#999595"}}>30.05.2024</Text>
            </View>
            <View>
                <Text style={{fontSize:15,fontWeight:"bold",color:"green",textAlign:"right"}}>₹ 1188.00</Text>
                <View style={styles.tagComplete}>
                    <Text style={{margin:"auto",color:"#fff"}}>complete</Text>
                </View>
            </View>
        </View>
        <View style={styles.historyCard}>
            <View style={styles.cardBody}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Pradyumna Ojha</Text>
            <Text style={{color:"#999595"}}>Vehicle</Text>
            <Text style={{color:"#999595"}}>30.05.2024</Text>
            </View>
            <View>
                <Text style={{fontSize:15,fontWeight:"bold",color:"green",textAlign:"right"}}>₹ 1188.00</Text>
                <View style={styles.tagComplete}>
                    <Text style={{margin:"auto",color:"#fff"}}>complete</Text>
                </View>
            </View>
        </View>
        <View style={styles.historyCard}>
            <View style={styles.cardBody}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Pradyumna Ojha</Text>
            <Text style={{color:"#999595"}}>Vehicle</Text>
            <Text style={{color:"#999595"}}>30.05.2024</Text>
            </View>
            <View>
                <Text style={{fontSize:15,fontWeight:"bold",color:"green",textAlign:"right"}}>₹ 1188.00</Text>
                <View style={styles.tagComplete}>
                    <Text style={{margin:"auto",color:"#fff"}}>complete</Text>
                </View>
            </View>
        </View>
        <View style={styles.historyCard}>
            <View style={styles.cardBody}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Pradyumna Ojha</Text>
            <Text style={{color:"#999595"}}>Vehicle</Text>
            <Text style={{color:"#999595"}}>30.05.2024</Text>
            </View>
            <View>
                <Text style={{fontSize:15,fontWeight:"bold",color:"green",textAlign:"right"}}>₹ 1188.00</Text>
                <View style={styles.tagComplete}>
                    <Text style={{margin:"auto",color:"#fff"}}>complete</Text>
                </View>
            </View>
        </View>
        <View style={styles.historyCard}>
            <View style={styles.cardBody}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Akshya Kumar</Text>
            <Text style={{color:"#999595"}}>Medicne</Text>
            <Text style={{color:"#999595"}}>05.06.2024</Text>
            </View>
            <View>
                <Text style={{fontSize:15,fontWeight:"bold",color:"red",textAlign:"right"}}>₹ 240.00</Text>
                <View style={styles.tagCanceled}>
                    <Text style={{margin:"auto",color:"#fff"}}>canceled</Text>
                </View>
            </View>
        </View>
        <View style={styles.historyCard}>
            <View style={styles.cardBody}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Pradyumna Ojha</Text>
            <Text style={{color:"#999595"}}>Vehicle</Text>
            <Text style={{color:"#999595"}}>05.03.2024</Text>
            </View>
            <View>
                <Text style={{fontSize:15,fontWeight:"bold",color:"green",textAlign:"right"}}>₹ 1500.00</Text>
                <View style={styles.tagComplete}>
                    <Text style={{margin:"auto",color:"#fff"}}>complete</Text>
                </View>
            </View>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
    marginTop:20
  },
  historyCard:{
    backgroundColor:"#fff",
    padding:10,
    borderRadius:5,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  tag:{
    marginTop:10,
    borderRadius:50,
    borderColor:"#f3a90a",
    borderWidth:1,
    padding:2,
    paddingHorizontal:10,
    backgroundColor:"#f3c05399"
  },
  tagComplete:{
    marginTop:10,
    borderRadius:50,
    borderColor:"green",
    borderWidth:1,
    padding:2,
    paddingHorizontal:10,
    backgroundColor:"green",
  },
  tagCanceled:{
    marginTop:10,
    borderRadius:50,
    borderColor:"red",
    borderWidth:1,
    padding:2,
    paddingHorizontal:10,
    backgroundColor:"#f72828e2",
  },
  scrollView:{
    gap:5
  }
})
