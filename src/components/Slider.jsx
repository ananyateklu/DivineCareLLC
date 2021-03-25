import React, { Component } from "react";
import Pic1 from "../assets/Home1.jpg";
import Pic2 from "../assets/Home2.jpg";
import Pic3 from "../assets/Home3.jpg";
import Pic4 from "../assets/Home4.jpg";

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
    };
  }
  componentDidMount() {
      this.counterFunction();
  }
 

  counterFunction() {
    var counter = 1;
    setInterval(function () {
      if(document.getElementById("radio"+counter) != null) {
        document.getElementById("radio" + counter).checked = true;
        counter++;
        if (counter > 4) {
          counter = 1;
        }
      }
      
    }, 5000);
  }

  render() {
    return (
      <div className="imgbody">
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />

            <div className="slide first">
              <img src={Pic1} alt="pic1" />
            </div>
            <div className="slide">
              <img src={Pic2} alt="pic2" />
            </div>
            <div className="slide">
              <img src={Pic3} alt="pic3" />
            </div>
            <div className="slide">
              <img src={Pic4} alt="pic4" />
            </div>

            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
            </div>

            <div className="navigation-manual">
              <label for="radio1" className="manual-btn"></label>
              <label for="radio2" className="manual-btn"></label>
              <label for="radio3" className="manual-btn"></label>
              <label for="radio4" className="manual-btn"></label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
