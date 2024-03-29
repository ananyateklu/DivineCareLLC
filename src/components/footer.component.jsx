import React, { Component } from "react";
import Logowhite from "../assets/divinecarelogo1.png";
import { Link } from "react-router-dom";

export default class footer extends Component {
  render() {
    return (
      <div className="Footer">
        <img src={Logowhite} alt="Logo-white" />
        <div className="Flex-containerfooter">
          <div className="Flexfooter1">
            <h3 className="footerh3">Divine Care</h3>
            <h3 className="footerh3">16125 Hyland Ave, Lakeville, MN 55044</h3>
            <h3 className="footerh3">Cell: (612) 423-9765</h3>
            <h3 className="footerh3">Work: (952) 681-2535</h3>
            <h3 className="footerh3">Fax: (952) 681-2410</h3>
            <h3 className="footerh3">Email: fzewdie@divincaremn.com</h3>
          </div>
          <div className="Flexfooter2">
            <Link className="footerlinks" to="/">
              HOME
            </Link>
            <Link className="footerlinks" to="/aboutus">
              ABOUT US
            </Link>
            <Link className="footerlinks" to="/services">
              OUR SERVICES
            </Link>
            <Link className="footerlinks" to="/contactus">
              CONTACT US
            </Link>
            <Link className="footerlinks" to="/location">
              LOCATION
            </Link>

            <br />
            <a
              className="Footerbutton"
              href="https://drive.google.com/file/d/1GIHt1QLGl8RKLgSOyeDIg1rlJMD_f5hA/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              APPLY NOW
            </a>
          </div>
        </div>

        <div className="Licence">
          <h6>
            Licensed by Minnesota Department of health ; includes assisted
            living license and Clinical laboratory improvement amendments
            certificate
          </h6>
        </div>
        <div className="Copyright">
          <h6>
            © 2021, Divine Care LLC Home Care. All Rights Reserved. Powered by{" "}
            <a
              className="icons8"
              href="https://icons8.com"
              rel="noreferrer"
              target="_blank"
            >
              icons8
            </a>
          </h6>
        </div>
      </div>
    );
  }
}
