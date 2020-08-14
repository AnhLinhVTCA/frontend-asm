import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Body from "./containers/Body";
import 'antd/dist/antd.css'
import { BrowserRouter } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Body />
      <Footer />
      <Cart />
    </BrowserRouter>
  )
}
