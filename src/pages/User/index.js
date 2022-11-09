import axios from 'axios';
import React, { useState } from 'react';
import { Outlet, useParams } from "react-router-dom";

export default function User() {
    const [repos, setRepos] = useState([])
    const params = useParams()
    const names = []
    repos.forEach((repo) => {
        names.push(repo.name)
    })
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

