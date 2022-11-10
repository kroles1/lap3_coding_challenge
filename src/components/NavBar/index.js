import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './nav.css'
import { Button, Icon } from 'semantic-ui-react'

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <nav>
            {/* <Button onClick={() => navigate(-1)}>Back</Button> */}
            <Button animated onClick={() => navigate(-1)}>
                <Button.Content visible>Back</Button.Content>
                <Button.Content hidden>
                    <Icon name='arrow left' />
                </Button.Content>
            </Button>
            <Button><NavLink to="/">Home</NavLink></Button>
        </nav>
    );
}

export default NavBar;
