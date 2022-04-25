import React,{Component} from 'react';
import {View, Text,Button} from 'react-native';

import {styles} from '../src/styles';
import firebaseMethod from '../api/firebaseMethod';
import {useNavigation,useRoute} from '@react-navigation/native';



Tab1 = ()=>



<View style={styles.center}>
    <Text style={styles.title}>
        Welcome
    </Text>
    <View >
<Text style={styles.icerik}> You can check your product using barcode scanner.</Text>
</View>

   
</View>


export default Tab1;