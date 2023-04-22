import { createSlice } from "@reduxjs/toolkit";
// managing the note contents 
const initialState = {
    noteContents: "",
    noteTitle: "",
    noteArray: [],
};
//deleter (not final position)
export function deleteNote(action) {
    const title = action.noteTitle;
    //add for loop that makes the new noteArray out all the notes before and after.

}

// setters
export const noteSlice = createSlice({
    name: "noteData",
    initialState,
    reducers: {
        setNoteState: (state, action) => {
            state.noteContents = action.payload;
            
        },
        setNoeTitle: (state, action) => {
            state.noteTitle = action.payload;
            
        },
        setNoteArray: (state, action) => {
            
                state.noteArray = [
                    state, {
                        noteContents : action.noteContents,
                        noteTitle: action.noteTitle,
                    }
                ]
        
        
    },
    },});
//action 
export function addnote(note, title){
    return {
        noteContents: note,
        noteTitle: title,
    }
}
export function addtitle(action){
    return {
        noteTitle: action
    }
}
//setter functions
export function setNoteTitle(state = state, title) {
    state.noteTitle = title
    
    
}
//getters
export const selectNoteContents = (state) => state.noteData.noteContents;
export const selectNoteTitle = (state) => state.noteData.noteTitle;
export const selectNoteArray = (state) => state.noteData.noteArray;
export default noteSlice.reducer;