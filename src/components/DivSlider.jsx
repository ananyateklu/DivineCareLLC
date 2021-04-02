import React, { useState } from "react";
import { DivSliderData } from "./DivSliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const DivSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="Divslide">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      <div className="divslider">
        {DivSliderData.map((divslide, index) => {
          return (
            <div
              className={index === current ? "divslide active" : "divslide"}
              key={index}
            >
              {index === current && divslide.image}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DivSlider;
