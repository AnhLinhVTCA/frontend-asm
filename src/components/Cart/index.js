import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom"
import * as Custom from "./styleCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../actions";

export default () => {
  const [state, setState] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector(state => state.productIntoCart);
  const toggleCart = useSelector(state => state.displayCart);
  useEffect(() => {
    dispatch(action.getProductIntoCart());
  }, [dispatch])
  useEffect(() => {
    setState(data);
  }, [data])
  let total = 0;
  if (state.length > 0) {
    state.forEach(item => total += item.quantity * item.price);
  }
  const handleRemoveItemInCart = useCallback((index) => {
    const newState = state.slice()
    newState.splice(index, 1)
    setState(newState)
    dispatch(action.addProductToCart(newState))
  }, [dispatch, state])
  return (
    <Custom.WrapCart style={{ visibility: toggleCart ? 'visible' : 'hidden' }}>
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
              state && state.map((item, index) => (
                item.quantity > 0 && <li key={index} >
                  <Custom.ImageProduct onClick={() => handleRemoveItemInCart(index)} >
                    <img src={require(`../../${item.image}`)} alt="IMG" />
                  </Custom.ImageProduct>
                  <Custom.InfoProduct>
                    <Link to={`/product-detail/${item.id}`}>
                      {item.name}
                    </Link>
                    <span>
                      {item.quantity} x {item.price.toFixed(2)}
                    </span>
                  </Custom.InfoProduct>
                </li>
              ))
            }
          </ul>
          <div className="end-cart">
            <Custom.TotalPrice>
              Total: $ {total.toFixed(2)}
            </Custom.TotalPrice>
            <Custom.ListBtn>
              <Link to="/shopping-cart">
                View Cart
                </Link>
              <Link to="/shopping-cart">
                Check Out
                </Link>
            </Custom.ListBtn>
          </div>
        </Custom.ListProducts>
      </Custom.Cart>
    </Custom.WrapCart >
  )
}