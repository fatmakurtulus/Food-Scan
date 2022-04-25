import React, { useState } from "react";
import { Button, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

import firebase from '../config/Firebaseconf';
import FormButton from '../utils/FormButton';
import { Input } from "react-native-elements/dist/input/Input";

import { useRoute, } from '@react-navigation/native';



Login = ({ navigation }) => {


    const route = useRoute();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signIn = async () => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('Dashboard');
        } catch (err) {
            setError(err.message);
        }

    }


    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Image
                source={require('../assets/logo2.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Check it!</Text>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
            />

            <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {
                error ?
                    <Text style={{ color: 'red' }}>{error}</Text> : null
            }

            <FormButton
                buttonTitle="Sign In"
                onPress={() => signIn()}
            />

            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText} onPress={() => navigation.navigate('Register')}>
                    Don't have an acount? Create here
                </Text>
            </TouchableOpacity>
            <Text style={styles.forgotButton} title="Don't have an account yet? Sign up"
                onPress={() => navigation.navigate('Register')} />
            <Button title='Dashboard'
                onPress={() => navigation.navigate('Dashboard')} />
        </ScrollView>

    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {

        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'green',

    },
});