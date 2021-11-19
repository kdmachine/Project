import React from 'react';
import { TextInput,Text, View, TouchableOpacity, Image, StyleSheet, FlatList, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { images, icons, COLORS, FONTS, SIZES, theme } from '../constants';

const InjectRegister = ({ navigation }) => { 
    const [injection_value, injection] = React.useState("");
    const [fullName_value, fullName] = React.useState("");
    const [dob_value, dob] = React.useState("");
    const [sex_value, sex] = React.useState("");
    const [phone_value, phone] = React.useState("");
    const [idCard_value, idCard] = React.useState("");
    const [address_value, address] = React.useState("");

    const [destinations, setDestinations] = React.useState([
        {
            id: 0,
            name: "Đăng ký mũi tiêm thứ",
            req: "(*)",
            type: injection,
            value: injection_value,
            placeHolder: "Mũi tiêm thứ",
        },
        {
            id: 1,
            name: "Tiền sử bệnh",
            req: "(*)",
            type: fullName,
            value: fullName_value,
            placeHolder: "Tiền sử bệnh nền",
        },
        {
            id: 2,
            name: "Ngày muốn được tiêm (Dự kiến)",
            req: "",
            type: fullName,
            value: dob_value,
            placeHolder: "Ngày muốn được tiêm",
        },
        {
            id: 3,
            name: "Buổi tiêm mong muốn",
            req: "",
            type: phone,
            value: phone_value,
            placeHolder: "Buổi tiêm mong muốn",
        },
    ]);
    
    function renderDestinations(item) {
        return (
            <View style={{ marginTop: 8, marginBottom: 8,paddingLeft: 12, paddingRight: 12, width: '100%'}}>
                <View style={ styles.label}>
                    <Text style={{fontSize: 16, fontWeight: '500', color: 'gray', paddingRight: 2,}}>{item.name}</Text>
                    <Text style={{fontSize: 16, fontWeight: '500', color: 'red'}}>{item.req}</Text>
                </View>
                <TextInput 
                    style={ styles.input}
                    onChangeText={text => (item.type)(text)}
                    value={item.value}
                    placeholder={`${item.placeHolder}`}
                />
            </View>
        )
    }


    return (
        <View>
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#de1d2c', '#6b2a6e', '#263394']} style={{ width: '100%', height: 80, paddingTop: 20, alignItems: 'center', justifyContent:'center',}}>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>Đăng ký tiêm</Text>
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
            
            {/* Content */}
            
            <View style={{ backgroundColor: 'white', height: '100%'}}>
                <View style={{ paddingBottom: 10, padding: 12,}}>
                    <Text style={{ fontSize: 24, fontWeight: '600', paddingBottom: 3,}}>Thông tin đăng ký</Text>
                    <Text style={{color: 'red'}}>Vui lòng điền đầy đủ thông tin có dấu sao (*)</Text>
                </View>
                

                <View style={{height: '72%',}}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={destinations}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => renderDestinations(item, index)}
                    />

                    <TouchableOpacity
                        style={[styles.shadow, { marginTop: 6, width: '100%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <LinearGradient
                            style={{ height: '80%', width: '50%', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}
                            colors={['#682a70', '#263494']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Tiếp tục</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        zIndex: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: -8,
        left: 20,
        paddingLeft: 3,
        paddingRight: 3,
        flexDirection: 'row',
    },
    input: {
        fontSize: 18,
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 8,
    },
});

export default InjectRegister;
