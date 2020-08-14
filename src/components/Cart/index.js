import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import * as Custom from "./styleCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../actions";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.getProductToCart());
  }, [dispatch])
  const toggleCart = useSelector(state => state.displayCart);
  const data = useSelector(state => state.productIntoCart);
  return (
    <Custom.WrapCart style={toggleCart ? { visibility: 'visible' } : { visibility: 'hidden' }}>
      <Custom.HiddenCart onClick={() => dispatch(action.closeDisplayQuickCart())} ></Custom.HiddenCart>
      <Custom.Cart className={toggleCart ? "show-cart" : ""}>
        <Custom.HeaderCart>
          <span>
            Your Cart
          </span>
          <Custom.CloseCart>
            <FontAwesomeIcon icon={faTimes} onClick={() => dispatch(action.closeDisplayQuickCart())} />
          </Custom.CloseCart>
        </Custom.HeaderCart>
        <Custom.ListProducts>
          <ul>
            {
              data && data.map((item, index) => (
                <li key={index}>
                  <Custom.ImageProduct>
                    <img src={require("../../images/item-cart-01.jpg")} alt="IMG" />
                  </Custom.ImageProduct>
                  <Custom.InfoProduct>
                    <Link to="#">
                      White Shirt Pleat
                </Link>
                    <span>
                      1 x $19.00
                </span>
                  </Custom.InfoProduct>
                </li>
              ))
            }
          </ul>
          <Custom.FooterCart>
            <Custom.TotalPrice>
              Total: $75.00
              </Custom.TotalPrice>
            <Custom.ListBtn>
              <Link to="/shopping-cart">
                View Cart
                </Link>
              <Link to="/shopping-cart">
                Check Out
                </Link>
            </Custom.ListBtn>
          </Custom.FooterCart>
        </Custom.ListProducts>
      </Custom.Cart>
    </Custom.WrapCart>
  )
}