import React, { Component } from "react";
import NavButton from "../../components/NavButton"
import Hamburger from "../../components/Hamburger"
import Logo from "../../components/Logo"
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';
import { connect } from "react-redux";
import selectors from './selectors'
import * as actions from './actions'

class Navbar extends React.Component {

    constructor(props){
        super(props);

        this.selectLanguage = this.selectLanguage.bind(this);
        this.clickHamburger = this.clickHamburger.bind(this);

        this.state = {
            menuItems : ["What we do","Who we work with", "Contact"],
            hamburgerOpen: true,

        }
    }

    clickHamburger(){
        this.setState({hamburgerOpen: !this.state.hamburgerOpen});
    }

    selectLanguage(language){
        this.props.setLanguage(language)
    }

    render(){
        const { lang } = this.props.lang;

        return (
            <>
            <div className="Navbar">
                <Logo/>
                <Hamburger className = "NavButton Hamburger" onClick={() => this.clickHamburger()}/>
                <ul className={`MenuList ${(!this.state.hamburgerOpen && document.body.clientWidth<1250) ? ("off") : ("")}`}>
                    {this.state.menuItems.map((menuItem) => (
                        <li className="NavButton">
                            <Link smooth to={`#${menuItem}`}>
                                <NavButton name={menuItem}/>
                            </Link>
                        </li>
                    ))}
                    <div className="vl big"></div>
                    <li className="NavButton Language">
                        <Link to={'/dk'}>
                            <NavButton name="DA" className={`Language ${lang === "da-dk" ? ("bold") : ("")}`}  onClick={() => this.selectLanguage("da-dk")}/>
                        </Link>
                    </li>
                    <div className="vl small"></div>
                    <li className="NavButton Language">
                        <Link to={'/en'}>
                        <NavButton name="EN" className={`Language ${lang === "en-gb" ? ("bold") : ("")}`}  onClick={() => this.selectLanguage("en-gb")}/>
                        </Link>
                    </li>
   
                </ul>
            </div>
            </>
        );
    }
}
export default connect(selectors, actions)(Navbar)