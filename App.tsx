import React from 'react';
import { StyleSheet } from 'react-native';
import { SignIn } from './src/screens/SignIn';


import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <SignIn />


    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
