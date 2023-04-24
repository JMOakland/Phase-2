import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setNoteTitle, setNoteContents, setNoteArray } from '../slices/noteSlice'  //might need to import selectors and reducers separately
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import { selectNoteContents, selectNoteTitle, selectNoteArray} from '../slices/noteSlice';
let noteID = 0
const Note = () => {
  const dispatch = useDispatch();
  
  const noteText = useSelector(selectNoteContents);
  const titleNote = useSelector(selectNoteTitle);
  const navigation = useNavigation();
  const headDisplay = () => {
    if(noteText.length === 0){
      return <Text>Create Note</Text>
    }
    else{
      return <Text>Create Note</Text>
    }
  }
  //check whether new note or not
  const newNote = () => {
    if(titleNote.length === 0){
      return  <View>
                <Button title='Home' onPress={() => navigation.navigate('Screen1')}/> 
                <Button title='Create' disabled />
                
              </View>
    } 
    else{ 
      return <View>
                 <Button title='Home' onPress={() => navigation.navigate('Screen1')}/> 
                 <Button title='Create' onPress={() =>{
                  dispatch(setNoteArray([{
                    title: titleNote,
                    note: noteText,
                    id: noteID++,
                  }]));
                  dispatch(setNoteContents(""))
                  dispatch(setNoteTitle(""))
                 }}/>
                 
             </View>
    } 
    // may want Delete to be on home page as an option when clicking a note or something
    // add touchable opacity to the buttons 
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
        <TextInput value={titleNote} disabled = {false} onChangeText={(newValue) => {
          
          dispatch(setNoteTitle(newValue));
          
        }} placeholder="Untitled" 
        />
      </View>
      <View>
        <TextInput value={noteText} onChangeText = {(newValue) => {
          
          dispatch(setNoteContents(newValue));
          
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