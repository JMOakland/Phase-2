import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
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
import { selectNoteContents, selectNoteTitle, selectNoteArray, setNoteArray } from '../slices/noteSlice';

// from https://reactnative.dev/docs/flatlist
const Item = ({item, onPress }) => (//add styling later(and remove this note!!)
  <TouchableOpacity style={styles.container} onPress={onPress} > 
    <Text style={styles.noteTitle}>{item.title}</Text>
    <Text style={styles.noteText}>{item.note}</Text>
  </TouchableOpacity>
);

const Home = () => {
  const [homeArray, setHomeArray] = useState({
    newArray: [],});
  const noteArray = useSelector(selectNoteArray);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const setArray = () => {
        if(noteArray.length !== 0 && (!(homeArray.newArray.includes(noteArray[0])))){
          homeArray.newArray.push(noteArray[0]);
          
        }
       //console.log(homeArray.newArray)
  }
  const displayNotes = ({item}) =>{
    
    return (<Item 
        item={item}
        onPress={() => { 
          
          
          homeArray.newArray.forEach((note) => {
          console.log(note.id)
          console.log(item.id)
          
           if(note.id === item.id){
              if(homeArray.newArray.length === 1){
                dispatch(setNoteArray([]))
                setHomeArray({
                  newArray: [],
                })
                console.log('here')
                
              }
            else{
              const array2 = homeArray.newArray.filter((item) => item.id !== note.id);
              console.log(array2)
              dispatch(setNoteArray(array2)); 
              setHomeArray({
                newArray: array2})
              //tempArray = homeArray.newArray.slice(0, note.id);
              //console.log(tempArray)
              //tempArray2 = homeArray.newArray.slice((note.id +1) , (homeArray.newArray.length + 1))
              //console.log(tempArray2)
              //setHomeArray({
                //newArray: tempArray.concat(tempArray2)}
              //console.log(homeArray)
              }}
    
          })
        
        }   
        } >
      </Item>)
    
    
  }
  const setList = () =>{
    if(homeArray.length === 0){
      return <Text style={{color: '#fff', alignSelf: 'center', marginTop: 20,}} > You have no notes </Text>
    }
    else{
      return <FlatList 
                    data={homeArray.newArray} 
                    style={{height: 10000,}} 
                    renderItem={displayNotes} 
                    keyExtractor={item => item.id} 
              />
    }
  }
  
    
  
  const warning = ()=>{
    if(homeArray.newArray.length === 0){
      console.log(homeArray.newArray.length)
      return <Text style={styles.warning} >Your notes will appear below. </Text>
    }
    else{
      
      return <Text style={styles.warning} >To delete a note, please press it. </Text>
    }
  }
  return (
    <SafeAreaView>
      <View style={{backgroundColor:`#eee8aa`, alignItems: 'center', }}>
        <Text style={styles.title}> Welcome to StickyNotes4All!</Text>
        
        <Pressable style={styles.button} onPress={() => navigation.navigate('Screen2')}>
          <Text>Create a note</Text>
        </Pressable>
        {warning()}
      </View>
        {setArray()}
      <View>
        {setList()}
      </View>
      
      
    </SafeAreaView>
  )
};

export default Home;

const styles = StyleSheet.create({
  container: {
    
    
    backgroundColor: '#ffe4c4',
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 1,
    margin: 10,
    borderRadius: 8,
    
    
  },
button: {
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