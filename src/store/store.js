import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

const {createSlice} = require('@reduxjs/toolkit')

const counter = createSlice({
    name: 'counter',
    initialState: {
        counter: 0
    },
    reducers: {
        incrementerCounter: (state, action) =>
            ({...state, counter: action.payload})
    },
})
export const {incrementerCounter} = counter.actions;

const reducer = combineReducers({
    counter: counter.reducer
})

export default configureStore({
    reducer
})
