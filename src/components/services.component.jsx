import React, { Component } from "react";
import Servicespic from "../assets/homepic2.jpg";
import New5 from "../assets/new5.jpg";
import New6 from "../assets/new6.jpg";
import New12 from "../assets/new12.jpeg";
import New10 from "../assets/new10.jpeg";

export default class services extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="Services">
        <div className="Servicespic">
          <img src={Servicespic} alt="Homecare" />
        </div>
        <div className="Servicestext">
          <div className="ServicesContent">
            <div className="Servicestitle">
              <img
                alt="services"
                src="https://img.icons8.com/dusk/100/000000/treatment-plan.png"
              />
              <div className="Titlediv">
                <h3 className="Title">SERVICES PROVIDED BY</h3>
                <h3 className="Title2"> DIVINE CARE LLC</h3>
              </div>
              {/* <h3>SERVICES PROVIDED BY DIVINE CARE LLC</h3> */}
            </div>
            <h4>ASSISTED LIVING SERVICES</h4>
            <div className="Homeservices1">
              <ul>
                <li>Registered Nurse Services</li>
                <li>Licensed Practical Nurse Services</li>
                <li>Medication Management Services</li>
                <li>
                  Preparing modified diets ordered by licensed health
                  professionals
                </li>
                <li>Shopping</li>
                <li>
                  Providing eating assistance for clients with complicating
                  eating problems (i.e. difficulty swallowing, recurrent lung
                  aspirations, or requiring the use of a tube, parenteral or
                  intravenous instruments)
                </li>
                <li>Meal preparations </li>
              </ul>
            </div>
            <div className="Homeservices2">
              <ul>
                <li>Hands-on assistance with transfers and mobility</li>
                <li>Laundry, Housekeeping and other household chores</li>

                <li>Complex or Specialty Care services</li>
                <li>Delegated tasks to unlicensed personnel</li>
                <li>
                  Assistance with dressing, self-feeding, oral hygiene,
                  haircare, grooming, toileting, and bathing
                </li>
                <li>
                  Providing standby assistance within arms reach for safety
                  while performing daily activities
                </li>
                <li>
                  Providing verbal or visual reminders to the client to perform
                  regularly scheduled treatments and exercises
                </li>
              </ul>
            </div>
            <div className="Payment">
              <h4>PAYMENT METHOD</h4>
              <ul>
                <li>Private Pay </li>
                <li>Medical Assistance</li>
              </ul>
            </div>
            <div className="Agegroup">
              <h4>AGE GROUP</h4>
              <ul>
                <li>18 and older</li>
              </ul>
            </div>
          </div>

          <img className="BottomPics" src={New5} alt="" />
          <img className="BottomPics" src={New6} alt="" />
          <img className="BottomPics" src={New12} alt="" />
          <img className="BottomPics" src={New10} alt="" />
        </div>
      </div>
    );
  }
}
