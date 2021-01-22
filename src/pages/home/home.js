import './home.css'
import {useDispatch, useSelector} from "react-redux";
import React, {useCallback} from 'react';
import {incrementCounter,setLoggedIn,setLoggedOut,addItem} from '../../store/store'
import {Link} from "react-router-dom";
const  Home = ()=>{
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state)=> state.counter.isLoggedIn)
    const counter = useSelector((state)=>state.counter.counter)
     const increment = useCallback((counter) =>
            dispatch(incrementCounter(counter)), [dispatch]);

    return(
        <div>
            <h1>Home Page</h1>
            <h2> la valeur de isLoggedIn : {isLoggedIn? 'true':'false'}</h2>
            <h2> la valeur de conteur : {counter}</h2>

            <button onClick={()=>increment(counter+1)}>Increment conter</button>
            <Link to="/login">Go Login</Link>
        </div>
    )
}

export default Home;
