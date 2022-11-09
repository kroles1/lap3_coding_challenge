import React, {useState} from "react"
import axios from "axios"

export default function Search({username}) {

    const [repos, setRepos] = useState("")

    const fetchRepos = async (username) => {
        try {
            const data = await axios.get (`https://api.github.com/users/${username}/repos`)
            setRepos(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
        <h2>Username: {username}</h2>
        <h3>Repos</h3>
        <p role="repos">{repos}</p>
        </>
    )
}



