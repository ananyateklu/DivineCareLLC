import React, { Component } from "react";
import Pic2 from "../assets/homeskill.jpg";
import Pic3 from "../assets/tick.png";
import Slider from "./Slider";
import Licence1 from "../assets/Licence1.png";
import Homecomp from "../assets/Homecomp4.jpg";

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
            Care LLC is primarily engaged inproviding personalized medical
            assistance such as skilled nursing, home care aide and therapeutic
            services through person-centered assistance living for people of all
            ages.
          </h6>
          <h6>
            Aging adults and senior residents require special healthcare
            assistance that should focus not only on physical and mental health
            but also on their spiritual and social well-being. At Divine Care
            LLC, we not only aim to optimize the health of our client but also
            encourage them to engage within the community and be independent.
          </h6>
          <img className="Licence1" src={Licence1} alt="Licence" />
        </div>
        <div className="Homeservices">
          <img className="Homeskillpic" src={Pic2} alt="pic2" />
          <div className="Homeskilltext">
            <div className="flex-containerhome">
              <div className="flex1">
                <div className="flex1in">
                  <h3>SKILLED NURSING FACILITIES AT DIVINE CARE LLC</h3>
                  <h6>
                    Our residential home, customized person center is equipped
                    to accommodate a maximum of 4 residents per house to create
                    the environment of home away from home.There can be many
                    occasions when you or your family member might require
                    medical attention. Divine Care provides home care aide
                    service wherein licensed medical professionals, and skilled
                    nurses deliver therapeutic services and day to day care and
                    assistance in the comfort of our customized living/ assisted
                    living. We are here to provide you with all the support you
                    need towards living a better life.
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
          <div className="firsticon">
          <img src="https://img.icons8.com/bubbles/100/000000/domain.png" alt="internet"/>
          <h6>Amenities including in-room wifi and cable</h6>
          </div>
          <div className="secondicon">
          <img src="https://img.icons8.com/bubbles/100/000000/home.png" alt="Homeicon"/>
          <h6>Homely environment</h6>
          </div>
          <div className="thirdicon">
          <img src="https://img.icons8.com/bubbles/100/000000/lock.png" alt="Securityicon"/>
          <h6>Home Security Device</h6>
          </div>
          <div className="forthicon">
          <img src="https://img.icons8.com/bubbles/100/000000/nurse-female.png" alt="Nurseicon"/>
          <h6>Licenced and registered nurses, home health aides and CNAs</h6>  
       
          </div>
          <div className="fifthicon">
          <img src="https://img.icons8.com/bubbles/100/000000/last-24-hours.png"  alt="24/7icon"/>
          <h6>24/7 On-Site Staff</h6> 
           
          </div>
        </div>
        <div className="Testimonials">
          <div className="Testimonialtext1">
            <h3>Testimonial</h3>
            <img className="Quotepic" src={Pic3} alt="quote-pic" />
            <h3>Richard Green</h3>
            <h3 className="Fatherof">Father of Divine Care Resident</h3>
            <h6>
              My son Jared has been a resident in the Divine Care residence in
              Burnsville for almost three years. Jared, his mother and I are
              extremely happy and pleased with the care he has received since
              the day he moved in. The Divine Care staff have been caring,
              attentive to his needs and wishes and are positive and timely in
              their actions and communications with Jared and with us. Jared has
              been in group homes for over twenty years. Prior to moving into
              this group home, Jared had been in two different group home
              settings. This is the best setting Jared has been in.
            </h6>
            <h6>
              Jared is a bright man, who needs help accessing his environment
              and daily needs. Jared needs twenty four hour supervision, has
              ophisticated medical equipment, uses a power wheelchair, and has
              medical conditions that need to be monitored. The Divine Care
              staff have done a great job helping Jared to safely and
              consistently access his environment and keep his technology
              working.
            </h6>
            <h6>
              I highly recommend Divine Care as a provider. They have great
              staff members, well defined leadership positions at the house
              level and an open and professional administrative staff.
            </h6>
          </div>
          <div className="Testimonialtext2">
            <h3>Testimonial</h3>
            <img className="Quotepic" src={Pic3} alt="quote-pic" />
            <h3>Dianne</h3>
            <h3 className="Fatherof">Father of Divine Care Resident</h3>
            <h6>
              I was introduced to Divine Care about 3 years ago. I immediately noticed the Genuine Sincerity of Fentu Zewdie and Staff in their concern for wellbeing of her clients.
            </h6>
            <h6>
             Its been a great experience ever since. I am impressed by the professional staff and support provided, and by the strong "can do" spirit -no matter the task. Divine Care develops person centered quality living experiences for individual with disabilities. All patients are treated with respect and dignity. 
            </h6>
            <h6>
            My brother Renton Ramsamooj has been a resident there for almost three years and he is happy and satisfied with his care and love from Divine Care. Thank you 
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
