import React from 'react';
import { TextInput, Text, View, StyleSheet, FlatList, } from 'react-native';

const UserProfile = () => { 
    const [fullName_value, fullName] = React.useState('Trần Thanh Phong');
    const [dob_value, dob] = React.useState('2/7/2000');
    const [sex_value, sex] = React.useState('Nam');
    const [phone_value, phone] = React.useState('0852569889');
    const [idCard_value, idCard] = React.useState('113782135');
    const [address_value, address] = React.useState('Nguyễn Trãi, Hà Nội');

    const [destinations, setDestinations] = React.useState([
        {
            id: 0,
            name: "Họ và tên",
            type: fullName,
            value: fullName_value,
        },
        {
            id: 1,
            name: "Ngày sinh/Giới tính",
        },

        {
            id: 2,
            name: "Số điện thoại",
            type: phone,
            value: phone_value,
        },
        {
            id: 3,
            name: "Số CMND",
            type: idCard,
            value: idCard_value,
        },
        {
            id: 4,
            name: "Địa chỉ hiện tại",
            type: address,
            value: address_value,
        },
    ]);
    
    function renderDestinations(item) {
        if (item.id != 1) {
            return (
                <View style={{ marginTop: 8, marginBottom: 8,paddingLeft: 12, paddingRight: 12, width: '100%'}}>
                    <Text style={ styles.label}>{item.name}</Text>
                    <TextInput 
                        style={ styles.input}
                        onChangeText={text => (item.type)(text)}
                        value={item.value}
                    />
                </View>
            )
        }
        else {
            return (
                <View style={{ marginTop: 8, marginBottom: 8,paddingLeft: 12, paddingRight: 12, flexDirection: 'row'}}>
                    <View style={{ width: '50%'}}>
                        <Text style={{position: 'absolute', zIndex: 1, top: -8, left: 10, fontSize: 16, fontWeight: '500', paddingLeft: 3, paddingRight: 3, backgroundColor: 'white' , color: 'gray'}}>Ngày sinh</Text>
                        <TextInput 
                            style={ styles.input}
                            onChangeText={dob}
                            value={dob_value}
                        />
                    </View>

                    <View style={{ width: '50%', paddingLeft: '5%',}}>
                        <Text style={{position: 'absolute', zIndex: 1, top: -8, left: 28, fontSize: 16, fontWeight: '500', paddingLeft: 3, paddingRight: 3, backgroundColor: 'white' , color: 'gray'}}>Giới tính</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={sex}
                            value={sex_value}
                        />
                    </View>
                </View> 
            )
        }
    }

    return (
            <View style={{ backgroundColor: 'white', height: '100%'}}>
                <Text style={ styles.title }>Thông tin cá nhân</Text>
                <View style={{height: '85%'}}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={destinations}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => renderDestinations(item, index)}
                    />
                </View>  
            </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: '600',
        paddingBottom: 10,
        padding: 12,
    },
    label: {
        zIndex: 1,
        backgroundColor: 'white',
        color: 'gray',
        fontSize: 16,
        fontWeight: '500',
        position: 'absolute',
        top: -8,
        left: 20,
        paddingLeft: 3,
        paddingRight: 3,
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

export default UserProfile;
