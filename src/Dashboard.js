import React, { useEffect, useState } from 'react';
import { View, Text, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import {loggingOut} from '../api/firebaseMethod';

import { styles } from './styles';

export default function Dashboard({ navigation }) {


  
  return (
    <View >
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.textInput}>Hi {firstName}</Text>
      <TouchableOpacity style={styles.buton} onPress={handlePress}>
        <Text style={styles.buton}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}