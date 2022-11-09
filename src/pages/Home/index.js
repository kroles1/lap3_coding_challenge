import React from 'react';
import { UserForm } from '../../components';
import { Outlet } from "react-router-dom";


export default function Home() { 
    return (
        <>
            <h1>Home</h1>
            <div>
                Enter your username
                <UserForm />
                <Outlet />
            </div>
        </>
    );
}
