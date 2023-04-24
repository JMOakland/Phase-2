import { createSlice } from "@reduxjs/toolkit";

/** managing all the notes created, displaying them all as well  */
// initial state 
const initialState = {
    noteArray: [],
};

//setters
export const homeSlice = createSlice({ 
    name: "homeData",
    initialState,
    reducers: {
        setNoteArray: (state, action) => {
            state.noteArray = action.payload
        },
    }
});
export const { setNoteArray } = homeSlice.actions
//create selectors and export
// getters
//export const selectNoteArray = (state) => state.homeData.noteArray;
export const selectNoteArray = (state) => state;
    
export default homeSlice.reducer; //may need to be reducers