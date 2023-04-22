import { configureStore } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";
import homeReducer from "./slices/homeSlice";
import noteReducer from "./slices/noteSlice";
const store = configureStore({
    
    reducer: {
        noteData: noteReducer,
    },
});

export default store;