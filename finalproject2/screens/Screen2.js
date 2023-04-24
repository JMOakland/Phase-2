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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Screen2;