import React, { useState, useCallback, useEffect } from "react";
import * as Custom from "./styleDetail";
import * as CustomProduct from "../ListProducts/styleListProduct";
import * as action from "../../actions";
import QuickView from "../QuickView";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faHeart } from "@fortawesome/free-solid-svg-icons";
import useCarousel from "../../customHook/useCarousel";
import { Link } from "react-router-dom"

export default ({ id }) => {
  const [state, setState] = useState({
    id: '',
    color: '',
    size: '',
    quantity: 1,
  });
  const [error, setError] = useState('');
  const [indexImageActived, setindexImageActived] = useState(0);
  const dispatch = useDispatch();
  const carousel = useCarousel({ nav: true, items: 1, loop: true, startPosition: indexImageActived });
  const carousel2 = useCarousel({ nav: true, items: 4 });
  useEffect(() => {
    dispatch(action.setIsHomePage(false))
    if (id) {
      dispatch(action.getProductDetail(id));
      dispatch(action.listProducts())
    }
  }, [dispatch, id])
  const { data } = useSelector(state => state.productDetail);
  const { status } = useSelector(state => state.productDetailQuickView);
  const listProducts = useSelector(state => state.listProducts);
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
    <Custom.Product>
      {
        data &&
        <Custom.Container>
          <Custom.Location>
            <Link to="/">Home &gt;</Link>
            <Link to="/">{data.category} &gt;</Link>
            <span>{data.ProductName}</span>
          </Custom.Location>
          <Custom.ContentModal>
            <Custom.Image>
              <Custom.ListImage>
                {data.imagePath && data.imagePath.map((path, index) => (
                  <Custom.ItemImage key={index}>
                    <Custom.ItemImage >
                      <img src={`${process.env.REACT_APP_PORT}/${path}`} alt="IMG-PRODUCT" className={indexImageActived === index ? " actived" : ""} onClick={() => setindexImageActived(index)} />
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
          <Custom.tabs defaultActiveKey={1} >
            <Custom.tabPane tab="Description" key={1}>
              {data.description}
            </Custom.tabPane>
            <Custom.tabPane tab="Additional information" key={2}>
              <ul>
                <li>
                  <span className="title-info">
                    Weight
    									</span>

                  <span>
                    0.79 kg
    									</span>
                </li>

                <li>
                  <span className="title-info">
                    Dimensions
    									</span>

                  <span>
                    110 x 33 x 100 cm
    									</span>
                </li>

                <li>
                  <span className="title-info">
                    Materials
    									</span>

                  <span>
                    60% cotton
    									</span>
                </li>

                <li>
                  <span className="title-info">
                    Color
    									</span>

                  <span>
                    Black, Blue, Grey, Green, Red, White
    									</span>
                </li>

                <li>
                  <span className="title-info">
                    Size
    									</span>

                  <span>
                    XL, L, M, S
    									</span>
                </li>
              </ul>
            </Custom.tabPane>
            <Custom.tabPane tab="Reviews" key={3}>
            </Custom.tabPane>
          </Custom.tabs>
        </Custom.Container>
      }
      {
        data &&
        <Custom.subText>
          <span>
            SKU: JAK-01
    	    </span>
          <span>
            Categories: {data.category}
          </span>
        </Custom.subText>
      }
      <Custom.RelateProduct>
        <Custom.Container>
          <Custom.TitleRelate>
            <h3>
              Related Products
				    </h3>
          </Custom.TitleRelate>
          {
            listProducts && <div className="owl-carousel owl-theme" ref={carousel2}>
              {listProducts.data.map((item, index) => {
                return (
                  <Custom.Item key={index}>
                    <CustomProduct.Image>
                      <img src={`${process.env.REACT_APP_PORT}/${item.imagePath[0]}`} width="100%" alt="IMG-PRODUCT" />
                      <button onClick={() => dispatch(action.openQuickView(item))}>
                        Quick View
                          </button>
                    </CustomProduct.Image>
                    <CustomProduct.Flex>
                      <CustomProduct.Text>
                        <Link to={`/product-detail/${item._id}`}>
                          {item.productName}
                        </Link>
                        <span>
                          ${item.price.toFixed(2)}
                        </span>
                      </CustomProduct.Text>
                      <CustomProduct.BtnLike>
                        <button>
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
                      </CustomProduct.BtnLike>
                    </CustomProduct.Flex>
                  </Custom.Item>)
              })}
            </div>
          }
        </Custom.Container>
        {status && <QuickView />}
      </Custom.RelateProduct>
    </Custom.Product >
  )
}