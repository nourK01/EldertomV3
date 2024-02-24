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

export default function ChatSupport(){
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require("../../assets/chat.png")}
                style={{ width: 30, height: 30, borderRadius: 0, marginLeft: 30 }}
              />
            </Pressable>
          ),
        });
      }, []);
    return(
        <View>
            <Text> </Text>
        </View>
    );
}