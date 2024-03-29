import React, { Component } from "react";
import Aboutpic from "../assets/aboutuspic12.jpg";
import New1 from "../assets/new1.jpg";
import New2 from "../assets/new2.jpg";
import New3 from "../assets/new3.jpg";
import New4 from "../assets/new4.jpg";

export default class about extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="About">
        <div className="Aboutpic">
          <img src={Aboutpic} alt="Homecare" />
        </div>
        <div className="Abouttext">
          <div className="AboutContent">
            <img
              className="Abouticon"
              alt="about"
              src="https://img.icons8.com/dusk/128/000000/about.png"
            />
            <div className="Titlediv">
              <h3 className="Title">ABOUT</h3>
              <h3 className="Title2"> DIVINE CARE LLC</h3>
            </div>
            {/* <h3>ABOUT DIVINE CARE LLC</h3> */}
            <h6>
              Divine Care LLC is a residential assisted living licensed facility
              in the state of Minnesota. We have a staff of highly trained
              nurses, home-health aides and certified nursing assistants who
              assist you through every step on your road to optimize your health
              while providing quality medical service and attentive support.
            </h6>
            <h6>
              Our customized person-centered living facility is equipped to
              accommodate upto 5 clients per house, with one staff member
              available for every two clients. We also provide services
              pertaining to complex medical assistance.
            </h6>
            <h6>
              From a state housed child foster care center in 2012, we have now
              equipped ourselves to a full-service residential assisted adult
              living facility providing all kind of services from high-health
              needs, mechanical transfers to specialty assistance with day to
              day chores.
            </h6>
            <br />
            <br />
            <br />
            <br />
            <h3 className="Title">MEET THE FOUNDER OF</h3>{" "}
            <h3 className="Title2">DIVINE CARE LLC</h3>
            <h6>
              Working as a nurse since 1988, Fentu Zewdie, RN holds over 26
              years of experience in hospital settings and intensive care unit
              (ICU). Over these years, she was associated with coveted medical
              institutions like MD Anderson Cancer Centre in Houston, Texas and
              the Abbott North-Western Hospital in Minnesota. Married, with four
              grown kids, Fentu is a follower of the Christian faith.{" "}
            </h6>
            <h6>
              From being a floor nurse to now owning and managing an assisted
              living facility, Fentu has come a long way. Her mission behind the
              establishment of Divine Care LLC is to move the people of Minnesota
              from nursing home to a home-based care environment where they can
              live within the community and maintain optimal health.{" "}
            </h6>
            <h6>
              Fentu has always been passionate about seeing people grow and
              helping them turn their life around. For her, its not just about
              providing healthcare assistance or aiding residents in their day
              to day tasks like feeding or cleaning, but also wants everyone to
              thrive in the community and cherish their independence.
            </h6>
          </div>
          <img className="BottomPics" src={New1} alt="" />
          <img className="BottomPics" src={New2} alt="" />
          <img className="BottomPics" src={New3} alt="" />
          <img className="BottomPics" src={New4} alt="" />
        </div>
      </div>
    );
  }
}
