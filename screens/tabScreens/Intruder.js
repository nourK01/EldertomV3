import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { alerts } from "../../data/AlertSamples";
import Alert from "../../components/Alert";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
 
import CameraMonitor from "../CameraMonitor"; 

export default function ChatSupport(){
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require("../../assets/shield.png")}
                style={{ width: 30, height: 30, borderRadius: 0, marginLeft: 30 }}
              />
            </Pressable>
          ),
        });
      }, []);
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.cameraContainer}> 
                <CameraMonitor /> 
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Optional: Adjust background color as needed
  },
  cameraContainer: {
    flex: 1, // Ensure CameraMonitor fills the available space
  },
});
