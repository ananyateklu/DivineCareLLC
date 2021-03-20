import React, { Component } from "react";
import Pic2 from "../assets/homeskill.jpg";
import Pic3 from "../assets/tick.png";
import Slider from "./Slider";
import { SliderData } from "./SliderData";
import Licence1 from "../assets/Licence1.png";

export default class home extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="Home">
        <Slider slides={SliderData} />
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
                  <div className="firsticon">
                    <img
                      className="iconI"
                      alt="Interneticon"
                      src="data:image/png;base64,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"
                    />
                  </div>
                  <div className="secondicons">
                    <img
                      className="iconH"
                      alt="Homeicon"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAFpklEQVR4nO2cz28UZRjHv89MfxHYH7MspVRjYqIQDQa5WP8DgiCKJ0RqTEz6D6hRL0bwYA1e9NYa46FYb2iwF48cjFQOgBI1YtLEaCmdWWbeKbVdujuPhwIuuLudmXdm9u3m/SQ9zTPv++wnb999n/edWUCj0Wg0Go1G08Ac84Dj+eOOJ66v//njc8wDnc4rLNTpBMJg28vD1Fs7C2DkgUuXjKD+YqlU+rMTeUVBedGLrrvfIOMbAI80DSDMA3ipXCjMZppYRIxOJ9AOW4hjBtH3aCUZABjDYJx3XP+17DKLjpKimdl0PH+cGF8BtCXELf0g/qLi+RPM3JN6gjFQbuqwbTtHfX1nwDgSs4nvTA6OWZblJZqYJEqJXhTiMYNxDsATkk39AdM4Us7lfk0iryRQZuqoCHHAYFyEvGQAeAz1YNZ2/bj/FYmjhGjb88aYMQOgmGCzOSI+63je2wm2GZuOTh1zzAM5z58EYTTVjhhTS8X82KNEqy1DmPsqQnwAplEQdt27QJgH09T2Qu49IrodN4WOib5ThHwN4JmMuvyR13qO7tixdb7ZRcfzxwFuM/rpo3Ix/07czjsiesMiJC0Y12HgaLPixnHF/H0j+f8slIuFdtfbkvkcHaoISQvCrpbFTXvJADAk03VmomMUIWnRkeImk6kjgSIkLe4VN44neKPgcrEQ21fqI9r2/T3U23dRUvIqCJ+AMFJbXdlWW13ZBsKzYHwKoCrR7oE6GRds398j0UYoUh3RN4U4GDCmIbU+pr+MoHaoVCr91OzqDdfdZ5I5A/DD8fuAhxA5Kjmibc9/M2B8C7kiZLWdZADYaVlX6lw/DLmRnWSh1JTERc8xDziumCLwaQCmVGOEiXaS77LTsq6AMSnVV8okKtq2l4dzwj8PwomEmpwOG0hG+NhOkJjoRdfdT721H5BgpRdUq7+Eja1Xq1eT6jcNEhFtC/Fyx4qQO5imqcQGWSukkmNms+J5HxNjOo0ixOjvfzJ0cE9P+NgOEFu067pFR/gzDHojyYTuI8ArYUM5QmxcXNeNvTqJtS60fX8PBXwOwO64HYekWudgZKdlXWkXtOi6TxtkzALoSzmf32HQC+V8/reoN0Ye0TeFOEgBzyJ9yQDQb5I5c8N197UKWJdMM0hfMgDsRsAXFoV4LuqNkUa07flvEfhDyK6Po1MFY5IMTN9dXZgDA09xnY+DMIZsJDdSZ9C7O4r502FvCCWamfsqnv95guvj7oBxZnsx/3qYk5dQU0dFLJ3UkptAOFERS++HCQ03RxO/KpVQN8Mc6gkppRf5mwLiIExYONFMU1LJdDVGKDfhvwzF0ikQj4IxLJdYlxDxMQSpjf8wxz8SVMGYgIHp2srK1aGhoeVmQQsLC1t7tmzZiwAn0l7qyWz8Kyqa/64zH9qoInyQ/4oXeiiNrJQ8YZGgGkcyAAxa1uWA+XkAsZ8oSgv1RDMm4ki+y6BlXQLjsyRTSgL1RBv4UrYJMnAmiVSSRDnRUU5VWqHiaYtyogcHB2+p0EbSKCe6W9GiM0KLzggtOiO06IzQojNCi84ILTojtOiM0KIzQovOCOVE2/ay9FGZ4/yTysa/DMqJpt41+deVe26n+8pzDBT8ERE65XgeeK13qtXrxK1Yf+15bRSgk2llFxdFzwzXiXpGp1o+jSg3dXQrWnRGaNEZoUVnhBadEVp0RmjRGaFFZ4TSoqPse6i4v9GI0qIj7XsouL/RiIJ7HY1svO+h8v5GI7J7HUsAtiWUi+r45WKhEPdm2alD+oHETYTUZ5UTTfKP2G4aJD+r1NRxjbm/KJZmCdzyXe1ugIDLpUJ+ROa3SaVG9ONEVaO+dphBsZ/QVx0CLnOt97CM5DvtyHONud/y/TEwjgPYi83/BXkLwM8gTG/P5ydlJWs0Go1Go9FoNBqNRqPRdBv/AnUZF+90rphDAAAAAElFTkSuQmCC"
                    />
                    <div className="Display">
                      <h3>Display stuff</h3>
                    </div>
                    <img
                      className="iconS"
                      alt="Securityicon"
                      src="data:image/png;base64,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"
                    />
                  </div>
                  <div className="thirdicons">
                    <img
                      className="iconN"
                      alt="Nurseicon"
                      src="data:image/png;base64,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"
                    />
                    <img
                      className="iconT"
                      alt="24/7icon"
                      src="data:image/png;base64,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"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Testimonials">
          <div className="Testimonialtext">
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
        </div>
      </div>
    );
  }
}
