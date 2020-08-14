import React, { useState, useEffect } from "react";
import * as Custom from "./styleFeature";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from 'react-redux';
import * as action from "../../actions";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default () => {
  const [state, setState] = useState([]);
  const data = useSelector(state => state.productIntoCart);
  const dispatch = useDispatch();
  useEffect(() => {
    setState(data);
  }, [data])
  const columns = [
    {
      title: '',
      dataIndex: 'image',
      key: 'image',
      width: '10%',
      render: (text) => {
        return <img src={require(`../../${text}`)} alt="PRODUCT" width='100%' />
      }
    },
    {
      title: 'PRODUCT',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
    },
    {
      title: 'PRICE',
      dataIndex: 'price',
      key: 'price',
      width: '15%',
      render: (text) => `$ ${text}`
    },
    {
      title: 'QUANTITY',
      dataIndex: 'quantity',
      key: 'quantity',
      width: '30%',
      render: (text, row, index) => {
        return (
          <Custom.Quantity>
            <div className="minus" onClick={() => handleMinus(index)} >
              <FontAwesomeIcon icon={faMinus} />
            </div>
            <Custom.InputQuantity type="number" name="num-product" value={text} onChange={e => hanleInputQuantity(e, index)} />
            <div className="plus" onClick={() => handlePlus(index)}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </Custom.Quantity>)
      }
    },
    {
      title: 'TOTAL',
      dataIndex: 'total',
      key: 'total',
      width: '15%',
      render: (text, row) => `$ ${row.price * row.quantity}`
    },
  ];
  const hanleInputQuantity = (e, index) => {
    const newState = state.slice()
    if (e.target.value > 0 && e.target.value < 100) newState[index].quantity = e.target.value
    setState(newState)
  }
  const handleMinus = (index) => {
    const newState = state.slice()
    newState[index].quantity > 0 ? newState[index].quantity -= 1 : newState[index].quantity = 0;
    if (newState[index].quantity === 0) newState.splice(index, 1)
    setState(newState)
  };
  const handlePlus = (index) => {
    const newState = state.slice()
    newState[index].quantity < 100 ? newState[index].quantity += 1 : newState[index].quantity = 100;
    setState(newState)
  };
  return (
    <Custom.Feature>
      <Custom.Container>
        <Custom.Location>
          <Link to="/">Home &gt;</Link>
          <span>Shoping Cart</span>
        </Custom.Location>
        <Custom.form>
          <div className="d-flex">
            <Custom.leftFeature>
              <Custom.table rowKey={record => record.id} dataSource={state} columns={columns} pagination={false} />
              <Custom.EndLeftFeature>
                <div className="d-flex">
                  <Custom.input type="text" name="coupon" placeholder="Coupon Code" />
                  <Custom.button>
                    Apply coupon
                  </Custom.button>
                </div>
                <Custom.button onClick={() => dispatch(action.addProductToCart(state))}>
                  Update Cart
                </Custom.button>
              </Custom.EndLeftFeature>
            </Custom.leftFeature>
            <Custom.rightFeature>
              <h4>
                Cart Totals
						  </h4>
              <div className="info-cart">
                <span className="title">
                  Subtotal:
								  </span>
                <span>
                  $79.65
								  </span>
              </div>

              <div className="info-shipping">
                <span className="title">
                  Shipping:
								  </span>
                <div className="right-shipping">
                  <p>
                    There are no shipping methods available. Please double check your address, or contact us if you need any help.
								  </p>

                  <div className="calculate-shipping">
                    <span>
                      Calculate Shipping
									  </span>
                    <Custom.select placeholder="Select a country..." name="country">
                      <Custom.option value="USA">USA</Custom.option>
                      <Custom.option value="UK">UK</Custom.option>
                    </Custom.select>
                    <Custom.inputShipping type="text" name="state" placeholder="State /  country" />
                    <Custom.inputShipping type="text" name="postcode" placeholder="Postcode / Zip" />
                    <Custom.button>
                      Update Totals
                    </Custom.button>
                  </div>
                </div>
              </div>
              <Custom.Total>
                <span className="title">
                  Total:
								  </span>
                <span>
                  $79.65
								  </span>
              </Custom.Total>
              <Custom.buttonSubmit>
                Proceed to Checkout
						  </Custom.buttonSubmit>
            </Custom.rightFeature>
          </div>
        </Custom.form>
      </Custom.Container>
    </Custom.Feature >
  )
}