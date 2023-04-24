import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
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
import { selectNoteContents, selectNoteTitle, selectNoteArray, setNoteArray } from '../slices/noteSlice';
let homeArray =[];
// from https://reactnative.dev/docs/flatlist
const Item = ({item, onPress }) => (//add styling later(and remove this note!!)
  <TouchableOpacity style={styles.container} onPress={onPress} > 
    <Text style={styles.noteTitle}>{item.title}</Text>
    <Text style={styles.noteText}>{item.note}</Text>
  </TouchableOpacity>
);

const Home = () => {
  
  const noteArray = useSelector(selectNoteArray);
  const navigation = useNavigation();
  
  const setArray = () => {
        if(noteArray.length !== 0 && !homeArray.includes(noteArray[0])){
          homeArray.push(noteArray[0]);
          
        }
       // console.log(homeArray)
  }
  const displayNotes = ({item}) =>{
    
    return (<Item 
        item={item}
        onPress={() => {
        
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
                    data={homeArray} 
                    style={{height: 10000,}} 
                    renderItem={displayNotes} 
                    keyExtractor={item => item.id} 
              />
    }
  }
  const deleteNote =(item) =>{
    let tempArray =[]
    let tempArray2 = []
    
    homeArray.forEach((note) => {
      
      if(note.id === item.id){
        console.log(note.id)
        tempArray = homeArray.slice(0, note.id);
        console.log(tempArray)
        tempArray2 = homeArray.slice((note.id +1) , (homeArray.length + 1))
        console.log(tempArray2)
        homeArray = tempArray.concat(tempArray2);
        console.log(homeArray)
      }
      
      
    
    })
    return homeArray
  }
    
  
  const warning = ()=>{
    if(!(homeArray.length ===0)){
        return <Text style={styles.warning} >To delete a note, please press it. </Text>
    }
    else{
      return <Text style={styles.warning} >Your notes will appear below. </Text>
    }
  }
  return (
    <SafeAreaView>
      <View style={{backgroundColor:`#eee8aa`, alignItems: 'center', }}>
        <Text style={styles.title}> Welcome to StickyNotes4All!</Text>
        <Button title='Create a Note' onPress={() => navigation.navigate('Screen2')} style= {styles.button} /> 
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
  button:{
    borderColor: '#000000',
    backgroundColor:'#000000',
    alignSelf: 'center',
    borderRadius: 8,
    borderCurve: 8,

     
     
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