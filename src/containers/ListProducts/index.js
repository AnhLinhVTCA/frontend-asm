import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Custom from "./styleListProduct";
import * as action from "../../actions";
import QuickView from "../QuickView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes, faFilter, faHeart } from "@fortawesome/free-solid-svg-icons"

export default () => {
  const dispatch = useDispatch();
  const toggleFilter = useSelector(state => state.displayFilter);
  const toggleSearch = useSelector(state => state.displaySearch);
  const listProducts = useSelector(state => state.listProducts);
  const { status } = useSelector(state => state.productDetailQuickView);
  useEffect(() => {
    dispatch(action.listProducts())
  }, [dispatch])
  const handlerClickFilter = () => {
    if (toggleSearch) dispatch(action.displaySearch())
    dispatch(action.displayFilter())
  };

  const handlerClickSearch = () => {
    if (toggleFilter) dispatch(action.displayFilter())
    dispatch(action.displaySearch())
  }
  return (
    <Custom.ListProducts>
      <Custom.Container>
        <Custom.Title>
          <h3>
            Product Overview
				</h3>
        </Custom.Title>
        <Custom.Category>
          <Custom.Flex className="col-8">
            <Custom.BtnCategory className="active">
              All Products
					  </Custom.BtnCategory>
            <Custom.BtnCategory>
              Women
					  </Custom.BtnCategory>
            <Custom.BtnCategory>
              Men
			  		</Custom.BtnCategory>
            <Custom.BtnCategory>
              Bag
			  		</Custom.BtnCategory>
            <Custom.BtnCategory>
              Shoes
				  	</Custom.BtnCategory>
            <Custom.BtnCategory>
              Watches
				  	</Custom.BtnCategory>
          </Custom.Flex>

          <Custom.Flex className="col-4">
            <Custom.BtnSearchAndFilter icon={!toggleFilter ? <FontAwesomeIcon icon={faFilter} />
              : <FontAwesomeIcon icon={faTimes} />} onClick={() => handlerClickFilter()}>
              Filter
					  </Custom.BtnSearchAndFilter>
            <Custom.BtnSearchAndFilter icon={!toggleSearch ? <FontAwesomeIcon icon={faSearch} />
              : <FontAwesomeIcon icon={faTimes} />} onClick={() => handlerClickSearch()}>
              Search
					  </Custom.BtnSearchAndFilter>
          </Custom.Flex>
          <div style={{ display: 'none' }}>
            <div>
              <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                <i className="zmdi zmdi-search"></i>
              </button>

              <input className="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product" placeholder="Search" />
            </div>
          </div>
          <div className="dis-none panel-filter w-full p-t-10" style={{ display: 'none' }}>
            <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
              <div className="filter-col1 p-r-15 p-b-27">
                <div className="mtext-102 cl2 p-b-15">
                  Sort By
							</div>

                <ul>
                  <li className="p-b-6">
                    <Link to="#" className="filter-link stext-106 trans-04">
                      Default
									</Link>
                  </li>

                  <li className="p-b-6">
                    <Link to="#" className="filter-link stext-106 trans-04">
                      Popularity
									</Link>
                  </li>

                  <li className="p-b-6">
                    <Link to="#" className="filter-link stext-106 trans-04">
                      Average rating
									</Link>
                  </li>

                  <li className="p-b-6">
                    <Link to="#" className="filter-link stext-106 trans-04 filter-link-active">
                      Newness
									</Link>
                  </li>

                  <li className="p-b-6">
                    <Link to="#" className="filter-link stext-106 trans-04">
                      Price: Low to High
									</Link>
                  </li>

                  <li className="p-b-6">
                    <Link to="#" className="filter-link stext-106 trans-04">
                      Price: High to Low
									</Link>
                  </li>
                </ul>
              </div>

              <div className="filter-col2 p-r-15 p-b-27">
                <div className="mtext-102 cl2 p-b-15">
                  Price
							</div>

                <ul>
                  <li className="p-b-6">
                    <Link to="#" className="filter-link stext-106 trans-04 filter-link-active">
                      All
									</Link>
                  </li>

                  <li className="p-b-6">
                    <Link to="#" className="filter-link stext-106 trans-04">
                      $0.00 - $50.00
									</Link>
                  </li>

                  <li className="p-b-6">
                    <Link to="#" className="filter-link stext-106 trans-04">
                      $50.00 - $100.00
									</Link>
                  </li>

                  <li className="p-b-6">
                    <Link to="#" className="filter-link stext-106 trans-04">
                      $100.00 - $150.00
									</Link>
                  </li>

                  <li className="p-b-6">
                    <Link to="#" className="filter-link stext-106 trans-04">
                      $150.00 - $200.00
									</Link>
                  </li>

                  <li className="p-b-6">
                    <Link to="#" className="filter-link stext-106 trans-04">
                      $200.00+
									</Link>
                  </li>
                </ul>
              </div>

              <div className="filter-col3 p-r-15 p-b-27">
                <div className="mtext-102 cl2 p-b-15">
                  Color
							</div>

                <ul>
                  <li className="p-b-6">
                    <span className="fs-15 lh-12 m-r-6" style={{ color: "#222" }}>
                      <i className="zmdi zmdi-circle"></i>
                    </span>

                    <Link to="#" className="filter-link stext-106 trans-04">
                      Black
									</Link>
                  </li>

                  <li className="p-b-6">
                    <span className="fs-15 lh-12 m-r-6" style={{ color: "#4272d7" }}>
                      <i className="zmdi zmdi-circle"></i>
                    </span>

                    <Link to="#" className="filter-link stext-106 trans-04 filter-link-active">
                      Blue
									</Link>
                  </li>

                  <li className="p-b-6">
                    <span className="fs-15 lh-12 m-r-6" style={{ color: "#b3b3b3" }}>
                      <i className="zmdi zmdi-circle"></i>
                    </span>

                    <Link to="#" className="filter-link stext-106 trans-04">
                      Grey
									</Link>
                  </li>

                  <li className="p-b-6">
                    <span className="fs-15 lh-12 m-r-6" style={{ color: "#00ad5f" }}>
                      <i className="zmdi zmdi-circle"></i>
                    </span>

                    <Link to="#" className="filter-link stext-106 trans-04">
                      Green
									</Link>
                  </li>

                  <li className="p-b-6">
                    <span className="fs-15 lh-12 m-r-6" style={{ color: "#fa4251" }}>
                      <i className="zmdi zmdi-circle"></i>
                    </span>

                    <Link to="#" className="filter-link stext-106 trans-04">
                      Red
									</Link>
                  </li>

                  <li className="p-b-6">
                    <span className="fs-15 lh-12 m-r-6" style={{ color: "#aaa" }}>
                      <i className="zmdi zmdi-circle-o"></i>
                    </span>

                    <Link to="#" className="filter-link stext-106 trans-04">
                      White
									</Link>
                  </li>
                </ul>
              </div>

              <div className="filter-col4 p-b-27">
                <div className="mtext-102 cl2 p-b-15">
                  Tags
							</div>

                <div className="flex-w p-t-4 m-r--5">
                  <Link to="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                    Fashion
								</Link>

                  <Link to="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                    Lifestyle
								</Link>

                  <Link to="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                    Denim
								</Link>

                  <Link to="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                    Streetstyle
								</Link>

                  <Link to="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                    Crafts
								</Link>
                </div>
              </div>
            </div>
          </div>
        </Custom.Category>
        {
          listProducts && <Custom.ShowListProducts>
            {listProducts.data.map((item, index) => (
              <Custom.Item key={index}>
                <Custom.Image>
                  <img src={require(`../../${item.imagePath[0]}`)} width="100%" alt="IMG-PRODUCT" />
                  <button onClick={() => dispatch(action.openQuickView(item))}>
                    Quick View
                </button>
                </Custom.Image>
                <Custom.Flex>
                  <Custom.Text>
                    <Link to={`/product-detail/${item._id}`}>
                      {item.productName}
                    </Link>
                    <span>
                      ${item.price.toFixed(2)}
                    </span>
                  </Custom.Text>
                  <Custom.BtnLike>
                    <button>
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </Custom.BtnLike>
                </Custom.Flex>
              </Custom.Item>))
            }
          </Custom.ShowListProducts>
        }
        {
          listProducts && <Custom.Loadmore>
            <button>
              Load More
            </button>
          </Custom.Loadmore>
        }
      </Custom.Container>
      {status && <QuickView />}
    </Custom.ListProducts>
  )
}