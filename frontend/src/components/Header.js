import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <h1>Banking App</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
