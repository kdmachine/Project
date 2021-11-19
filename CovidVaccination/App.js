import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { Login, InjectRegister, VaccinCategory, UnitCategory, ProfileTabs, VaccinCertificate, Register } from "./screens/";
import Tabs from "./navigation/tabs";
import { useFonts } from 'expo-font';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {
    const [loaded] = useFonts({
        "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
    })

    if(!loaded){
    return null;
    }
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Login'}
            >
                {/* Screens */}
                <Stack.Screen
                    name="Login"
                    component={Login}
                />

                <Stack.Screen
                    name="Register"
                    component={Register}
                />
                
                {/* <Stack.Screen
                    name="UserProfile"
                    component={UserProfile}
                    options={{ headerShown: false }}
                /> */}

                <Stack.Screen
                    name="InjectRegister"
                    component={InjectRegister}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="VaccinCategory"
                    component={VaccinCategory}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="UnitCategory"
                    component={UnitCategory}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="ProfileTabs"
                    component={ProfileTabs}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="VaccinCertificate"
                    component={VaccinCertificate}
                    options={{ headerShown: false }}
                />

                {/* Tabs */}
                < Stack.Screen
                    name="Home"
                    component={Tabs}
                />

                
            </Stack.Navigator>
        </NavigationContainer >
    );
};

export default () => {
    return <App />;
};
