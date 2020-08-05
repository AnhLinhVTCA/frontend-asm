import React from "react";
import * as Custom from "./typeHeader";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default () => {
  return (
    <Custom.Header>
      <Custom.Container>
        <Custom.Flex>
          <Custom.Logo>
            <Link to="#">
              <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
            </Link>
          </Custom.Logo>
          <Custom.Menu>
            <ul className="main-menu">
              <li>
                <Link to="index.html" className="active">Home</Link>
                <ul className="sub-menu">
                  <li><Link to="index.html">Homepage 1</Link></li>
                  <li><Link to="home-02.html">Homepage 2</Link></li>
                  <li><Link to="home-03.html">Homepage 3</Link></li>
                </ul>
              </li>
              <li>
                <Link to="product.html">Shop</Link>
              </li>
              <li className="hot">
                <Link to="shoping-cart.html">Features</Link>
                <span></span>
              </li>
              <li>
                <Link to="blog.html">Blog</Link>
              </li>
              <li>
                <Link to="about.html">About</Link>
              </li>
              <li>
                <Link to="contact.html">Contact</Link>
              </li>
            </ul>
          </Custom.Menu>
          <Custom.SelectIcon>
            <Custom.Icon>
              <FontAwesomeIcon icon={faSearch} />
            </Custom.Icon>
            <Custom.Icon>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>2</span>
            </Custom.Icon>
            <Link to="#">
              <FontAwesomeIcon icon={faHeart} />
              <span>2</span>
            </Link>
          </Custom.SelectIcon>
        </Custom.Flex>
      </Custom.Container>
    </Custom.Header>
  )
}