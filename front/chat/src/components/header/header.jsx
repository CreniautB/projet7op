import React from "react";
import './header.css'
import logo from './logo.png'

const Header = () => {

    return (
        <div className="header">
           <img className="logo" src={logo} alt="Logo" width="200"></img>
        </div>
    )
}
 
export default Header