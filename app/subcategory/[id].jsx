import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Dimensions,Modal } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import apiUrl from '../../apiUrl';
import { Feather } from '@expo/vector-icons';

const Subcategory = () => {
    const { id, type } = useLocalSearchParams();
    const [subFeature, setSubFeature] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const screenWidth = Dimensions.get('window').width;

    const handleFetchSubFeature = async () => {
        try {
            const response = await axios.get(`${apiUrl}subfeature_view/${id}/`);
            setSubFeature(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (id) {
            handleFetchSubFeature();
        }
    }, [id]);
// handle Search
    const handleSearch = (text) => {
        setSearchQuery(text);
    };
// filter Query
    const filteredFeatures = subFeature.filter(item => 
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Open Modal
    const openModal = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };
    // close Modal
    const closeModal = () => {
        setModalVisible(false);
        setSelectedItem(null);
    };
    // request submit
    const handleRequest = () => {
        // Handle the request action here
        console.log('Request button pressed for:', selectedItem);
        // You can close the modal after the request is handled
        closeModal();
    };

    return (
        <>
            <Stack.Screen 
                options={{ 
                    headerTitle: `Category ${type || 'Subcategory'}`, 
                    headerStyle: { backgroundColor: "green" }, 
                    headerTintColor: "#fff" 
                }}
            />
            <View style={styles.container}>
                <Text style={{ fontSize: 17, marginTop: 10, fontWeight: "bold" }}>
                    Your SubCategory of Help
                </Text>
                <View style={styles.searchBox}>
                    <Feather name="search" size={24} color="black" />
                    <TextInput 
                        placeholder='Search Here' 
                        style={{ width: '100%' }} 
                        value={searchQuery}
                        onChangeText={handleSearch}
                    />
                </View>
                <ScrollView 
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={[styles.scrollview, { width: screenWidth }]}
                >
                    {filteredFeatures.length > 0 ? (
                        filteredFeatures.map((item) => (
                            <TouchableOpacity key={item.id} style={styles.features} onPress={() => openModal(item.type)}>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
                                    {item.type}
                                </Text>
                            </TouchableOpacity>
                        ))
                    ) : (
                        <Text>There are no features available</Text>
                    )}
                </ScrollView>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ textAlign: "center", color: "gray" }}>
                        By Press Your Help request will be created
                    </Text>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{selectedItem}</Text>
                        <View style={styles.buttomContainer}>
                        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                            <Text style={{ color: '#fff' }}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.requestButton} onPress={handleRequest}>
                        <Text style={{ color: '#fff' }}>Request</Text>
                    </TouchableOpacity>
                        </View>
                    </View>
            </Modal>
        </>
    );
};

export default Subcategory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        marginHorizontal: "auto"
    },
    searchBox: {
        flexDirection: 'row',
        borderColor: '#000',
        borderWidth: 1,
        marginTop: 20,
        width: "80%",
        padding: 5,
        borderRadius: 50,
        alignItems: "center",
        paddingHorizontal: 10,
        gap: 5
    },
    scrollview: {
        flex: 1,
        marginTop: 10,
        gap: 10,
        padding: 10,
    },
    features: {
        flexDirection: "row",
        backgroundColor: "green",
        padding: 15,
        borderRadius: 5,
        marginRight: 20
    },
    // Modal css
    modalView: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
        marginVertical:"auto",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize:20,
    },
    closeButton: {
        backgroundColor: "green",
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        height:40
    },
    requestButton: {
        backgroundColor: "green",
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        // marginTop: 10,
        height:40
    },
    buttomContainer:{
        flexDirection:"row",
        gap:10
    }
});
