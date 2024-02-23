import { useNavigation } from "@react-navigation/native";
import { Button, SafeAreaView, Text } from "react-native";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import React from 'react';

export default function Drawer() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>test</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Sign Out" onPress={() => FIREBASE_AUTH.signOut()} />
    </SafeAreaView>
  );
}
