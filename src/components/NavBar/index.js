import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <button onClick={() => navigate(-1)}>Back</button>
        </nav>
    );
}

export default NavBar;
