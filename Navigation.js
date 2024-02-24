import { DefaultTheme, NavigationContainer }  from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Notifications from "./screens/tabScreens/Notifications";
import LiveFeed from "./screens/tabScreens/LiveFeed";
import ChatSupport from "./screens/tabScreens/ChatSupport";
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import AlertDetailsScreen from "./screens/homeStack/AlertDetailsScreen";
import drawer from "./screens/drawerScreens/Drawer";

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
       
        } else if (route.name === "Live Feed") {
          // Handle the second tab
          iconName = focused ? "videocam" : "videocam-outline";
          return <Ionicons name={iconName} size={30} color={color} />;
        
        } else if (route.name === "Chat Support") {
          // Handle the third tab
          iconName = focused ? "chatbubble-ellipses-sharp" : "chatbubble-ellipses-outline";
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

        <Tab.Screen name="Live Feed" component={LiveFeed}
        />
        <Tab.Screen name="Chat Support" component={ChatSupport}
        />
   
    </Tab.Navigator>
 )

}


const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false}} >
      <Drawer.Screen name="Notifications" component={HomeStackGroup}/>
      <Drawer.Screen name="Settings" component={drawer }  options={{ headerShown: true}}/>
         </Drawer.Navigator>
  );
}
export default function Navigation() {
    return(
       
          <DrawerGroup/>
         
       
    )
}