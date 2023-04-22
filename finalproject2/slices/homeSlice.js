import { createSlice } from "@reduxjs/toolkit";

/** managing all the notes created, displaying them all as well  */
// initial state 
const initialState = [];

//setters
export const homeSlice = createSlice({ 
    name: "homeData",
    initialState,
    reducers: {
        setNoteArray: (state = initialState, action) => {
            return [...state, {
                title: action.title,
                note: action.noteContents
                
            }]
        },
    }
});

//create selectors and export
// getters
//export const selectNoteArray = (state) => state.homeData.noteArray;
export const selectNoteArray = (state) => state;
    
export default homeSlice.reducer; //may need to be reducers