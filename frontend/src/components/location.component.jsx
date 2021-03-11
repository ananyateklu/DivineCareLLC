import React, { Component } from "react";
import Applevalley from "../assets/applevalley.jpg";
import Burnsville from "../assets/burnsville.jpg";
export default class location extends Component {
  render() {
    return (
      <div className="Location">
        <img
          alt="Location-icon"
          src="https://img.icons8.com/officel/100/000000/worldwide-location--v2.png"
        />
        <h3>OUR LOCATIONS</h3>
        <div className="Locationpics">
          <div className="Locationdiv1">
            <img alt="location-pic" src={Applevalley} />
          </div>
          <div className="Locationdiv2">
            <img alt="location-pic" src={Burnsville} />
          </div>
        </div>
      </div>
    );
  }
}
