import React from 'react';
import { Image, View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const Security = ({ visible, onClose }) => {
  const handleGrantAccess = () => {
    console.log('Access Granted');
    onClose();
  };

  const handleDenyAccess = () => {
    console.log('Access Denied');
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={[styles.card, styles.modalContent]}>
        <Image
            source={require("../../assets/alert.png")}
            style={{ width: 35, height: 35, borderRadius: 100 }}
          />
          <Text style={styles.cookieHeading}>Intruder Detected</Text>
          <Text style={styles.cookieDescription}>
           If the person detected is a trusted person, you can APPROVE their acccess, else the alarm will go off. You can also choose DENY and the alarm will go off.<Text style={styles.linkText} onPress={() => {}}>
             
            </Text>
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.acceptButton, styles.button]}
              onPress={handleGrantAccess}
            >
              <Text style={styles.buttonText}>Approve</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.declineButton, styles.button]}
              onPress={handleDenyAccess}
            >
              <Text style={styles.buttonText}>Deny</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  card: {
    width: 300,
    height: 230,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 8,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 30,
    gap: 13,
    position: 'relative',
    overflow: 'hidden',
    shadowColor: 'rgba(0, 0, 0, 0.062)',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  modalContent: {
    width: '80%',
  },
  cookieHeading: {
    fontSize: 16,
    fontWeight: '800',
    color: 'rgb(26, 26, 26)',
  },
  cookieDescription: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
    color: 'rgb(99, 99, 99)',
  },
  linkText: {
    color: '#3b82f6',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  acceptButton: {
    width: 80,
    height: 30,
    backgroundColor: '#56d9ac',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  declineButton: {
    width: 80,
    height: 30,
    backgroundColor: '#fd4760',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  buttonText: {
    color: 'rgb(241, 241, 241)',
    fontWeight: '600',
  },
});

export default Security;
