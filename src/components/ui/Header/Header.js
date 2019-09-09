import React from 'react';
import logo from "../../../assets/logo.png";
import { Link } from 'react-router-dom'
import "./Header.scss";
function Header() {

    return (
        <header className="header">
            <div className="header-logo">
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
        </header>
    )
}
export default Header