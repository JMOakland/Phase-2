import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
// useDispatch ~ reducers(setters)
//useSelectors ~ selectors(getters)
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
//import { selectNoteArray ,setNoteArray } from '../slices/homeSlice'; //might need to import selectors and reducers separately
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { FlatList } from 'react-native';
import { Button } from 'react-native';
import { selectNoteContents, selectNoteTitle, selectNoteArray } from '../slices/noteSlice';
const Home = () => {
  const dispatch = useDispatch();
  const noteArray = useSelector(selectNoteArray);
  const noteText = useSelector(selectNoteContents);
  const titleNote = useSelector(selectNoteTitle);
  const navigation = useNavigation();

  const displayNotes = () =>{
   if(noteArray.length === 0){
    {console.log(noteArray)}
      return <Text> Your notes will be shown here </Text>
      
   }
   else{
    const size = noteArray.length; 
    console.log(noteArray.length)
    for (i=0; i<= size - 1; i++){
      return <Button title={noteArray[i].title} />
    }
    
   
            
           
  }}
  return (
    <SafeAreaView>
      <View>
        
          <Text style={{fontSize: 20, paddingBottom: 16}}> Welcome to Notes4All!</Text>
          
        
      </View>

      <View>
          {displayNotes()}
      </View>
      <View>
        <Button title='Create' onPress={() => navigation.navigate('Screen2')}/> 
      </View>
    </SafeAreaView>
  )
};

export default Home;