import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { useLayoutEffect } from "react";

const SettingsScreen = () => {
//   const navigation = useNavigation();

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerLeft: () => (
//         <TouchableOpacity onPress={() => navigation.openDrawer()}>
//           <Image
//             source={require("../../assets/logo.png")}
//             style={{ width: 60, height: 60, borderRadius: 100, marginLeft: 20 }}
//           />
//         </TouchableOpacity>
//       ),
//     });
//   }, []);

  return (
    <View style={styles.phoneWrapper}>
      <View style={styles.container}>
        <Text style={styles.h1}>Settings</Text>

        <View style={styles.section}>
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemIcon}>
              <Image source={require('../../assets/user.png')} style={{ width: 20, height: 20 }} />
            </View>
            <Text style={styles.itemText}>Account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}></View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemIcon}>
              <Image source={require('../../assets/information.png')} style={{ width: 20, height: 20 }} />
            </View>
            <Text style={styles.itemText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemIcon}>
              <Image source={require('../../assets/customer-service.png')} style={{ width: 20, height: 20 }} />
            </View>
            <Text style={styles.itemText}>Support</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => FIREBASE_AUTH.signOut()} style={styles.item}>
            <View style={styles.itemIcon}>
              <Image source={require('../../assets/logout.png')} style={{ width: 20, height: 20 }} />
            </View>
            <Text style={styles.itemText}>Log Out</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>Eldertom VersionX @2024</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phoneWrapper: {
    minHeight: 1000,
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 2.5,
    paddingTop: 48,
    overflow: 'hidden',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 50,
    shadowOpacity: 1,
    backgroundColor: '#f2f1f7',
  },
  container: {
    paddingHorizontal: 12,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 12,
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemIcon: {
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    paddingLeft: 10,
    fontWeight: '500',
    fontSize: 16,
    color: '#000',
    alignItems: 'center',
  },
  footer: {
    textAlign: 'center',
    opacity: 0.75,
    paddingVertical: 24,
    fontSize: 12,
    color: '#000',
  },
});

export default SettingsScreen;
