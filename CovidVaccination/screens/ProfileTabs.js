import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserProfile, InjectionProfile } from "../screens";
import { icons, COLORS } from '../constants';

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 14,

        elevation: 21,
    },
};

const ProfileTabs = ({ navigation }) => { 
    return (
        <View style={{height: '100%'}}>
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#de1d2c', '#6b2a6e', '#263394']} style={{ width: '100%', height: 80, paddingTop: 20, alignItems: 'center', justifyContent:'center',}}>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>Hồ sơ cá nhân</Text>
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

            <Tab.Navigator
                tabBarOptions={tabOptions}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        const tintColor = focused ? COLORS.primary : COLORS.gray;
                        switch (route.name) {
                            case "UserProfile":
                                return (
                                    <View style={{alignItems:'center'}}>
                                        <Image
                                            source={icons.profile}
                                            resizeMode="contain"
                                            style={{
                                                tintColor: tintColor,
                                                width: 25,
                                                height: 25
                                            }}
                                        />
                                        <Text style={{color: tintColor,}}>Thông tin cá nhân</Text>
                                    </View> 
                                );
                            case "InjectionProfile":
                                return (
                                    <View style={{alignItems:'center'}}>
                                        <Image
                                            source={icons.injection}
                                            resizeMode="contain"
                                            style={{
                                                tintColor: tintColor,
                                                width: 25,
                                                height: 25
                                            }}
                                        />
                                        <Text style={{color: tintColor,}}>Thông tin tiêm</Text>
                                    </View> 
                                );
                        }
                    }
                })}
            >
                <Tab.Screen
                    name="UserProfile"
                    component={UserProfile}
                />
                <Tab.Screen
                    name="InjectionProfile"
                    component={InjectionProfile}
                />
            </Tab.Navigator>
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
});

export default ProfileTabs;
