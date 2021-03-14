import React, { Component } from 'react'
import Logowhite from '../assets/divinelogowhite.png'
import { Link } from 'react-router-dom';

export default class footer extends Component {
    render() {
        return (
            <div className="Footer">
                <img src={Logowhite} alt="Logo-white"/> 
                <div className="Flex-containerfooter">
                    <div className="Flexfooter1">
                        <h3 className="footerh3">Divine Care</h3>
                        <h3 className="footerh3">16125 Hyland Ave, Lakeville, MN 55044</h3>
                        <h3 className="footerh3">Cell: (612) 423-9765</h3>
                        <h3 className="footerh3">Work: (952) 977-9171</h3>
                        <h3 className="footerh3">Fax: (952) 426-3745</h3>
                        <h3 className="footerh3">Email: fzewdie@divincaremn.com</h3>
                    </div>
                    <div className="Flexfooter2">
                    <Link to="/DivineCareLLC">HOME</Link>
                    <Link to="/aboutus">ABOUT US</Link>
                    <Link to="/services">OUR SERVICES</Link>
                    <Link to="/contactus">CONTACT US</Link>
                    <Link to="/location">LOCATION</Link>
                    <button className="Footerbutton">APPLY NOW</button>    
                    </div>
                </div>

                <div className="Licence">
                    <h6>Licensed by  Minnesota Department of health ; 
                        includes comprehensive home care license,  
                        Housing with service and Clinical laboratory 
                        improvement Amendments certificates</h6>
                </div>   
                <div className="Copyright">
                    <h6>© 2021, Divine Care LLC Home Care. All Rights Reserved.</h6>
                </div>          
            </div>
        )
    }
}
