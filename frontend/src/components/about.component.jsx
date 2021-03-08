import React, { Component } from 'react'
import Aboutpic from "../assets/aboutpic.jpg"

export default class about extends Component {
    render() {
        return (
            <div className="About">
                <div className="Aboutpic">
                    <img src= {Aboutpic} alt="Homecare"/>
                </div>
                <div className="Abouttext">

                </div>
              
            </div>
        )
    }
}
