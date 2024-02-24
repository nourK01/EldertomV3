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

import Video, {VideoRef} from 'react-native-video';


export default function LiveFeed(){
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <Pressable onPress={() => navigation.openDrawer()}>
            <Image
              source={require("../../assets/play.png")}
              style={{ width: 30, height: 30, borderRadius: 0, marginLeft: 30 ,
                marginBottom: 5}}
            />
          </Pressable>
        ),
      });
    }, []);
    return(
        <View>
            <Text></Text>
        </View>
    );
}