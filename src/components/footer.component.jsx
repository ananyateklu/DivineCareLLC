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
            <h3 className="footerh3">Work: (952) 977-9171</h3>
            <h3 className="footerh3">Fax: (952) 426-3745</h3>
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
            <a
              className="BBBfooterb"
              href="https://www.bbb.org/us/mn/lakeville/profile/home-health-care/divine-care-llc-0704-96352970/#sealclick"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="Licence1"
                src="https://seal-minnesota.bbb.org/seals/blue-seal-280-80-bbb-96352970.png"
                alt="Divine Care, LLC BBB Business Review"
              />
            </a>
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
            Licensed by Minnesota Department of health ; includes comprehensive
            home care license, Housing with service and Clinical laboratory
            improvement Amendments certificates
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
