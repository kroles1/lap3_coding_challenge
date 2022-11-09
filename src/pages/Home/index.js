import React from 'react';
import { UserForm } from '../../components';
import { Outlet } from "react-router-dom";
import './home.css'

export default function Home() { 
    return (
        <>
            <h1>Home</h1>
            <div className='formdiv'>
                <div className='searchdiv'>
                Enter your username
                <UserForm />
                <Outlet />
                </div>
            </div>
        </>
    );
}
