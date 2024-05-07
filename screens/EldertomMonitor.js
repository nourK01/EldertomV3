import React from "react";
import { View, Image, StyleSheet, Button } from "react-native";

// const CameraMonitor = () => {
//     return (
//         <>
//             <View style={styles.videoParticipant}>
//                 <View style={styles.participantAction}>
                   
//                 </View>
//                 <Image
//                 source={require('../assets/ivo.jpg')}
//                     style={styles.participantImage}
//                     resizeMode="cover"
//                 />
               
//             </View>
//         </>
//     );
// };
const EldertomMonitor = () => {
    const [videoUri, setVideoUri] = useState(null);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                // Fetch video URL from server
                const response = await fetch('http://192.168.0.103:3002/pi/send-video');
                const data = await response.json();
                setVideoUri(data.videoUri);
            } catch (error) {
                console.error('Error fetching video:', error);
            }
        };

        // Fetch video every 50 seconds
        const interval = setInterval(fetchVideo, 50000);

        // Fetch initial video when component mounts
        fetchVideo();

        // Clear interval when component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.videoParticipant}>
            {videoUri && (
                <Video
                    source={{ uri: videoUri }}
                    style={styles.participantVideo}
                    resizeMode="contain"
                    repeat
                    audio 
                />
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    videoParticipant: {
        width: '100%',
        height: '70%',
        position: 'relative',
        marginTop: 90,
    },
    participantAction: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
    participantImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    button: {
        outline: 'none',
        transition: '0.2s',
        cursor: 'pointer',
    },
    'button:hover': {
        opacity: 0.7,
    },
    Mute: {
        width: 32,
        height: 32,
        borderRadius: 4,
        backgroundColor: 'rgba(0, 15, 47, 0.5)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 16,
        borderWidth: 0,
        marginRight: 4,
        marginTop:20,
        backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' stroke=\'%23fff\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\' class=\'feather feather-mic-off\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M1 1l22 22M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6\'/%3E%3Cpath d=\'M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23M12 19v4M8 23h8\'/%3E%3C/svg%3E%0A')",
    },
});

export default EldertomMonitor;
