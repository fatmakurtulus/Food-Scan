import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect, useContext } from 'react';
import { AsyncStorage ,View } from 'react-native';

import Feed from '../src/Feed';
import Details from '../src/details';
import Login from '../src/Login';
import Register from '../src/Register';
import Dashboard from '../src/Dashboard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Tab1 from '../tabs/Tab1';
import Scan from '../tabs/Scan';
import Tab3 from '../tabs/Tab3';

import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MaterialBottomTabs = createMaterialBottomTabNavigator();


const AuthStack = () => {


  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    
    AsyncStorage.getItem('alreadyLaunched').then(value => {

      
        if (value == null) {
          AsyncStorage.setItem('alreadyLaunched', true);
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }      
      
    });
   
  }, []);

  
    if (isFirstLaunch == null) {
      return null
    }
    else if (isFirstLaunch == true) {
      routeName = 'Home';
    } else {
      routeName = 'Login'
    }
  
  return (
    
<Stack.Navigator initialRouteName={routeName} >
<Stack.Screen name="Feed"
  component={Feed}
  options={{ header: () => null }} />
<Stack.Screen name="Details" component={Details}
   options={({navigation}) => ({
    title: '',
    headerStyle: {
      backgroundColor: '#f9fafd',
      shadowColor: '#f9fafd',
      elevation: 0,
    },
    headerLeft: () => (
      <View >
        <FontAwesome.Button 
          name="long-arrow-left"
          size={25}
          backgroundColor="#f9fafd"
          color="#333"
          onPress={() => navigation.navigate('Dashboard')}
        />
      </View>
    ),
  })} />
<Stack.Screen name="Login" component={Login}
  options={{ header: () => null }} />
<Stack.Screen name="Register" component={Register}
  options={{ header: () => null }}  />

<Stack.Screen name={'Dashboard'} children={createBottomTabs}
  options={{ header: () => null }} />
  </Stack.Navigator>
   

  );
};


createBottomTabs = () => {
  return <MaterialBottomTabs.Navigator>
    <MaterialBottomTabs.Screen name="Home" component={Tab1} />
    <MaterialBottomTabs.Screen name="Scan" component={Scan} />
    <MaterialBottomTabs.Screen name="Alergens" component={Tab3} />
  </MaterialBottomTabs.Navigator>
}



export default AuthStack;
