import React from 'react';
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Header />
      <Carousel />
      <Footer />
    </BrowserRouter>
  )
}
