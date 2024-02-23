import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import AlertContent from '../../components/AlertContent';
import { useNavigation, useRoute } from '@react-navigation/native';
import Security from './Security';

export default function AlertDetailsScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { alert } = params;
  const [isSecurityCodeModalVisible, setSecurityCodeModalVisible] = useState(false);

  const handleShowSecurityCodeModal = () => {
    setSecurityCodeModalVisible(true);
  };

  const handleCloseSecurityCodeModal = () => {
    setSecurityCodeModalVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AlertContent alert={alert} onReplyPress={handleShowSecurityCodeModal} />
      <Security visible={isSecurityCodeModalVisible} onClose={handleCloseSecurityCodeModal} />
    </SafeAreaView>
  );
}
