import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome

import EldertomMonitor from "../EldertomMonitor";

export default function LiveFeed() {
  const navigation = useNavigation();

  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../../assets/play.png")}
            style={{
              width: 30,
              height: 30,
              borderRadius: 0,
              marginLeft: 30,
              marginBottom: 5,
            }}
          />
        </Pressable>
      ),
      headerRight: () => (
        <FontAwesome
          name={isMuted ? "microphone-slash" : "microphone"} // Icon name changes based on mute state
          size={24}
          color="black"
          style={{ marginRight: 20 }}
          onPress={toggleMute}
        />
      ),
    });
  }, [navigation, isMuted]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cameraContainer}>
        <EldertomMonitor />
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
