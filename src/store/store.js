import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

const {createSlice} = require("@reduxjs/toolkit");

const  counterSlise = createSlice({
    name:'counter',
    initialState:{
        counter:0,
        isLoggedIn :false,
    },
    reducers :{
        incrementCounter : (state, action) =>
            ({...state, counter: action.payload}),
        setLoggedIn :(state)=>({...state, isLoggedIn: true}),
        setLoggedOut : (state)=>({...state, isLoggedIn: false}),
    },
})
//exporter les actions
export const {setLoggedIn, setLoggedOut, incrementCounter} = counterSlise.actions;

const reducer = combineReducers({
    counter: counterSlise.reducer
})

export default configureStore({
    reducer
})

