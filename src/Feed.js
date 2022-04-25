import React, { Component } from 'react';
import { Text, View, Button ,Image} from 'react-native';
import { styles } from './styles';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import { useNavigation, useRoute } from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';
import { TouchableOpacity } from 'react-native';

Feed = ({navigation}) => {

    
    const Done = ({ isLight, ...props }) => (
        <TouchableOpacity
          style={{marginHorizontal:10}}    
          {...props}
        ><Text>Done</Text></TouchableOpacity>
      );

    return (

<Onboarding
      DoneButtonComponent={Done}
        onSkip={()=>navigation.replace("Login")}
        onDone={()=>navigation.navigate("Login")}

  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/food.jpg')} />,
      title: '',
      subtitle: '',
    },
    {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/alergen.png')} />,
        title: '',
        subtitle: '',
      },
  ]}
/>
      

    );
}


export default Feed;


/*
  <Onboarding
      DoneButtonComponent={Done}
        onSkip={()=>navigation.replace("Dashboard")}
        onDone={()=>navigation.navigate("Dashboard")}

  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/favicon.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/icon.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
  ]}
/>

<View style={styles.center}>
<View>
    <Text>homePage</Text>
</View>
<Text style={styles.title} >
 Navigation Drawer
</Text>

<Button align="center" title="Go to Login"
    onPress={() => navigation.navigate('Login')}></Button>
<Button align="center" title="Go to Register"
    onPress={() => navigation.navigate('Register')}></Button>
<Button align="center" title="Go to Feed"
    onPress={() => navigation.navigate('Details')}></Button>
<Button title='Dashboard'
     onPress={()=>navigation.navigate('Dashboard')}/>
</View>*/
