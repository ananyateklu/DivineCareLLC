import React, { Component } from 'react';
import logo from '../assets/divinelogom.png';
import { Link } from 'react-router-dom';
import './components.css';
export default class header extends Component {
    state = {
            ishome: false,
            isabout: false,
            isservices: false,
            iscontact: false,
            islocation: false,
        }
    componentDidMount() {
        this.setState({ishome: !this.state.ishome})
    }

    render() {
        return (
            <div className="Header">
                <header>
                <img className="Logo" src={logo} alt="logo"/>
                <div className="Links">
                    <Link to="/DivineCareLLC" className={this.state.ishome ? "linkon" : "linkoff"} onClick={ () => this.setState({ishome: true, isabout: false, iscontact: false, isservices: false, islocation: false}) }>HOME</Link>
                    <Link to="/aboutus" className= {this.state.isabout ? "linkon" : "linkoff"} onClick={ () => this.setState({ishome: false , isabout: true, iscontact: false, isservices: false, islocation: false})}>ABOUT US</Link>
                    <Link to="/services" className= {this.state.isservices ? "linkon" : "linkoff"} onClick={ () => this.setState({ishome: false , isabout: false, iscontact: false, isservices: true, islocation: false}) }>OUR SERVICES</Link>
                    <Link to="/contactus" className= {this.state.iscontact ? "linkon" : "linkoff"} onClick={ () => this.setState({ishome: false , isabout: false, iscontact: true, isservices: false, islocation: false}) }>CONTACT US</Link>
                    <Link to="/location" className= {this.state.islocation ? "linkon" : "linkoff"} onClick={ () => this.setState({ishome: false , isabout: false, iscontact: false, isservices: false, islocation: true}) }>LOCATION</Link>
                    <button>APPLY NOW</button>
                </div>
             
            </header>
            </div>
            
        )
    }
}
