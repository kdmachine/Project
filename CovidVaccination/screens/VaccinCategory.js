import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';

const VaccinCategory = ({ navigation }) => { 
    const [destinations, setDestinations] = React.useState([
        {
            id: 0,
            name: "AstraZeneca",
            origin: "Tập đoàn AstraZeneca - Anh Quốc",
            age: "18",
            dosage: "2 liều cách nhau 8-12 tuần",
            quantity: "132.321",
        },
        {
            id: 1,
            name: "Gam-COVID-Vac ( SPUTNIK V )",
            origin: "Viện Nghiên cứu Gamaleya - Nga",
            age: "18",
            dosage: "2 liều cách nhau 3 tuần",
            quantity: "231.413",
        },
        {
            id: 2,
            name: "Vero Cell",
            origin: "Sinopharm và Beijing Institute of Biological Products Co. Ltd - Trung Quốc",
            age: "18",
            dosage: "2 liều cách nhau 3-4 tuần",
            quantity: "121.412",
        },
        {
            id: 3,
            name: "Spikevax ( Moderna )",
            origin: "Moderna - Hoa Kỳ",
            age: "18",
            dosage: "2 liều cách nhau 4 tuần",
            quantity: "123.231",
        },
        {
            id: 4,
            name: "Janssen",
            origin: "Janssen Pharmaceutica NV (Bỉ) và Janssen Biologics B.V (Hà Lan)",
            age: "18",
            dosage: "1 liều duy nhất",
            quantity: "312.513",
        },
        {
            id: 5,
            name: "Hayat - Vax",
            origin: "Công ty TNHH Viện Sinh phẩm Bắc Kinh - Trung Quốc",
            age: "18",
            dosage: "",
            quantity: "543.532",
        },
        {
            id: 6,
            name: "Abdala",
            origin: "Công ty AICA Laboraries, Base Business Unit (BBU) AICA - Cuba",
            age: "18",
            dosage: "",
            quantity: "213.432",
        },
        {
            id: 7,
            name: "Comirnaty",
            origin: "Pfizer/BioNTech - Hoa Kỳ",
            age: "18",
            dosage: "2 liều cách nhau 3-4 tuần",
            quantity: "413.123",
        },
    ]);
    
    function renderDestinations(item) {
        return (
            <View style={{ marginTop: 8, marginBottom: 8,paddingLeft: 12, paddingRight: 12, paddingBottom: 10, paddingTop: 5}}>
                <Text style={ styles.label}>{item.name}</Text>
                <View style={ styles.input}>
                    <View style={styles.infoWrap}>
                        <Text style={styles.info}>Xuất xứ: </Text>
                        <Text style={styles.details}>{item.origin}</Text>
                    </View>

                    <View style={styles.infoWrap}>
                        <Text style={styles.info}>Tuổi yêu cầu: </Text>
                        <Text style={styles.details}> {'>'} {item.age}</Text>
                        <Text style={styles.details}> tuổi</Text>
                    </View> 

                    <View style={styles.infoWrap}>
                        <Text style={styles.info}>Liều dùng: </Text>
                        <Text style={styles.details}>{item.dosage}</Text>
                    </View>  

                    <View style={styles.infoWrap}>
                        <Text style={styles.info}>Số lượng: </Text>
                        <Text style={styles.details}>{item.quantity}</Text>
                        <Text style={styles.details}> liều</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View>
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#de1d2c', '#6b2a6e', '#263394']} style={{ width: '100%', height: 80, paddingTop: 20, alignItems: 'center', justifyContent:'center',}}>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>Danh mục vắc xin</Text>
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

            <View style={{ backgroundColor: 'white', height: '100%'}}>
                <View style={{ padding: 12,}}>
                    <Text style={ styles.title }>Danh mục vắc xin được cấp phép tại Việt Nam</Text>
                    <Text style={{ position: 'absolute', right: 12, bottom: 0,}}>Cập nhật ngày 19/9/2021</Text>
                </View>

                <View style={{height: '72%'}}>
                    <FlatList
                        style={{height: '100%'}}
                        showsHorizontalScrollIndicator={false}
                        data={destinations}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => renderDestinations(item, index)}
                    />
                </View>  
            </View>
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
        // flexWrap: 'wrap',
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


export default VaccinCategory;
