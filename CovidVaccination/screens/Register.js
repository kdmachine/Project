import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Animated, StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Easing } from 'react-native-reanimated';
import { images } from '../constants';
import { auth } from '../firebase'

const Register = ({ navigation }) => {
    const [email,  setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [password2, setPassword2] = React.useState("")


    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user
            console.log(user.email)
        })
        .catch(error => alert('Đăng ký không thành công vui lòng thử lại'))
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
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: '600',}}>Thông tin tiêm chủng COVID-19</Text>
                    <Text style={{ color: 'gray', marginTop: 12, textAlign: 'center', fontSize: 16, }}>Vui lòng nhập thông tin đăng ký tài khoản</Text>
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
                        style={{backgroundColor: 'white', color: 'black', width: '100%', height: 50, fontSize: 18, borderWidth: 1, borderTopWidth: 0, borderTopWidth: 0, borderColor: '#ccc', paddingLeft: 15,}}
                        onChangeText={setPassword}
                        value={password}
                        placeholder='Mật khẩu'
                        placeholderTextColor="#ccc"
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.inputPassword}
                        onChangeText={setPassword2}
                        value={password2}
                        placeholder='Nhập lại mật khẩu'
                        placeholderTextColor="#ccc"
                        secureTextEntry
                    />
                </SafeAreaView>

                <TouchableOpacity
                    style={[styles.shadow, { marginTop: 15, marginBottom: 12, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                    onPress={handleSignUp}
                >
                    <LinearGradient
                        style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}
                        colors={['#682a70', '#263494']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={{ color: 'white', fontSize: 24, fontWeight: '600', }}>Đăng ký</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row'}}>
                    <Text style={{ color: 'white', fontSize: 18, paddingRight: 4, paddingTop: 12,}}>Bạn đã có tài khoản?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.optionLabel}>Đăng nhập</Text>
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

export default Register;
