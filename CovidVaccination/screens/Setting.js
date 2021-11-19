import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import { auth } from '../firebase';


const Setting = ({ navigation }) => { 

    const handleLogout = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }

    return (
        <View>
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#de1d2c', '#6b2a6e', '#263394']} style={{ width: '100%', height: 80, paddingTop: 20, alignItems: 'center', justifyContent:'center',}}>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>Cài đặt</Text>
            </LinearGradient>
            {/* Header button */}
            <TouchableOpacity onPress={handleLogout}>
                <Text style={{fontSize: 24, textAlign: 'center', justifyContent: 'center', paddingTop: 12,}}>Cài đặt chung</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleLogout}>
                <Text style={{fontSize: 24, textAlign: 'center', justifyContent: 'center', paddingTop: 12,}}>Đăng xuất</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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


export default Setting;
