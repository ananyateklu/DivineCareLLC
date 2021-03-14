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
          <div className="location1">
            <div className="Locationpic1">
              <img alt="location-pic" src={Applevalley} />
            </div>
            <div className="Locationtext1">
              <h6>2606 River Hills Drive, Burnsville MN 55337</h6>
              <h6>(952) 977-9171</h6>
            </div>
          </div>
          <div className="location2">
            <div className="Locationpic2">
              <img alt="location-pic" src={Burnsville} />
            </div>
            <div className="Locationtext2">
              <h6>14135 Garrett Ave, Apple Valley, MN 55124</h6>
              <h6>(952) 977-9171</h6>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
