import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import firebase from '../config/Firebaseconf';
import FormButton from '../utils/FormButton';

import { useRoute, } from '@react-navigation/native';
import { Input } from "react-native-elements/dist/input/Input";


Register = ({ navigation }) => {

  const route = useRoute();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signUp = async () => {
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      navigation.navigate('Login');
    } catch (err) {
      setError(err.message);
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
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
        buttonTitle="Sign Up"
        onPress={() => signUp()}
      />


      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>

  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {

    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'green',

  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
  },
});