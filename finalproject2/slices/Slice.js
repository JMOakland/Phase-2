import { createSlice } from "@reduxjs/toolkit";
// managing the note contents 
const initialState = {
    noteArray:[
        {
            noteContents: "",
            noteTitle: "",
        }
    ],
    
    // text color?
};
// setters
export const noteSlice = createSlice({
    name: "noteData",
    initialState,
    reducers: {
        setNoteState: (state, action) => {
            state.noteContents = action.payload;
        },
        setNoteTitle: (state, action) => {
            state.noteTitle = action.payload;
        },
    },
});
//getters
export const selectNoteContents = (state) => state.noteData.noteContents;
export const selectNoteTitle = (state) => state.noteData.noteTitle;
export default noteSlice.reducer;