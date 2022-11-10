
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useSelector } from 'react-redux';

export default function Repo() {
    const [repoData, setRepoData] = useState([])
    const params = useParams() 
    const username = useSelector(state => state.username)
    useEffect(() => {
    const fetchRepo = async() => {
        try {
            const {data} = await axios.get(`https://api.github.com/repos/${params.user}/${params.repo}`)
            setRepoData(data);
        } catch (error) {
            console.log(error)
                
        }
    }
    fetchRepo()
}, [username])
    return (
    <>
    <h1>{params.repo}</h1>
    <ul>
    <li>Name: {repoData.name}</li>
        <li>URL: {repoData.url}</li>
        <li>Created at: {repoData.created_at}</li>
        <li>Last update: {repoData.updated_at}</li>
        <li>Visibility: {repoData.visibility}</li>
        <li>Forks: {repoData.forks}</li>
        <li>Watchers: {repoData.watchers_count}</li>
        <li>Stargazers: {repoData.stargazers_count}</li>
    </ul>
    </>
    
  );
}



