import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Note from '../components/Note'

const Screen2 = () => {
  return (
    <SafeAreaView style={styles.container}> 
      <Note  />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#000000',
    height: 10000000000,
  },
});
export default Screen2;