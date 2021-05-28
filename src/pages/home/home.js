import './home.css'
import React from 'react';
import {useHistory} from 'react-router-dom'

const Home = () => {
    const router = useHistory();
    return (
        <div className={'home-main'}>
            <h1>Home</h1>

            <h2 onClick={() => router.push('login')}>GO TO LOGIN</h2>
        </div>
    )
}

export default Home;
