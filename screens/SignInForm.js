import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from '../styles-login';
import { FIREBASE_AUTH } from '../firebaseConfig';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    try {
      setLoading(true);
      const response = await signInWithEmailAndPassword(auth,email, password);
      console.log(response);
      alert('Access Granted!');
    } catch (error) {
      console.log(error);
      alert('Sign In failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };
  
  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Successfully Registered!')
    } catch (error) {
      console.log(error);
      alert('Registration Failed! '+ error.message)
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.form_main} className="form_main">
        
      <Text style={styles.heading}>Login</Text>
      <View style={styles.inputContainer}>
        {/* You need to replace the SVG components with React Native equivalents */}
        <TextInput
           value={email}
           placeholder="Email"
           autoCapitalize='none'
           onChangeText={(text)=> setEmail(text)}
           style={styles.inputField}
           placeholderTextColor="#CCCCCC"
        />
      </View>
      <View style={styles.inputContainer}>
        {/* Replace the SVG for password input as well */}
        <TextInput
        
             value={password}
             autoCapitalize='none'
             onChangeText={(text)=> setPassword(text)}
             placeholder="Password"
             secureTextEntry
            
             style={{...styles.inputField}}
             placeholderTextColor="#CCCCCC"
        />
      </View>

      {loading ? <ActivityIndicator size="large" color="#0000ff"/> :<> 
      <TouchableOpacity onPress={signIn}
       style={styles.button} id="button"
       title="Login">
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity style={styles.signupLink}
        onPress={signUp}
        title="Create account">
          <Text style={styles.remindMe}>Sign Up!</Text>
        </TouchableOpacity>
      </View>
      </>}
    </View>
  );
};

export default SignIn;