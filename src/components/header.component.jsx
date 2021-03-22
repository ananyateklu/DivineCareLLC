import React, { Component } from "react";
import logo from "../assets/divinelogom.png";
import { NavLink } from "react-router-dom";
import "./components.css";
export default class header extends Component {
  render() {
    return (
      <div className="Header">
        <header>
          <img className="Logo" src={logo} alt="logo" />
          <div className="Links">
            <NavLink
              activeStyle={{
                color: "white",
                backgroundColor: "#5893d4",
                paddingTop: "40px",
                paddingBottom: "40px",
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
                paddingBottom: "40px",
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
                paddingBottom: "40px",
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
                paddingBottom: "40px",
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
                paddingBottom: "40px",
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

