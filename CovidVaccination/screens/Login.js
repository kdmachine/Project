import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Animated, StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Easing } from 'react-native-reanimated';
import { images } from '../constants';
import { auth } from '../firebase'

const Login = ({ navigation }) => {
    const [email,  setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            }
        })
        return unsubcribe
    }, [])

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user
            console.log('Đăng nhập với:', user.email)
        })
        .catch(error => alert('Tên tài khoản hoặc mật khẩu không đúng'))
    }

    //rotate
    let spinValue = new Animated.Value(0);
    // First set up animation 
    Animated.loop(
        Animated.timing(
            spinValue,{
                toValue: 1,
                duration: 50000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )
    ).start();

    // Next, interpolate beginning and end values (in this case 0 and 1)
    const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
    })
    
    // Render
    return (
        <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#de1d2c', '#6b2a6e', '#263394']} style={styles.container}>
            <View style={{ alignItems: 'center', marginTop: 30, marginBottom: 10}}>
                <Animated.Image 
                    source={images.loginLogo}
                    // resizeMode="contain"
                    style={{
                        marginTop: 15,
                        width: 150,
                        height: 150,
                        transform: [{ rotate: spin}],
                }} />
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center',}}>
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: '600', justifyContent: 'center', alignItems: 'center'}}>Thông tin tiêm chủng COVID-19</Text>
                    <Text style={{ color: 'gray', marginTop: 12, textAlign: 'center', fontSize: 16, }}>Vui lòng đăng nhập để sử dụng dịch vụ</Text>
                </View>

                <SafeAreaView style={{ width: '70%', marginTop: 15, } }>
                    <TextInput
                        style={styles.inputLogin}
                        onChangeText={setEmail}
                        value={email}
                        placeholder='Email đăng nhập'
                        placeholderTextColor="#ccc"
                    />
                    <TextInput
                        style={styles.inputPassword}
                        onChangeText={setPassword}
                        value={password}
                        placeholder='Mật khẩu'
                        placeholderTextColor="#ccc"
                        secureTextEntry
                    />
                </SafeAreaView>

                <TouchableOpacity
                    style={[styles.shadow, { marginTop: 15, marginBottom: 12, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 12 }]}
                    onPress={handleLogin}
                >
                    <LinearGradient
                        style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 12 }}
                        colors={['#682a70', '#263494']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={{ color: 'white', fontSize: 24, fontWeight: '600', }}>Đăng nhập</Text>
                    </LinearGradient>
                </TouchableOpacity>

                {/* <TouchableOpacity>
                    <Text style={styles.optionLabel}>Quên mật khẩu</Text>
                </TouchableOpacity> */}
                <View style={{ flexDirection: 'row'}}>
                    <Text style={{ color: 'white', fontSize: 18, paddingRight: 4, paddingTop: 12,}}>Bạn chưa có tài khoản?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.optionLabel}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View> 

            <StatusBar style="light" />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,

        elevation: 5,
    },
    inputLogin: {
        backgroundColor: 'white',
        color: 'black',
        width: '100%',
        height: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingLeft: 15,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    inputPassword: {
        backgroundColor: 'white',
        color: 'black',
        width: '100%',
        height: 50,
        fontSize: 18,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#ccc',
        paddingLeft: 15,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    optionLabel: {
        color: '#00BFFF',
        fontSize: 20,
        fontWeight: '400',
        paddingTop: 10,
    }
});

export default Login;
