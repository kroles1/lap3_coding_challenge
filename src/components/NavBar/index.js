import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './nav.css'
import { Button, Icon } from 'semantic-ui-react'

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <nav>
            <Button animated onClick={() => navigate(-1)}>
                <Button.Content visible>Back</Button.Content>
                <Button.Content hidden>
                    <Icon name='arrow left' />
                </Button.Content>
            </Button>
            <Icon disabled size='big' inverted color='white' name='github square' id="githubicon" />
            <NavLink to="/">
            <Button size="big" animated className="home">
                    <Button.Content visible>Home</Button.Content>
                    <Button.Content hidden>
                        <Icon color="black" name='home' />
                    </Button.Content>
            </Button>
            </NavLink> 
        </nav>
    );
}

export default NavBar;
