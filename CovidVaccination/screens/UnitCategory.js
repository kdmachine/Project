import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { icons } from '../constants';

const UnitCategory = ({ navigation }) => { 
    const [filteredData, setfilteredData] = React.useState([])
    const [masterData, setmasterData] = React.useState([])
    const [search, setsearch] = React.useState('')

    useEffect(() => {
        fetchPosts();
        return () => {

        }
    }, []) 

    const fetchPosts = () => {
        const apiURL = 'http://localhost:3000/dvtc'
        fetch(apiURL)
        .then((response) => response.json())
        .then((responseJson) => {
            setfilteredData(responseJson)
            setmasterData(responseJson)
        }).catch((error) => {
            console.error(error)
        })
    }

    const ItemView = ({item}) => {
        return (
            <View style={{flexDirection: 'row', width: '100%', }}>
                <View style={{width: '10%', alignItems: 'center', borderRightWidth: 1, borderColor: 'gray', paddingTop: 10, paddingBottom: 10, paddingLeft: 5,}}>
                    <Text style={styles.tableContent}>{item.dvtc_id}</Text>
                </View>
                <View style={{width: '50%', alignItems: 'left', borderRightWidth: 1, borderColor: 'gray', paddingTop: 10, paddingBottom: 10, paddingLeft: 5,}}>
                    <Text style={styles.tableContent}>{item.dvtc_name}</Text>
                </View>
                <View style={{width: '50%', alignItems: 'left', borderColor: 'gray', paddingTop: 10, paddingBottom: 10, paddingLeft: 5,}}>
                    <Text style={styles.tableContent}>{item.city}</Text>
                </View>
            </View>
        )
    }

    const ItemSeparatorView = () => {
        return (
            <View style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}} />
        )
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.dvtc_name ? item.dvtc_name : ''
                const textData = text
                return itemData.indexOf(textData) > -1
            })
        setfilteredData(newData)
        setsearch(text)
        } else {
            setfilteredData(masterData)
            setsearch(text)
        }
    }

    return (
        <View>
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#de1d2c', '#6b2a6e', '#263394']} style={{ width: '100%', height: 80, paddingTop: 20, alignItems: 'center', justifyContent:'center',}}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '500' }}>Danh mục đơn vị tiêm chủng</Text>
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

            <SafeAreaView>
                <View style = {styles.container}>
                    <Text style={styles.label}>Tìm kiếm</Text>
                    <TextInput 
                        style={styles.input}
                        value={search}
                        placeholder='Tra cứu đơn vị tiêm chủng tại đây'
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => searchFilter(text)}
                    />

                    <View style={{flexDirection: 'row', width: '100%', marginTop: 8, borderWidth: 1, borderLeftWidth: 0, borderColor: 'gray', backgroundColor: '#ccc'}}>
                        <View style={{width: '10%', alignItems: 'center', borderRightWidth: 1, borderColor: 'gray', paddingTop: 10, paddingBottom: 10}}>
                            <Text style={styles.tableTitle}>STT</Text>
                        </View>
                        <View style={{width: '50%', alignItems: 'center', borderRightWidth: 1, borderColor: 'gray', paddingTop: 10, paddingBottom: 10}}>
                            <Text style={styles.tableTitle}>Đơn vị tiêm chủng</Text>
                        </View>
                        <View style={{width: '40%', alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
                            <Text style={styles.tableTitle}>Địa chỉ</Text>
                        </View>
                    </View>

                    <FlatList 
                        data = {filteredData}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={ItemView}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 12,
    },
    label: {
        zIndex: 1,
        backgroundColor: 'white',
        color: 'gray',
        fontSize: 16,
        fontWeight: '500',
        position: 'absolute',
        top: 4,
        left: 20,
        paddingLeft: 3,
        paddingRight: 3,
    },
    input: {
        fontSize: 18,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 8,
        marginLeft: 12,
        marginRight: 12,
    },
    itemStyle: {
        padding: 15,
    },
    tableTitle: {
        fontSize: 14,
        fontWeight: '500',
    },
    tableContent: {
        fontSize: 14,
    }
})

export default UnitCategory;
