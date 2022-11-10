import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Outlet, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function User() {
    const [repos, setRepos] = useState([])
    const params = useParams()
    const names = []
    const username = useSelector(state => state.username)
    repos.forEach((repo) => {
        names.push(repo.name)
    })
    useEffect(() => {
    const fetchRepos = async () => {
        try {
            const {data} = await axios.get(`https://api.github.com/users/${params.user}/repos`)
            setRepos(data)
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }
    fetchRepos()
}, [username])

    
    return (
        <div>
            <h1>{params.user}</h1>
            <ul>        
            {names.map((name) => (
            <li>  
                <a href={`/${params.user}/${name}`}>{name}</a>
             </li> 
            ))}
            </ul>
            <Outlet/>
        </div>
    );

}


