import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Home from '../components/Home.js';
import { SafeAreaView } from 'react-native-safe-area-context';
const Screen1 = () => {
  return (
    <SafeAreaView style={styles.container} >
     <Home />
     </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#000000',
    height: 10000000000,
  },
});
export default Screen1;