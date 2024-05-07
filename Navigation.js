import { DefaultTheme, NavigationContainer }  from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Notifications from "./screens/tabScreens/Notifications";
import LiveFeed from "./screens/tabScreens/LiveFeed";
import Intruder from "./screens/tabScreens/Intruder";
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import AlertDetailsScreen from "./screens/homeStack/AlertDetailsScreen";
import drawer from "./screens/drawerScreens/Drawer";
import Settings from "./screens/drawerScreens/Settings";
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import MaterialCommunityIcons
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';



//createNativeStackNavigator
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
    return(
      
        <HomeStack.Navigator>
            <HomeStack.Screen name="TabGroup" component={TabGroup}
            options={{ headerShown: false }}/>
            <HomeStack.Screen name="AlertDetailsScreen" component={AlertDetailsScreen}
            options={{ presentation: "modal"}}/>
    
        </HomeStack.Navigator>
    )
}

// Tab bottom
const Tab= createBottomTabNavigator();

function TabGroup() {
 return(
    
    <Tab.Navigator
    screenOptions={({ route, navigation }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "Notifications") {
          iconName = focused ? "bell-alt" : "bell";
          return <Fontisto name={iconName} size={size} color={color} />;
       
        } else if (route.name === "Elder Monitor") {
          // Handle the second tab
          iconName = focused ? "videocam" : "videocam-outline";
          return <Ionicons name={iconName} size={30} color={color} />;
        
        } else if (route.name === "Intruder Detection") {
          // Handle the third tab
          iconName = focused ? "shield-checkmark" : "shield-checkmark-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        } 
        // Default case, return null or a default icon
        return null;
      },
      tabBarActiveTintColor:"#6ecead",
      tabBarInactiveTintColor:"gray",
    })}
  >
  
  <Tab.Screen
  name="Notifications" 
  component={Notifications}
  // options={{ headerShown: false }}
/>

        <Tab.Screen name="Elder Monitor"component={LiveFeed}
        />
        <Tab.Screen name="Intruder Detection"  component={Intruder}
        />
   
    </Tab.Navigator>
 )

}


const Drawer = createDrawerNavigator();

function DrawerGroup() {
  
  return (
    
    <Drawer.Navigator
  screenOptions={{ headerShown: false, 
    drawerLabelStyle: { fontSize: 16, fontWeight: 'bold' },
    drawerActiveTintColor: '#6ecead', // Color when the item is active
    drawerInactiveTintColor: '#424952', // Color when the item is inactive
  }}
>
  <Drawer.Screen name="Home" component={HomeStackGroup} />
  {/* <Drawer.Screen name="Drawer" component={drawer} /> */}
  <Drawer.Screen   screenOptions={{ headerShown: true,
  }} name="Settings" component={Settings}
   />

</Drawer.Navigator>
  );
}
export default function Navigation() {
    return(
       
          <DrawerGroup/>
         
       
    )
}