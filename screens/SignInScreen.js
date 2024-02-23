import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native';
import SignIn from './SignInForm'


const LoginPage = () => {
  return (
    <View style={{ backgroundColor: '#A2E4B8',
        flex: 1, justifyContent: 'center',height: '100%', alignItems: 'center' }}>
   <Image 
  source={require('../assets/logo.png')}
  style={{ width: 200, height: 200 }}
/>

      <SignIn />

    </View>
  );
};

export default LoginPage;
