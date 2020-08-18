import React from "react";
import { Link } from "react-router-dom"
import * as Custom from "./styleBanner";

export default () => {
  return (
    <Custom.Body>
      <Custom.Container>
        <Custom.Flex>
          <Custom.Col>
            <Custom.Block>
              <img src={`${process.env.REACT_APP_PORT}/images/banner-01.jpg`} width="100%" alt="IMG-BANNER" />
              <Link to="product.html">
                <Custom.Title>
                  <span>
                    Women
								  </span>
                  <span>
                    Spring 2018
								  </span>
                </Custom.Title>
                <Custom.ShopNow>
                  <Custom.Effect>
                    Shop Now
								  </Custom.Effect>
                </Custom.ShopNow>
              </Link>
            </Custom.Block>
          </Custom.Col>
          <Custom.Col>
            <Custom.Block>
              <img src={`${process.env.REACT_APP_PORT}/images/banner-02.jpg`} width="100%" alt="IMG-BANNER" />
              <Link to="product.html">
                <Custom.Title>
                  <span>
                    Men
								  </span>
                  <span>
                    Spring 2018
							  	</span>
                </Custom.Title>
                <Custom.ShopNow>
                  <Custom.Effect>
                    Shop Now
                  </Custom.Effect>
                </Custom.ShopNow>
              </Link>
            </Custom.Block>
          </Custom.Col>
          <Custom.Col>
            <Custom.Block>
              <img src={`${process.env.REACT_APP_PORT}/images/banner-03.jpg`} width="100%" alt="IMG-BANNER" />
              <Link to="product.html">
                <Custom.Title>
                  <span>
                    Accessories
								</span>
                  <span>
                    New Trend
								</span>
                </Custom.Title>
                <Custom.ShopNow>
                  <Custom.Effect>
                    Shop Now
								</Custom.Effect>
                </Custom.ShopNow>
              </Link>
            </Custom.Block>
          </Custom.Col>
        </Custom.Flex>
      </Custom.Container>
    </Custom.Body>
  )
}