import './login.css'
import React from "react";
import {useHistory} from 'react-router-dom'
import {useSelector} from "react-redux";

const Login = () => {
    const router = useHistory();
    const counter = useSelector((state) => state.counter.counter)

    return (
        <div>
            <h1>Page login</h1>
            <h2>CPT : {counter}</h2>
            <h2 onClick={() => router.push('home')}>GO TO HOME</h2>
        </div>
    )
}
export default Login;
