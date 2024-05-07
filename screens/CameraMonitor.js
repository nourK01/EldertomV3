import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";

const CameraMonitor = () => {
    const [motionStatus, setMotionStatus] = useState(false);
    const [imageUri, setImageUri] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch('http://192.168.0.103:3002/esp86266/octet-stream');
                if (response.ok) {
                    const imageBlob = await response.blob();
                    const uri = URL.createObjectURL(imageBlob);
                    setImageUri(uri);
                } else {
                    console.error('Failed to fetch image:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        // Fetch image every 10 seconds
        const interval = setInterval(fetchImage, 10000);

        // Clear interval when component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            {motionStatus && imageUri && (
                <Image
                    source={{ uri: imageUri }}
                    style={styles.image}
                    resizeMode="contain"
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 300,
        height: 300,
    },
});

export default CameraMonitor;