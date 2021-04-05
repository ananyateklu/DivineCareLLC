import React, { Component } from "react";
import Servicespic from "../assets/extra1.jpg";

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
          <h4>HOME CARE SERVICES</h4>
          <div className="Homeservices1">
            <ul>
              <li>Registered Nurse Services</li>
              <li>Licenses Practical Nurse Services</li>
              <li>Medication Management Services</li>
              <li>
                Preparing modified diets ordered by licensed health
                professionals
              </li>
              <li>Shopping</li>
              <li>
                Providing eating assistance for clients with complicating eating
                problems (i.e. difficulty swallowing, recurrent lung
                aspirations, or requiring the use of a tube, parenteral or
                intravenous instruments)
              </li>
              <li>Meal preparations </li>
            </ul>
          </div>
          <div className="Homeservices2">
            <ul>
              <li>Hands-on assistance with transfers and mobility</li>
              <li>LaundryHousekeeping/ Other household chores</li>

              <li>Complex or Specialty Care services</li>
              <li>Delegated tasks to unlicensed personnel</li>
              <li>
                Assistance with dressing, self-feeding, oral hygiene, haircare,
                grooming, toileting, and bathing
              </li>
              <li>
                Providing standby assistance within arm's reach for safety while
                performing daily activities
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
              <li>CADI Wavier</li>
            </ul>
          </div>
          <div className="Agegroup">
            <h4>AGE GROUP</h4>
            <ul>
              <li>18 and older</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
