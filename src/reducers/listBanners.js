import * as type from "../constants/actionTypes";

const initialState = [{
  pathImage: "images/slide-01.jpg",
  alt: "slide-01",
  content: "AMAZING FROM Lukani",
  title1: "BIG SALE",
  title2: "NEW ARRIVALS",
  discount: "Discount 20% Off For Lukani Members",
}, {
  pathImage: "images/slide-02.jpg",
  alt: "slide-02",
  content: "AMAZING FROM Lukani",
  title1: "BIG SALE",
  title2: "NEW ARRIVALS",
  discount: "Discount 20% Off For Lukani Members",
}, {
  pathImage: "images/slide-03.jpg",
  alt: "slide-03",
  content: "AMAZING FROM Lukani",
  title1: "BIG SALE",
  title2: "NEW ARRIVALS",
  discount: "Discount 20% Off For Lukani Members",
}]

export default (state = initialState, action) => {
  if (action.type === type.GET_LIST_BANNERS) return { ...state, data: action.data };
  return state
}