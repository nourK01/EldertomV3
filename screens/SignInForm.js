import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles-login';


const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <View style={styles.form_main} className="form_main">
        
      <Text style={styles.heading}>Login</Text>
      <View style={styles.inputContainer}>
        {/* You need to replace the SVG components with React Native equivalents */}
        <TextInput
          placeholder="Username"
          style={styles.inputField}
          // Additional props as needed
        />
      </View>
      <View style={styles.inputContainer}>
        {/* Replace the SVG for password input as well */}
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.inputField}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.button} id="button">
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text>Forgot Password?</Text>
        <TouchableOpacity style={styles.signupLink}>
          <Text style={styles.remindMe}>Remind me!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;