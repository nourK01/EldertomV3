import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const Security = ({ visible, onClose }) => {
  const [securityCodes, setSecurityCodes] = useState(['', '', '', '', '', '']);

  const handleInputChange = (index, value) => {
    const updatedCodes = [...securityCodes];
    updatedCodes[index] = value;
    setSecurityCodes(updatedCodes);
  };

  const handleSaveSecurityCode = () => {
    // Combine the security codes into a single string or use as needed
    const combinedSecurityCode = securityCodes.join('');
    
    // Handle saving the security code logic here
    // You may want to send this information to your backend or perform any other action
    console.log('Security Code:', combinedSecurityCode);

    // Close the modal after handling the security code
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Enter Security Code</Text>
          <View style={styles.inputContainer}>
            {securityCodes.map((code, index) => (
              <TextInput
                key={index}
                style={styles.input}
                placeholder="0"
                maxLength={1}
                pattern="[0-9]"
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange(index, text)}
              />
            ))}
          </View>
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveSecurityCode}>
            <Text style={styles.saveButtonText}>Verify</Text>
          </TouchableOpacity>
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
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 4,
  },
  saveButton: {
    backgroundColor: '#53dda9',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  saveButtonText: {
    color: 'white',
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
