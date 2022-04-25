import React from 'react';
import{Text} from'react-native';
import { AuthProvider } from '../config/AuthProvider';
import Routes from './Route';

const Main = () => {
  return (
 <AuthProvider>
   <Routes/>
 </AuthProvider>
      
   
  );
}

export default Main;