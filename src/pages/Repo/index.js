import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react'
import './style.css'



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
    <div>
    <Card className="card" href={repoData.html_url}>
      <Card.Content>
        <Card.Header>{params.repo}</Card.Header>
        <Card.Description>
        Name: {repoData.name}
        </Card.Description>
        <Card.Description>
        Created at: {repoData.created_at}
        </Card.Description>
        <Card.Description>
        Last update: {repoData.updated_at}
        </Card.Description>
        <Card.Description>
        Visibility: {repoData.visibility}
        </Card.Description>
        <Card.Description>
        Forks: {repoData.forks}
        </Card.Description>
        <Card.Description>
        Watchers: {repoData.watchers_count}
        </Card.Description>
        <Card.Description>
        Stargazers: {repoData.stargazers_count}
        </Card.Description>
      </Card.Content>
    </Card>
    </div>
    
  );
}



