import React from "react";
import Carousel from "./Carousel";
import Banner from "./Banner";
import ListProduct from "../ListProducts";

export default () => {
  return (
    <React.Fragment>
      <Carousel />
      <Banner />
      <ListProduct />
    </React.Fragment>
  )
}