import React, { useEffect } from "react";
import Carousel from "./Carousel";
import Banner from "./Banner";
import ListProduct from "../ListProducts";
import { useDispatch } from "react-redux";
import * as action from "../../actions";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.setIsHomePage(true))
  }, [dispatch])
  return (
    <React.Fragment>
      <Carousel />
      <Banner />
      <ListProduct />
    </React.Fragment>
  )
}