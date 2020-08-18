import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../actions"
import * as Custom from "./styleQuickView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import useCarousel from "../../customHook/useCarousel";

export default () => {
  const [state, setState] = useState({
    id: '',
    color: '',
    size: '',
    quantity: 1,
  });
  const [error, setError] = useState(null);
  const [imageActived, setImageActived] = useState(0);
  const carousel = useCarousel({ nav: true, items: 1, loop: true, startPosition: imageActived });
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.productDetailQuickView);
  const handleSubmit = useCallback((e) => {
    try {
      if (state.id === '' || state.color === '' || state.size === null || state.quantity === 0) throw new Error("Not null!");
      dispatch(action.addProductToCart(state));
      setError(null);
      e.preventDefault();
    } catch (error) {
      setError(error.message);
      e.preventDefault();
    }
  }, [dispatch, state])
  return (
    <React.Fragment>
      <Custom.Quickview>
        <div className="close-modal" onClick={() => dispatch(action.closeQuickView())}></div>
        <Custom.Modal>
          <Custom.Container>
            <Custom.CloseModal>
              <FontAwesomeIcon icon={faTimes} onClick={() => dispatch(action.closeQuickView())} />
            </Custom.CloseModal>
            <Custom.ContentModal>
              <Custom.Image>
                <Custom.ListImage>
                  {data.imagePath && data.imagePath.map((path, index) => (
                    <Custom.ItemImage key={index}>
                      <Custom.ItemImage >
                        <img src={`${process.env.REACT_APP_PORT}/${path}`} alt="IMG-PRODUCT" className={imageActived === index ? " actived" : ""} onClick={() => setImageActived(index)} />
                      </Custom.ItemImage>
                    </Custom.ItemImage>
                  ))}
                </Custom.ListImage>
                <Custom.PreviewImage>
                  <div className="owl-carousel owl-theme" ref={carousel}>
                    {data.imagePath && data.imagePath.map((path, index) => {
                      return (
                        <div key={index} className="item">
                          <img src={`${process.env.REACT_APP_PORT}/${path}`} alt="IMG-PRODUCT" />
                        </div>)
                    })}
                  </div>
                </Custom.PreviewImage>
              </Custom.Image>
              <Custom.DetailProduct>
                <Custom.InfoProduct>
                  <h4 className="product-name">
                    {data.productName}
                  </h4>
                  <span className="price">
                    ${data.price.toFixed(2)}
                  </span>
                  <p className="description">
                    {data.description}
                  </p>
                </Custom.InfoProduct>
                <Custom.InputDetail>
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <Custom.Size>
                      <div className="title">
                        Size
									    </div>
                      <Custom.select placeholder="Choose an option" onChange={value => setState({ ...state, size: value })}>
                        {data.details.map((detail, index) =>
                          <Custom.option key={index} value={detail.size}>Size {detail.size}</Custom.option>
                        )}
                      </Custom.select>
                    </Custom.Size>
                    <Custom.Color>
                      <div className="title">
                        Color
									    </div>
                      <Custom.select placeholder="Choose an option" onChange={value => setState({ ...state, color: value })}>
                        {data.details.map((detail, index) =>
                          <Custom.option key={index} value={detail.color}>Size {detail.color}</Custom.option>
                        )}
                      </Custom.select>
                    </Custom.Color>
                    <Custom.ModalBottom>
                      <Custom.Quantity>
                        <div className="minus" onClick={() => setState({ ...state, quantity: state.quantity > 0 && state.quantity - 1 })} >
                          <FontAwesomeIcon icon={faMinus} />
                        </div>
                        <Custom.InputQuantity type="number" name="num-product" defaultValue="1" value={state.quantity} onChange={(e) => setState({ ...state, quantity: e.target.value })} />
                        <div className="plus" onClick={() => setState({ ...state, quantity: state.quantity < 100 ? state.quantity + 1 : 100 })}>
                          <FontAwesomeIcon icon={faPlus} />
                        </div>
                      </Custom.Quantity>
                      {error && <p className="err">{error}</p>}
                      <Custom.Submit htmlType="submit" onClick={() => setState({ ...state, id: data._id })}>
                        Add to cart
										  </Custom.Submit>
                    </Custom.ModalBottom>
                  </form>
                </Custom.InputDetail>
              </Custom.DetailProduct>
            </Custom.ContentModal>
          </Custom.Container>
        </Custom.Modal>
      </Custom.Quickview>
    </React.Fragment >
  )
}