import React, { Component } from 'react';
import logo from '../assets/divinelogo.png';
import { Link } from 'react-router-dom';
import './components.css';
export default class header extends Component {
    render() {
        return (
            <header>
                <img className="Logo" src={logo} alt="logo"/>
                <div className="Links">
                    <Link to="/">HOME</Link>
                    <Link to="/aboutus">ABOUT US</Link>
                    <Link to="/services">OUR SERVICES</Link>
                    <Link to="/contactus">CONTACT US</Link>
                    <Link to="/location">LOCATION</Link>
                    <button>APPLY NOW</button>
                </div>
             
            </header>
        )
    }
}
