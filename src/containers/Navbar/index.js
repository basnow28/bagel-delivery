import React, { Component } from "react";
import NavButton from "../../components/NavButton"
import Logo from "../../components/Logo"
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = props => {
        let menuItems = ["What we do","Who we work with","Contact"];
        return (
            <div className="Navbar">
                <Logo/>
                <ul className="MenuList">
                    <li className="NavButton">
                        <Link smooth to={'/#'}>
                            <NavButton name="English"/>
                        </Link>
                    </li>
                    <hr class = "Line"/>
                    {menuItems.reverse().map((menuItem) => (
                        <li className="NavButton">
                            <Link smooth to={`#${menuItem}`}>
                                <NavButton name={menuItem}/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
}
export default Navbar