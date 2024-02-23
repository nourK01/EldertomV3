import React from "react";
import { Pressable } from "react-native";
import AlertContent from "./AlertContent";
import { useNavigation } from "@react-navigation/native";


const Alert = ({ alert }) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigate("AlertDetailsScreen", { alert });
      }}
    >
      <AlertContent alert={alert} />
    </Pressable>
  );
  
};

export default Alert;