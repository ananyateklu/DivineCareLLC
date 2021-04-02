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
                color: "#1c77dfdc",
                backgroundColor: "transparent",
                padding: "2px" ,
                marginRight: "15px",
                paddingTop: "40px",
                paddingBottom: "8px",
                borderBottom: "2.5px solid #68a5e7",
                
              }}
              exact
              to="/"
              className="linkoff"
            >
              HOME
            </NavLink>
            <NavLink
              activeStyle={{
                color: "#1c77dfdc",
                backgroundColor: "transparent",
                padding: "2px" ,
                paddingTop: "40px",
                paddingBottom: "8px",
                borderBottom: "2.5px solid #68a5e7",
              }}
              to="/aboutus"
              className="linkoff"
            >
              ABOUT US
            </NavLink>
            <NavLink
              activeStyle={{
                color: "#1c77dfdc",
                backgroundColor: "transparent",
                padding: "2px" ,
                paddingTop: "40px",
                paddingBottom: "8px",
                borderBottom: "2.5px solid #68a5e7", 
              }}
              to="/services"
              className="linkoff"
            >
              OUR SERVICES
            </NavLink>
            <NavLink
              activeStyle={{
                color: "#1c77dfdc",
                backgroundColor: "transparent",
                padding: "2px" ,
                paddingTop: "40px",
                paddingBottom: "8px",
                borderBottom: "2.5px solid #68a5e7",
              }}
              to="/contactus"
              className="linkoff"
            >
              CONTACT US
            </NavLink>
            <NavLink
              activeStyle={{
                color: "#1c77dfdc",
                backgroundColor: "transparent",
                padding: "2px" ,
                paddingTop: "40px",
                paddingBottom: "8px",
                borderBottom: "2.5px solid #68a5e7",
              }}
              to="/location"
              className="linkoff"
            >
              LOCATION
            </NavLink>
            <a className="ApplyButton" href="https://drive.google.com/file/d/1GIHt1QLGl8RKLgSOyeDIg1rlJMD_f5hA/view?usp=sharing" rel="noreferrer" target="_blank">APPLY NOW</a>
          </div>
        </header>
      </div>
    );
  }
}

