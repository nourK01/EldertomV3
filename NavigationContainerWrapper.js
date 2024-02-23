import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';

export default function NavigationContainerWrapper() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
