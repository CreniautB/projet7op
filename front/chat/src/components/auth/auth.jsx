import React from "react";
import Login from './login/login'
import Signup from './signup/signup'
import Header from '../header/header'
import './auth.css'

const Auth = () => {

    return (
        <div>
            <Header />
            <div className="authContainer">
            <Signup />
            <Login />
            </div>
        </div>
    ) 
}

export default Auth