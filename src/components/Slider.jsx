import React, { Component } from "react";
import Pic1 from "../assets/homepic1.jpg";
import Pic2 from "../assets/homepic2.jpg";
import Pic3 from "../assets/homepic3.jpg";

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      track: true
    }

  }

  trackerFunction() {
    this.setState({track:false})
  }

  counterFunction() {
      var counter = this.state.counter;
      setInterval(function () {
        document.getElementById("radio" + counter).checked = true;
        counter++;
        if (counter > 3) {
          counter = 1;
        }
      }, 4000);
 

  }

  render() {

    return (
      <div className="imgbody">
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3" />

            <div className="slide first">
              <img src={Pic1} alt="pic1" />
            </div>
            <div className="slide">
              <img src={Pic2} alt="pic2" />
            </div>
            <div className="slide">
              <img src={Pic3} alt="pic3" />
            </div>

            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
            </div>

            <div className="navigation-manual">
              <label for="radio1" className="manual-btn"></label>
              <label for="radio2" className="manual-btn"  ></label>
              <label for="radio3" className="manual-btn"></label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
