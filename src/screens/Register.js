import { ImageBackground, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Input } from '@rneui/themed';
import AppButton from '../components/Button';
import React, { useState } from 'react';
import { nameValidator } from '../utils/validateUsername';
import { passwordValidator } from '../utils/validatePassword';
import { registerUser } from '../store/actions';
import { useDispatch } from 'react-redux';


export default function Register({ navigation }) {

    const [username, setUsername] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const user = { username: username.value, pswd: password.value }

    const dispatch = useDispatch();

    const onSignUpPressed = () => {
        const nameError = nameValidator(username.value)
        const passwordError = passwordValidator(password.value)
        if (passwordError || nameError) {
            setUsername({ ...username, error: nameError });
            setPassword({ ...password, error: passwordError });
            return
        }
        else if (username && password) {
            dispatch(registerUser(user));
        }};

    return (
        <View style={styles.container1}>
            <StatusBar style="dark-content" backgroundColor="#000000" translucent={true} />
            <ImageBackground source={require('../../assets/road.jpg')} resizeMode='cover' style={styles.image}>
                <View style={styles.container2}>
                    <Text style={styles.title1}>REGISTER</Text>
                    {/* <Text style={styles.title2}>User: {name}</Text> */}
                    <Input 
                        containerStyle={styles.logincontainer} 
                        inputStyle={styles.logincontainer}
                        placeholder={"Username"} 
                        value={username.value} 
                        errorMessage={username.error}
                        onChangeText={(text) => setUsername({ value: text, error: '' })} />
                    <Input 
                        containerStyle={styles.logincontainer} 
                        inputStyle={styles.logincontainer}
                        placeholder={"Password"} 
                        value={password.value} 
                        secureTextEntry={true}
                        errorMessage={password.error}
                        onChangeText={(text) => setPassword({ value: text, error: '' })} />
                    <AppButton buttonText="register here" onPress={onSignUpPressed} />
                    <Text style={styles.title2}>Already have an account?</Text>
                    <AppButton buttonText="Log In" onPress={() => navigation.navigate('Log In')} />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container1: {
        flex: 1
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logincontainer: {
        backgroundColor: 'black',
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    loginTextStyle: {
        color: 'white',
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    title1: {
        fontWeight: 'bold',
        color: '#e4e3d3',
        fontSize: 35,
        paddingVertical: 5,
        alignItems: 'center'
    },
    title2: {
        fontWeight: 'bold',
        color: '#e4e3d3',
        fontSize: 25,
        paddingVertical: 5,
        paddingBottom: 20,
        alignItems: 'center'
    }
});
