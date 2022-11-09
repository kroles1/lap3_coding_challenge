import React, {useState} from "react"
import axios from "axios"

export default function Search() {
    const [repos, setRepos] = useState("")
    const fetchRepos = async (username) => {
        try {
            const data = await axios.get (`https://api.github.com/users/${username}/repos`)
            setRepos(data.data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    fetchRepos()
}



