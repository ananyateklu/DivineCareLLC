import React, { Component } from "react";
import Contactpic from "../assets/contactpic3.jpg";
import Gmap from "./googlemaps.component";
import Gmap2 from "./googlemaps2.component";
import emailjs from "emailjs-com";

class contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  //sendEmail creates a call to email js to use it for send information straight to email
  sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
          window.location.reload();
        }
      );
  }

  render() {
    return (
      <div className="Contact">
        <div className="Contactpic">
          <img src={Contactpic} alt="Homecare" />
        </div>
        <div className="Contacttitle">
          <h3>CONTACT US</h3>
          {/* <hr /> */}
          <div className="Contactinfo">
            <img
              alt="contactpic1"
              src="https://img.icons8.com/dusk/100/000000/phone.png"
            />
            <h4>Phone</h4>
            <h6>(612) 423-9765</h6>
          </div>
          <div className="Contactinfo">
            <img
              alt="contactpic2"
              src="https://img.icons8.com/dusk/100/000000/email.png"
            />
            <h4>Email</h4>
            <h6>info@divinecaremn.org</h6>
          </div>
          <div className="Contactinfo">
            <img
              alt="contactpic3"
              src="data:image/png;base64,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"
            />
            <h4>Address</h4>
            <h6>16125 Hyland Ave, Lakeville, MN 55044</h6>
          </div>
          <div className="Contactinfo">
            <img
              alt="contactpic4"
              src="https://img.icons8.com/dusk/100/000000/fax.png"
            />
            <h4>Fax</h4>
            <h6>(952) 426-3745</h6>
          </div>
        </div>
        <div className="Contacttext">
       
          <div className="Contactinput">
            <form onSubmit={this.sendEmail}>
              <div className="Nameinput">
                <h4>Name</h4>
                <input className="inputs" type="text" name="Name"></input>
              </div>
              <div className="Phoneinput">
                <h4>Phone</h4>
                <input className="inputs"  type="number" name="Phone"></input>
              </div>
              <div className="Emailinput">
                <h4>Email</h4>
                <input className="inputs"  type="email" name="Email"></input>
              </div>
              <div className="Lastinput">
                <h4>Comments/Questions</h4>
                <textarea name="Comments"></textarea>
                <div className="Submitbuttondiv">
                  <input
                    type="submit"
                    className="SubmitBtn"
                    value="Send"
                  ></input>
                </div>
              </div>
            </form>
          </div>
          <div className="Divmap">
          {/* Google maps */}
          <Gmap />
        </div>
        <div className="Divmapmobile">
          {/* Google maps */}
          <Gmap2 />
        </div>
        </div>
        
      </div>
    );
  }
}

export default contact;
