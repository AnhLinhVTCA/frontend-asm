import React, { useEffect, useState } from "react";
import * as Custom from "./typeHeader";
import TopBar from "./TopBar";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../actions";
import LoginForm from "../LoginForm";

export default () => {
  const [isScroll, setIsScroll] = useState(false);
  const isHomePage = useSelector(state => state.isHomePage)
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY >= 40) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    })
  }, [dispatch])
  const data = useSelector(state => state.productIntoCart);
  return (
    <Custom.Header>
      <div className={isHomePage ? "" : "menu-desktop"}>
        <TopBar />
        <Custom.Navigation className={isScroll ? "scroll" : ""}>
          <Custom.Container>
            <Custom.Flex>
              <Custom.Logo>
                <Link to="/">
                  <img src={`${process.env.REACT_APP_PORT}/images/icons/logo-01.png`} alt="IMG-LOGO" />
                </Link>
              </Custom.Logo>
              <Custom.Menu>
                <ul className="main-menu">
                  <li>
                    <NavLink to="/" exact >Home</NavLink>
                    <ul className="sub-menu">
                      <li><Link to="/">Homepage 1</Link></li>
                      <li><Link to="/">Homepage 2</Link></li>
                      <li><Link to="/">Homepage 3</Link></li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/product">Shop</NavLink>
                  </li>
                  <li className="hot">
                    <NavLink to="/shopping-cart">Features</NavLink>
                    <span></span>
                  </li>
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </Custom.Menu>
              <Custom.SelectIcon>
                <Custom.Icon>
                  <FontAwesomeIcon icon={faSearch} />
                </Custom.Icon>
                <Custom.Icon onClick={() => dispatch(action.openDisplayQuickCart())} >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span>{data ? data.length : 0}</span>
                </Custom.Icon>
                <Link to="#">
                  <FontAwesomeIcon icon={faHeart} />
                  <span>2</span>
                </Link>
              </Custom.SelectIcon>
            </Custom.Flex>
          </Custom.Container>
        </Custom.Navigation>
      </div>
      <LoginForm />
    </Custom.Header>
  )
}