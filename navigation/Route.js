import React ,{useContext,useEffect,useState}from 'react';
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {AuthContext} from '../config/AuthProvider';
import auth from '@react-native-firebase/auth';


const Route =()=>{
    return(
        <NavigationContainer>
           <AuthStack /> 
        </NavigationContainer>
    );
};
export default Route;