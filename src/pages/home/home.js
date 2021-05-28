import './home.css'
import React, {useCallback, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector,} from "react-redux";
import {incrementerCounter} from '../../store/store'
import API from "../../api/api";

const Home = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter)
    const increment = useCallback((counter) => dispatch(incrementerCounter(counter)), [dispatch]);
    const router = useHistory();

    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        API.get('albums')
            .then(res => {
                setAlbums(res.data);
                console.log(albums)
            })
            .catch(err => {
                console.log(err)
            })
    })
    return (
        <div className={'home-main'}>
            <h1>Home</h1>
            <h2>CPT : {counter}</h2>
            <h2 onClick={() => increment(counter + 1)}>Incrementer</h2>
            <h2 onClick={() => router.push('login')}>GO TO LOGIN</h2>
            {albums && albums.map(album => (
                <h4>{album.id} {album.title}</h4>
            ))}
        </div>
    )
}

export default Home;
