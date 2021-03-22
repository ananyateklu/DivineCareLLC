import React, { Component } from "react";
import logo from "../assets/divinelogom.png";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"
import "./components.css";
import { Link } from 'react-router-dom';
export default class header extends Component {
  
  state = {
    mobile: true
  }

  expandNav() {
    this.setState({mobile: !this.state.mobile})
  }
  
  render() {
    const tab_class = this.state.mobile ? "none" : "block";

    return (
      <div className="Header">
        <header>
          <img className="Logo" src={logo} alt="logo" />
          <div className="Burger"><GiHamburgerMenu onClick={() => this.expandNav()} className="Bur"/></div>
          <div className="Burgerstuff" style={{display : tab_class}}>
                    <Link className="link" to="/">HOME</Link>
                    <Link className="link" to="/aboutus">ABOUT US</Link>
                    <Link className="link" to="/services">OUR SERVICES</Link>
                    <Link className="link" to="/contactus">CONTACT US</Link>
                    <Link className="link" to="/location">LOCATION</Link>
                    <button className="Headerbutton">APPLY NOW</button>    
                    </div>
          <div className="Links">
            <NavLink
              activeStyle={{
                color: "white",
                backgroundColor: "#5893d4",
                paddingTop: "40px",
                paddingBottom: "42px",
              }}
              exact
              to="/"
              className="linkoff"
            >
              HOME
            </NavLink>
            <NavLink
              activeStyle={{
                color: "white",
                backgroundColor: "#5893d4",
                paddingTop: "40px",
                paddingBottom: "42px",
              }}
              to="/aboutus"
              className="linkoff"
            >
              ABOUT US
            </NavLink>
            <NavLink
              activeStyle={{
                color: "white",
                backgroundColor: "#5893d4",
                paddingTop: "40px",
                paddingBottom: "42px",
              }}
              to="/services"
              className="linkoff"
            >
              OUR SERVICES
            </NavLink>
            <NavLink
              activeStyle={{
                color: "white",
                backgroundColor: "#5893d4",
                paddingTop: "40px",
                paddingBottom: "42px",
              }}
              to="/contactus"
              className="linkoff"
            >
              CONTACT US
            </NavLink>
            <NavLink
              activeStyle={{
                color: "white",
                backgroundColor: "#5893d4",
                paddingTop: "40px",
                paddingBottom: "42px",
              }}
              to="/location"
              className="linkoff"
            >
              LOCATION
            </NavLink>
            <button>APPLY NOW</button>
          </div>
        </header>
      </div>
    );
  }
}

