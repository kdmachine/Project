import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar';
import { icons } from '../constants';

const Home = ({ navigation }) => {
    // Dummy Data
    const [destinations, setDestinations] = React.useState([
        {
            id: 0,
            name: "Hồ sơ cá nhân",
            img: icons.profile,
            scr: "ProfileTabs"
        },
        {
            id: 1,
            name: "Đăng ký tiêm",
            img: icons.register,
            scr: "InjectRegister"
        },
        {
            id: 2,
            name: "Danh mục vắc xin",
            img: icons.injection,
            scr: "VaccinCategory"
        },
        {
            id: 3,
            name: "Danh mục đơn vị tiêm chủng",
            img: icons.injectUnit,
            scr: "UnitCategory"
        },
        {
            id: 4,
            name: "Báo cáo thống kê tiêm vaccin",
            img: icons.protect,
            scr: "VaccinCertificate"
        },
    ]);

    // Render
    function renderDestinations(item) {
        return (
            <TouchableOpacity
                style={styles.category}
                onPress={() => { navigation.navigate(`${item.scr}`) }}
            >
                <Image source={item.img} resizeMode="contain" style={{ tintColor: '#263494', height: 42, width: 42,}}/>
                <Text style={{ fontSize: 26, fontWeight: '500', paddingLeft: 12,}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#de1d2c', '#6b2a6e', '#263394']} style={styles.container}>
            <Text style={styles.title}>Thông tin tiêm chủng vaccin Covid-19</Text>
            
            <View style={{ backgroundColor: 'white', width: '100%', height: '86%', borderTopRightRadius: 25, }}>
                <FlatList
                    // horizontal
                    style={{paddingTop: 24, paddingRight: 24,}}
                    showsHorizontalScrollIndicator={false}
                    data={destinations}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderDestinations(item, index)}
                />
            </View>
            <StatusBar style="light" />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        paddingTop: 50, 
        paddingBottom: 50, 
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title: {
        paddingLeft: 18,
        color: 'white', 
        fontSize: 40, 
        fontWeight: '600', 
        textTransform: 'uppercase',
        marginBottom: 50,
    },
    category: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#e3e3f2', 
        height: 80,   
        marginBottom: 12, 
        borderTopRightRadius: 20, 
        borderBottomRightRadius: 20, 
        alignItems: 'center',
        paddingLeft: 16,
    }
});

export default Home;
