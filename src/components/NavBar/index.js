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
            <Icon disabled size='big' inverted color='white' name='github square' id="githubicon" />
            <Button size="big" animated>
                <NavLink to="/">
                    <Button.Content visible>Home</Button.Content>
                    <Button.Content hidden>
                        <Icon name='home' />
                    </Button.Content>
                </NavLink> 
            </Button>
        </nav>
    );
}

export default NavBar;
