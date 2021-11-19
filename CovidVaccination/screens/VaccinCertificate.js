import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';



const VaccinCertificate = ({ navigation }) => { 

    return (
        <View>
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#de1d2c', '#6b2a6e', '#263394']} style={{ width: '100%', height: 80, paddingTop: 20, alignItems: 'center', justifyContent:'center',}}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '500' }}>Thống kê tiêm chủng</Text>
            </LinearGradient>
            {/* Header button */}
            <View
                style={{
                    position: 'absolute',
                    top: 42,
                    left: 10,
                    right: 5,
                    flexDirection: 'row',
                }}
            >
                <View style={{ flex: 1}}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Home')}}
                    >
                        <View style={{ flex: 1, flexDirection: 'row',}}>
                            <Image
                                source={icons.back}
                                resizeMode="cover"
                                style={{
                                    tintColor: 'white',
                                    width: 15,  
                                    height: 15, 
                                    position: 'absolute',
                                    top: 1,
                                }}  
                            />
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: '600', paddingLeft: 16,}}>Quay lại</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>                
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff"
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        paddingBottom: 8,
    },
    label: {
        zIndex: 1,
        backgroundColor: 'white',
        color: 'gray',
        fontSize: 20,
        fontWeight: '500',
        position: 'absolute',
        top: -6,
        left: 20,
        paddingLeft: 3,
        paddingRight: 3,
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 8,
        flexWrap: 'wrap',
        minHeight: 160,
    },
    infoWrap: {
        flexDirection: 'row', 
        paddingTop: 10, 
        paddingBottom: 5,
    },
    info: {
        fontSize: 18,
        fontWeight: '500',
    },
    details: {
        fontSize: 18,
        fontWeight: '400',
        maxWidth: 310,
    }
});


export default VaccinCertificate;
