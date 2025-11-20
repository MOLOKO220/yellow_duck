"use client";

import { useState, useEffect } from "react";
// slider
import Slider from "react-slick";
import type { Settings } from "react-slick";
import "./SimpleSlider.scss";

import { slides } from "./data";
import SliderItem from "../SliderItem/SliderItem";

export default function SimpleSlider() {
  const [slidesToShow, setSlidesToShow] = useState(2);

  const updateSlides = () => {
    const width = window.innerWidth;
    if (width < 780) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(2);
    }
  };

  useEffect(() => {
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <div className="SimpleSlider">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <SliderItem {...slide} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
