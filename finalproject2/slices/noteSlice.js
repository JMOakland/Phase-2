import { createSlice } from "@reduxjs/toolkit";
// managing the note contents 
const initialState = {
    noteContents: "",
    noteTitle: "",
    noteArray: [],
};
//deleter (not final position)
export function deleteNote(action) {
    
    //add for loop that makes the new noteArray out all the notes before and after.

}

// setters
export const noteSlice = createSlice({
    name: "noteData",
    initialState,
    reducers: {
        setNoteContents: (state, action) => {
            state.noteContents = action.payload;
            //console.log(state.noteContents)
            
        },
        setNoteTitle: (state, action) => {
            state.noteTitle = action.payload; // try this way then use action.noteTitle
            //console.log(state.noteTitle)
        },
        setNoteArray: (state, action) => {
            state.noteArray = action.payload;
               
                    
        
    },
    }});
export const { setNoteContents, setNoteTitle, setNoteArray } = noteSlice.actions
//setter functions

//getters
export const selectNoteContents = (state) => state.noteData.noteContents;
export const selectNoteTitle = (state) => state.noteData.noteTitle;
export const selectNoteArray = (state) => state.noteData.noteArray;
export default noteSlice.reducer;