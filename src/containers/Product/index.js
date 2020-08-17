import React, { useEffect } from "react";
import ListProducts from "../ListProducts";
import { useDispatch } from "react-redux";
import * as action from "../../actions";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.setIsHomePage(false));
  }, [dispatch])
  return (
    <ListProducts />
  )
}