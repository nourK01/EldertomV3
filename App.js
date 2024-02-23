import "react-native-gesture-handler";
import { StyleSheet, Text, View } from 'react-native';
import Navigation from "./Navigation"
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./screens/SignInForm";
import LoginPage from "./screens/SignInScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>

  
  //  <Navigation/>
  );
}

