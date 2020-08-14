import React from "react";
import { useSelector } from 'react-redux';
import useCarousel from "../../../customHook/useCarousel";
import * as Custom from "./styleCarousel";

export default () => {
  const banner = useSelector(state => state.listBanners);
  const carousel = useCarousel({ nav: true, items: 1, loop: true, autoplay: true, animateOut: 'fadeOut' });
  return (
    <Custom.Carousel>
      <div className="owl-carousel owl-theme" ref={carousel}>
        {banner && banner.map((value, index) => {
          return (
            <div key={index} className="item">
              <img src={require(`../../../${value.pathImage}`)} alt={value.alt} />
            </div>)
        })}
      </div>
    </Custom.Carousel>
  )
}