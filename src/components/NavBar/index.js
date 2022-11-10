import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './nav.css'

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <nav>
            <button onClick={() => navigate(-1)}>Back</button>
            <NavLink to="/">Home</NavLink>
        </nav>
    );
}

export default NavBar;
