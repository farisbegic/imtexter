import React, { useState } from 'react';
import './header.css'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { GrMenu, GrClose } from 'react-icons/gr';
import LinkButton from "../LinkButton/LinkButton";

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <nav className="navbar wrapper">
            <div className="nav-container">
                <Link to="/"><img src="./logo.png" alt="logo" className="nav-logo"/></Link>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={handleClick}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={handleClick}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={handleClick}>Contact</Link>
                    </li>
                    <li className="nav-item">
                        <LinkButton size="sm">TRY NOW</LinkButton>
                    </li>
                </ul>

                <div className="nav-icon" onClick={handleClick}>
                    { !click ? (<GrMenu size="25px"/>) : (<GrClose size="25px"/>)}
                </div>
            </div>
        </nav>
    );
};

export default Header;