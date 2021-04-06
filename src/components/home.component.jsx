import React, { Component } from "react";
import Pic2 from "../assets/new7.jpg";
import Slider from "./Slider";
import Homecomp from "../assets/Homecomp4.jpg";
import DivSlider from "./DivSlider";
import { DivSliderData } from "./DivSliderData";

export default class home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="Home">
        <Slider />
        <div className="Homewelcome">
          <div className="Titlediv">
            <h3 className="Title">WELCOME TO</h3>
            <h3 className="Title2"> DIVINE CARE LLC</h3>
          </div>
          <h6>
            When it comes to healthcare assistance, it is essential to make sure
            that the person seeking assistance receives holistic care. Divine
            Care LLC is primarily engaged in providing personalized medical
            assistance such as skilled nursing, home care aide and therapeutic
            services through person-centered assistance living for people of all
            ages. Our care focuses not only on physical and mental health, but
            also on their spiritual and social well-being. At Divine Care LLC,
            we not only aim to optimize the health of our client but also
            encourage them to engage within the community.
          </h6>
        </div>
        <div className="Homeservices">
          <img className="Homeskillpic" src={Pic2} alt="pic2" />
          <div className="Homeskilltext">
            <div className="flex-containerhome">
              <div className="flex1">
                <div className="flex1in">
                  <h3>SKILLED NURSING HOMES AT DIVINE CARE LLC</h3>
                  <h6>
                    Our residential home, customized person center is equipped
                    to accommodate a maximum of 4 residents per house to create
                    the environment of home away from home. There can be many
                    occasions when you or your family member might require
                    medical attention, therapeutic services, and assistance with
                    activities of daily living. These are all services that can
                    be provided at Divine Care by our skilled nurses and home
                    health aide staff at the comfort of our customized
                    living/assisted living homes. We are here to provide you
                    with all the support you need towards living a better life.
                  </h6>
                </div>
              </div>
              <div className="flex2">
                <div className="flex2in">
                  <img src={Homecomp} alt="Homepic" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Homemore">
          <div className="Titlediv2">
            <h3 className="Title">SOME KEY FEATURES OF OUR</h3>{" "}
            <h3 className="Title2"> SKILLED NURSING SERVICES</h3>
          </div>

          <div className="firsticon">
            <img
              src="https://img.icons8.com/bubbles/100/000000/domain.png"
              alt="internet"
            />
            <h6>Amenities including in-room wifi and cable</h6>
          </div>
          <div className="secondicon">
            <img
              src="https://img.icons8.com/bubbles/100/000000/home.png"
              alt="Homeicon"
            />
            <h6>Homely environment</h6>
          </div>
          <div className="thirdicon">
            <img
              src="https://img.icons8.com/bubbles/100/000000/lock.png"
              alt="Securityicon"
            />
            <h6>Home Security Device</h6>
          </div>
          <div className="forthicon">
            <img
              src="https://img.icons8.com/bubbles/100/000000/nurse-female.png"
              alt="Nurseicon"
            />
            <h6>
              Registered nurses, Licensed Practical nurses, and home health
              aides and CNAs
            </h6>
          </div>
          <div className="fifthicon">
            <img
              src="https://img.icons8.com/bubbles/100/000000/last-24-hours.png"
              alt="24/7icon"
            />
            <h6>24/7 On-Site and Night Awake Staff</h6>
          </div>
          <div className="sixthicon">
            <img
              src="https://img.icons8.com/office/100/000000/bus2.png"
              alt="van"
            />

            <h6>Transportation</h6>
          </div>
        </div>
        <div className="Testimonials">
          <h3>TESTIMONIAL</h3>
          <DivSlider slides={DivSliderData} />
        </div>
      </div>
    );
  }
}
