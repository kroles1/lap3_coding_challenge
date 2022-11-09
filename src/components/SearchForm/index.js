import React, { useState } from 'react';


export default function SearchForm() {

    const [ username, setUsername ] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const updateInput = (e) => {
        const input = e.target.value 
        setUsername(input)
    }

    

    return (
        <form onSubmit={handleSubmit}>
            

            <input type="text" value={username} onChange={updateInput}/>
            
            <input type="submit" value="Search" />
        </form>
    );
};

