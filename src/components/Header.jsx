import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo/logo.png';

function Header(){
    return (
        <nav className="navbar">
            <div className="logo">
                {/* Use Link to navigate to the home page */}
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </div>
        </nav>
    );
}
export default Header;