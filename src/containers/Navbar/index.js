import React, { Component } from "react";
import NavButton from "../../components/NavButton"
import Logo from "../../components/Logo"
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

class Navbar extends React.Component {

    constructor(props){
        super(props);

        this.selectLanguage = this.selectLanguage.bind(this);

        this.state = {
            menuItems : ["What we do","Who we work with","Contact"],
            selectedLang : "DK"
        }
    }

    selectLanguage(language){
        this.setState({selectedLang: language});
    }

    render(){
        return (
            <>
            <div className="Navbar">
                <Logo/>
                <ul className="MenuList">
                    <li className="NavButton Language">
                        <Link to={'/en'}>
                        <NavButton name="EN" className={`Language ${this.state.selectedLang === "EN" ? ("bold") : ("")}`}  onClick={() => this.selectLanguage("EN")}/>
                        </Link>
                    </li>
                    {/*<hr class = "Line Half"/>*/}
                    <div className="vl small"></div>
                    <li className="NavButton Language">
                        <Link to={'/dk'}>
                            <NavButton name="DK" className={`Language ${this.state.selectedLang === "DK" ? ("bold") : ("")}`}  onClick={() => this.selectLanguage("DK")}/>
                        </Link>
                    </li>
                    {/*<hr class = "Line Half"/>*/}
                    <div className="vl big"></div>
                    {this.state.menuItems.reverse().map((menuItem) => (
                        <li className="NavButton">
                            <Link smooth to={`#${menuItem}`}>
                                <NavButton name={menuItem}/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            </>
        );
    }
}
export default Navbar