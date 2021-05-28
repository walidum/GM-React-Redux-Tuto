import './login.css'
import React, {useCallback} from "react";
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {incrementerCounter} from "../../store/store";

const Login = () => {
    const dispatch = useDispatch();
    const router = useHistory();
    const counter = useSelector((state) => state.counter.counter)
    const increment = useCallback((counter) => dispatch(incrementerCounter(counter)), [dispatch]);

    return (
        <div>
            <h1>Page login</h1>
            <h2>CPT : {counter}</h2>
            <h2 onClick={() => increment(counter + 1)}>Incrementer</h2>
            <h2 onClick={() => router.push('home')}>GO TO HOME</h2>
        </div>
    )
}
export default Login;
