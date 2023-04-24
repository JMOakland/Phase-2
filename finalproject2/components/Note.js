import { View, Text, StyleSheet, Pressable } from 'react-native'
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
      return <Text style={styles.title}>Create Note</Text>
    }
    else{
      return <Text>Create Note</Text>
    }
  }
  //check whether new note or not
  const newNote = () => {
    if(titleNote.length === 0){
      return  <View>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Screen1')}>
                    <Text>Home</Text>
                 </Pressable>
                <Pressable style={styles.button2} disabled>
                    <Text>Create</Text>
                 </Pressable>
                
              </View>
    } 
    else{ 
      return <View>
                 
                 <Pressable style={styles.button} onPress={() => navigation.navigate('Screen1')}>
                    <Text>Home</Text>
                 </Pressable>
                 <Pressable style={styles.button} onPress={() =>{
                  dispatch(setNoteArray([{
                    title: titleNote,
                    note: noteText,
                    id: noteID++,
                  }]));
                  dispatch(setNoteContents(""))
                  dispatch(setNoteTitle(""))
                 }}>
                    <Text>Create</Text>
                 </Pressable>
                 
                 
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
      <View style={{backgroundColor:'#ffe4c4'}}>
        <TextInput style={styles.noteTitle} value={titleNote} disabled = {false} onChangeText={(newValue) => {
          
          dispatch(setNoteTitle(newValue));
          
        }} placeholder="Untitled" 
        />
      </View>
      <View style={{backgroundColor:'#ffe4c4'}}>
        <TextInput style={styles.noteText} value={noteText} onChangeText = {(newValue) => {
          
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

export default Note;

const styles = StyleSheet.create({
  container: {
    
    
    backgroundColor: '#ffe4c4',
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 1,
    margin: 10,
    borderRadius: 8,
    
    
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    color: 'black',
    elevation: 3,
    backgroundColor: '#fff',
    margin: 20,
     
     
     
  },
  button2:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    color: 'grey',
    elevation: 3,
    backgroundColor: 'grey',
    margin: 20,
     
     
     
  },
  
  title:{
      fontSize: 30,
      marginTop: 20,
  },
  noteText:{
    marginLeft: 30,
    marginBottom: 15,
    fontSize: 16,
  },
  noteTitle: {
    margin: 10,
    fontSize: 20,
    

  },
  warning:{
    fontSize: 16,
    
  }

});