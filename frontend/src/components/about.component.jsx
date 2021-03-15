import React, { Component } from 'react'
import Aboutpic from "../assets/about.jpg"

export default class about extends Component {
    render() {
        return (
            <div className="About">
                <div className="Aboutpic">
                    <img src= {Aboutpic} alt="Homecare"/>
                </div>
                <div className="Abouttext">
                    <img alt="about" src="https://img.icons8.com/dusk/128/000000/about.png"/>
                    <h3>ABOUT DIVINE CARE LLC</h3>
                    <h6>Divine Care LLC is a care provider licensed with the state of Minnesota. 
                        We have a staff of highly trained nurses, home-health aides and certified 
                        nursing assistants who assist you through every step on your road to 
                        optimize your health while providing quality medical service and attentive support.</h6>

                        <h6>Our customized person-centered living facility is equipped to accommodate four clients per house, 
                        with one staff member available for every two clients. We also provide services pertaining to complex 
                        medical assistance.</h6>
                        <h6>From a state housed child foster care center in 2012, we have now equipped ourselves to a full-service 
                        customized adult living facility providing all kind of services from high-health needs, mechanical 
                        transfers to specialty assistance with day to day chores.</h6>
                </div>
              
            </div>
        )
    }
}
