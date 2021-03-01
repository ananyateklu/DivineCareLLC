import React, { Component } from 'react';
import logo from '../divinelogo.png';
import { Link } from 'react-router-dom';
import './components.css';
export default class header extends Component {
    render() {
        return (
            <header>
                <img className="Logo" src={logo} alt="logo"/>
                <div className="Links">
                    <Link>HOME</Link>
                    <Link>ABOUT US</Link>
                    <Link>OUR SERVICES</Link>
                    <Link>CONTACT US</Link>
                    <Link>LOCATION</Link>
                    <button>APPLY NOW</button>
                </div>
             
            </header>
        )
    }
}
