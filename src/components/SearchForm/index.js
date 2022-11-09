import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function SearchForm() {
    const [ username, setUsername ] = useState("")
    const dispatch = useDispatch()

    const updateInput = (e) => {
        const input = e.target.value 
        setUsername(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'SEARCH', payload: username})
        window.location.href = `http://localhost:3000/${username}`    
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={updateInput}/>
            <input type="submit" value="Search" />
        </form>
    )
}

