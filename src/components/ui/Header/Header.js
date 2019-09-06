import React from 'react';
import logo from "../../../assets/logo.png";
import "./Header.scss";
function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={logo} alt="logo" />
            </div>
        </header>
    )
}
export default Header