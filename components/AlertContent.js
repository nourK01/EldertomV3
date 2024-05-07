import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, useColorScheme } from "react-native";
import { EvilIcons, MaterialIcons, Entypo  } from "@expo/vector-icons";
import { useFonts } from 'expo-font';
import { useNavigation } from "@react-navigation/native";



const AlertContent = ({ alert, onCameraPress, onReplyPress }) => {
  const theme = useColorScheme();
  const navigation = useNavigation();
  const isSecurityAlert = alert.type === "intruder_alert";
  
  return (
    <View style={styles.singleItem}>
      <View style={styles.row}>
        {isSecurityAlert ? (
          <MaterialIcons name="security" size={24} color={theme === "dark" ? "#f94260" : "#f94260"} style={styles.avatar} />
        ) : (
          <Entypo name="emoji-sad" size={24} color={theme === "dark" ? "#32a6ff" : "#3d83ff"} style={styles.avatar} 
          />
        )}

        <View style={styles.alertContentContainer}>
          <View style={styles.rowTop}>
            <Text
              numberOfLines={1}
              style={[
                styles.header,
                { color: isSecurityAlert ? "#f94260" : (theme === "dark" ? "#32a6ff" : "#3d83ff") },
              ]}
            >
              {isSecurityAlert ? "Security Alert" : alert.author.name}
            </Text>
            
          </View>
          <Text
            style={[
              styles.description,
              { color: theme === "dark" ? "#a4a4a9" : "#a4a4a9" },
            ]}
          >
            {alert.content}
          </Text>
          <View style={styles.rowActions}>
            {isSecurityAlert ? (
              <>
               <TouchableOpacity 
  onPress={() => {
    navigation.navigate("Intruder Detection"); // Navigate to "Live Feed"
  }}
  style={styles.elemAction}
>
                  <EvilIcons name="camera" size={22} color={theme === "dark" ? "#9a9ea4" : "#9a9ea4"} />
                  <Text style={styles.actionText}>Monitor</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onReplyPress} style={styles.elemAction}>
                  <EvilIcons name="unlock" size={22} color={theme === "dark" ? "#9a9ea4" : "#9a9ea4"} />
                  <Text style={styles.actionText}>Security Code</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
    <TouchableOpacity 
  style={styles.elemAction} 
  onPress={() => {
    navigation.navigate("Elder Monitor");
  }}
>
  <EvilIcons name="camera" size={22} color={theme === "dark" ? "#9a9ea4" : "#9a9ea4"} />
                  <Text style={styles.actionText}>Monitor</Text>
</TouchableOpacity>

              </>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Avenir',
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 8,
    
  },
  alertType: {
    
    fontSize: 10,
    color: '#99999d',
   
  },
  description: {
    fontFamily: 'Avenir',
    fontSize: 15,
    marginBottom: 10,
    
  },
  singleItem: {
    position: 'relative',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 10,
    marginLeft:7,
    marginRight:7,
    maxWidth: 850,
    backgroundColor: 'white',
    borderRadius: 25,
    // overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  rowTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  elemAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: 16,
  },
  actionText: {
    fontFamily: 'Avenir',
    fontSize: 16,
    color: '#9a9ea4',
  },
  alertContentContainer: {
    flexShrink: 1,
    flexGrow: 1,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 16,
  },
});

export default AlertContent;
