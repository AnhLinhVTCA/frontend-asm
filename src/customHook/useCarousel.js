import { useEffect, useRef } from "react";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel";

export default (option) => {
  const carousel = useRef();

  useEffect(() => {
    $(carousel.current).owlCarousel(option);
  }, [option])

  return carousel
}