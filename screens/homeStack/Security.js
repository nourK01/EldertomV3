import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

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
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Grant Access?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.grantButton]}
              onPress={handleGrantAccess}
            >
              <Text style={styles.buttonText}>Grant</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.denyButton]}
              onPress={handleDenyAccess}
            >
              <Text style={styles.buttonText}>Deny</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
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
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    borderRadius: 7,
    alignItems: 'center',
    width: '45%',
    elevation: 5,
  },
  grantButton: {
    backgroundColor: '#51daaf',
    shadowColor: '#008CFF',
  },
  denyButton: {
    backgroundColor: '#FF0000"',
    shadowColor: '#FF0000',
  },
  buttonText: {
    fontFamily: 'Avenir',
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 4,
  },
  closeButton: {
    backgroundColor: '#424952',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
  },
});

export default Security;
