import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Pressable, Image, StyleSheet, Text } from 'react-native';
import { alerts } from '../../data/AlertSamples'; // Assuming this contains your notification data
import Alert from '../../components/Alert';
import { useNavigation } from "@react-navigation/native";

export default function Feed() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 60, height: 60, borderRadius: 100, marginLeft: 20 }}
          />
        </Pressable>
      ),
    });
  }, [navigation]);

  return <NotificationsScreen />;
}

function NotificationsScreen() {
  const [motionStatus, setMotionStatus] = useState(null);

  useEffect(() => {
    // Function to fetch motion status from the server
    const fetchMotionStatus = async () => {
      try {
        const response = await fetch('http://192.168.0.103:3002/app/motion-status'); // Replace with your server URL
        const data = await response.json(); // Parse the response as JSON
        console.log('Motion Status:', data.motionStatus);
        setMotionStatus(data.motionStatus);
      } catch (error) {
        console.error('Error fetching motion status:', error);
      }
    };

    // Fetch motion status initially
    fetchMotionStatus();

    // Set up an interval to fetch motion status every 20 seconds
    const intervalId = setInterval(fetchMotionStatus, 20000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  // Retrieve the entire alerts array if motionStatus is "Motion Detected"
  const filteredAlerts = motionStatus === 'Motion Detected' ? alerts : [];

  useEffect(() => {
    // Reset motionStatus to null after 2 minutes
    const timeoutId = setTimeout(() => {
      setMotionStatus(null);
    }, 2 * 60 * 1000000);

    return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
  }, [motionStatus]);

  const renderAlert = ({ item }) => <Alert alert={item} />;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      {filteredAlerts.length === 0 ? (
        <Text style={styles.emptyComponentSubtitle}>No new notifications. Come back later!</Text>
      ) : (
        <FlatList
          data={filteredAlerts}
          renderItem={renderAlert}
          keyExtractor={(item) => item.id.toString()} // Adjust the key as per your data structure
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#DDD",
  },
  header: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DA1F2",
  },
  footer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  footerTitle: {
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  emptyComponentTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  emptyComponentSubtitle: {
    color: "#808080",
    padding: 8,
    fontSize: 14,
    textAlign: "center",
  },
  emptyComponent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
