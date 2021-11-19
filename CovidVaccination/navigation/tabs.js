import React from "react";
import { Image, Text, View,} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { auth } from "../firebase";

import { Home, NotificationCenter, Schedule, Setting } from "../screens/";
import { icons, COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
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

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray;

                    switch (route.name) {
                        case "Home":
                            return (
                                <View style={{alignItems:'center'}}>
                                    <Image
                                        source={icons.home}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 25,
                                            height: 25
                                        }}
                                    />
                                    <Text style={{ color: tintColor, }}>Trang chủ</Text>
                                </View> 
                            );
                        case "Schedule":
                            return (
                                <View style={{alignItems:'center'}}>
                                    <Image
                                        source={icons.schedule}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 25,
                                            height: 25
                                        }}
                                    />
                                    <Text style={{ color: tintColor, }}>Lịch hẹn</Text>
                                </View> 
                            );
                        case "NotificationCenter":
                            return (
                                <View style={{alignItems:'center'}}>
                                    <Image
                                        source={icons.notify}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 25,
                                            height: 25
                                        }}
                                    />
                                    <Text style={{ color: tintColor, }}>Thông báo</Text>
                                </View> 
                            );
                        case "Setting":
                            return (
                                <View style={{alignItems:'center'}}>
                                    <Image
                                        source={icons.setting}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 25,
                                            height: 25
                                        }}
                                    />
                                    <Text style={{ color: tintColor, }}>Cài đặt</Text>
                                </View> 
                            );
                    }
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Schedule"
                component={Schedule}
            />
            <Tab.Screen
                name="NotificationCenter"
                component={NotificationCenter}
            />
            <Tab.Screen
                name="Setting"
                component={Setting}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
