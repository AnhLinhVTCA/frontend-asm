import React, { useState } from "react";
import "./styleCarousel.css";
import useCarousel from "../../customHook/useCarousel";

export default () => {
  const [state] = useState([{
    pathImage: "/assets/slider/slider7.jpg",
    alt: "slider7",
    content: "AMAZING FROM Lukani",
    title1: "BIG SALE",
    title2: "NEW ARRIVALS",
    discount: "Discount 20% Off For Lukani Members",
  }, {
    pathImage: "/assets/slider/slider7.jpg",
    alt: "slider7",
    content: "AMAZING FROM Lukani",
    title1: "BIG SALE",
    title2: "NEW ARRIVALS",
    discount: "Discount 20% Off For Lukani Members",
  }, {
    pathImage: "/assets/slider/slider7.jpg",
    alt: "slider7",
    content: "AMAZING FROM Lukani",
    title1: "BIG SALE",
    title2: "NEW ARRIVALS",
    discount: "Discount 20% Off For Lukani Members",
  }])
  const carousel = useCarousel({ nav: true, items: 1, loop: true });
  return (
    <div className="owl-carousel owl-theme" ref={carousel}>
      {state && state.map((value, index) => {
        return (<div key={index} className="item">
          <img src={value.pathImage} alt={value.alt} />
        </div>)
      })}
    </div>
  )
}