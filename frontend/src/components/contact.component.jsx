import React, { Component } from 'react';
import Contactpic from "../assets/contactpic.jpg"
// import Gmap from "./googlemaps.component"


class contact extends Component {
    render() {
        return (
            <div className="Contact">
                <div className="Contactpic">
                    <img src= {Contactpic} alt="Homecare"/>
                </div>
                <div className="Contacttitle">
                    <h3>CONTACT US</h3>
                    </div>
                <div className="Contacttext">
                    
                    <div className="Contactinput">
                        <h4>Name</h4>
                        <input></input>
                        <h4>Phone</h4>
                        <input></input>
                        <h4>Email</h4>
                        <input></input>
                        <h4>Message</h4>
                        <input></input>
                        
                    </div>
                    {/* <div className="Divmap">
                    <Gmap/>
                    </div> */}
                </div>
                
                  
             
            </div>
        );
    }
}

export default contact;