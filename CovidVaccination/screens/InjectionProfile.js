import React from 'react';
import { Text, View, StyleSheet,FlatList, } from 'react-native';

const InjectionProfile = () => { 
    const [destinations, setDestinations] = React.useState([
        {
            id: 0,
            status: 1,
            name: "Mũi số 1",
            location: "BVDK Hà Đông",
            vaccin: "AstraZeneca",
            time: "10h00",
            date: "6/9/2021"
        },
        {
            id: 1,
            status: 2,
            name: "Mũi số 2",
            location: "BVDK Hà Đông",
            vaccin: "AstraZeneca",
            time: "10h00",
            date: "6/10/2021"
        },
    ]);
    
    function renderDestinations(item) {
        if( item.status === 1 ) {
            return (
                <View style={{ marginTop: 8, marginBottom: 8,paddingLeft: 12, paddingRight: 12, width: '100%', paddingBottom: 10, paddingTop: 5}}>
                    <Text style={styles.label}>{item.name}</Text>
                    <View style={styles.input}>
                        <View style={styles.infoWrap}>
                            <Text style={styles.info}>Đơn vị tiêm:</Text>
                            <Text style={styles.details}>{item.location}</Text>
                        </View>
    
                        <View style={styles.infoWrap}>
                            <Text style={styles.info}>Tên vắc xin: </Text>
                            <Text style={styles.details}>{item.vaccin}</Text>
    
                        </View>
    
                        <View style={styles.infoWrap}>
                            <Text style={styles.info}>Giờ tiêm: </Text>
                            <Text style={styles.details}>{item.time}</Text>
                        </View> 
    
                        <View style={styles.infoWrap}>
                            <Text style={styles.info}>Ngày tiêm: </Text>
                            <Text style={styles.details}>{item.date}</Text>
                        </View>   
                    </View>
                </View>
            )
        }
        else {
            return (
                <View style={{ marginTop: 8, marginBottom: 8,paddingLeft: 12, paddingRight: 12, width: '100%', paddingBottom: 10, paddingTop: 5}}>
                    <Text style={styles.label}>{item.name}</Text>
                        <View style={styles.input}><View style={styles.infoWrap}>
                            <Text style={styles.info}>Chưa có thông tin tiêm</Text>
                        </View>         
                    </View>
                </View>
            )
        }
    }

    return (
        <View style={{ backgroundColor: 'white', height: '100%'}}>
            <Text style={ styles.title }>Thông tin tiêm chủng</Text>
            <View style={{height: '85%'}}>
                <FlatList
                    style={{height: '100%'}}
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
        height: 160,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 8,
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
        paddingLeft: 5,
    }
});

export default InjectionProfile;
