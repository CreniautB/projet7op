import React from "react";
import './header.css'
import logo from './logo.png'

const Header = () => {

    return (
        <div className="header">
           <img src={logo} alt="Logo" width="300"></img>
        </div>
    )
}
 
export default Header