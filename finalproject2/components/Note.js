import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setNoteTitle, setNoteState, setNoteArray, addnote, addtitle } from '../slices/noteSlice'  //might need to import selectors and reducers separately
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';

import { selectNoteContents, selectNoteTitle, selectNoteArray} from '../slices/noteSlice';
const Note = () => {
  const dispatch = useDispatch();
  
  const noteText = useSelector(selectNoteContents);
  const titleNote = useSelector(selectNoteTitle);
  const navigation = useNavigation();
  const headDisplay = () => {
    if(selectNoteContents.length === 0){
      return <Text>Create Note</Text>
    }
    else{
      return <Text>Edit Note</Text>
    }
  }
  //check whether new note or not
  const newNote = () => {
    if(selectNoteContents.length === 0){
      return  <View>
                <Button title='Home' onPress={() => navigation.navigate('Screen1')}/> 
                <Button title='Create' onPress={ save(titleNote, noteText)}/>
                
              </View>
    } 
    else{ 
      return <View>
                 <Button title='Home' onPress={() => navigation.navigate('Screen1')}/> 
                 <Button title='Save' onPress={ save(titleNote, noteText)}/>
                 <Button title='Delete'/>
             </View>
    } 
    // may want Delete to be on home page as an option when clicking a note or something
    // add touchable opacity to the buttons 
  }
  const titleChange = title =>{
   
   const newTitle = addtitle(title);
   console.log(newTitle);
   dispatch(setNoteTitle(newTitle));
    
  }
  const save = () => {
        //dispatch(setNoteArray(addnote(noteText, titleNote)))
  }
  return (
    <SafeAreaView>
      <View>
        {headDisplay()}
       
      </View>
      <View>
        <TextInput disabled = {false} onChangeText={(value) => {
          titleChange(value)
          
        }} placeholder="Untitled" 
        />
      </View>
      <View>
        <TextInput onChangeText = {(newValue) => {
          dispatch(setNoteState(newValue));
          
        }} placeholder="Sample Text" 
        />
      </View>
      <View>
      {newNote()}
      </View>
    </SafeAreaView>
  )
}

export default Note