import './login.css'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React, {useCallback} from "react";
import {incrementCounter,setLoggedOut,setLoggedIn} from "../../store/store";

const Login = ()=>{
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state)=> state.counter.isLoggedIn)
    const counter = useSelector((state)=>state.counter.counter)
    const decriment = useCallback((counter) =>
        dispatch(incrementCounter(counter)), [dispatch]);
    const loggedIn = useCallback(()=>
        dispatch(setLoggedIn()),[dispatch])
    const loggedOut = useCallback(()=>
        dispatch(setLoggedOut()),[dispatch])
    return(
        <div>
            <h1>Page login</h1>
            <h2> la valeur de isLoggedIn : {isLoggedIn? 'true':'false'}</h2>
            <h2> la valeur de conteur : {counter}</h2>
            <br/>
             <button onClick={()=>decriment(counter-1)}>Décrementer counter</button>
             <button onClick={()=>loggedIn()}>set Login</button>
             <button onClick={()=>loggedOut()}>set LoginOut</button>
            <br/>
                <Link to="/home">Go Home</Link>

        </div>
    )
}
export default Login;
