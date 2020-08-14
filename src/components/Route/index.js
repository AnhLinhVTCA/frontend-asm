import React from "react";
import Home from "../../containers/Home1/";
import Product from "../../containers/Product";
import DetailProduct from "../../containers/Detail";
import Feature from "../../containers/Feature";
import Error404 from "../../containers/Error404";

const Menu = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/product",
    exact: false,
    main: () => <Product />,
  },
  {
    path: "/product-detail/:id",
    exact: false,
    main: ({ match }) => <DetailProduct id={match.params.id} />,
  },
  {
    path: "/shopping-cart",
    exact: false,
    main: () => <Feature />,
  },
  {
    exact: false,
    main: () => <Error404 />,
  },
];

export default Menu;
