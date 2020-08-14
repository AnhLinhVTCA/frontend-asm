import styled from "styled-components";

export const WrapCart = styled('div')`
  position: fixed;
  z-index: 1100;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  background-color: rgba(0,0,0,0.6);
  .show-cart{
    right: 0;
  }
`;

export const HiddenCart = styled('div')`
  width: 100%;
  height: 100%;
`;

export const Cart = styled('div')`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 15;
  top: 0;
  right: -400px;
  width: 26%;
  padding: 0 25px 0 65px;
  height: 100%;
  background-color: #fff;
  transition: all 0.4s;
`;

export const HeaderCart = styled('div')`
  display: flex;
  height: 80px;
  align-items: center;
  font-size: 18px;
  span{
    text-transform: uppercase;
    width: 85%;
    font-weight: 800;
  }
`;

export const CloseCart = styled('div')`
  width: 15%;
  svg{
    cursor: pointer;
    font-size: 32px;
    padding: 5px;
    &:hover{
      color: #717FE0;
    }
  }
`;

export const ListProducts = styled('div')`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 30px);
  overflow-y: scroll;
  flex-grow: 1;
  align-content: space-between;
  ul{
    padding: 0;
    width: 100%;
    li{
      display: flex;
      margin-bottom: 10px;
      list-style-type: none;
    }
  }
`;

export const InfoProduct = styled('div')`
  margin-top: 5px;
  a{
    display: block;
    text-decoration: none;
    font-size: 14px;
    color: black;
    margin-bottom: 18px;
    font-weight: 500;
    &:hover{
      color: #717FE0;
    }
  }
  span{
    font-size: 13px;
    color: #888888;
    font-weight: 400;
  }
`;

export const ImageProduct = styled('div')`
  position: relative;
  margin-right: 20px;
  cursor: pointer;
  img{
    width: 100%;
  }
  &:hover{
    &::after{
      visibility: visible;
    }
  }
  &::after{
    content: "x";
    display: flex;
    visibility: hidden;
    align-items: center;
    justify-content: center;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
  }
`;

export const FooterCart = styled('div')`
`;

export const TotalPrice = styled('div')`
  margin: 40px 0;
  font-size: 18px;
  font-weight: 500;
`;

export const ListBtn = styled('div')`
  margin: 20px 0 30px 0;
  a{
    text-decoration: none;
    padding: 10px 30px;
    background-color: black;
    color: #fff;
    font-weight: 500;
    border-radius: 23px;
    &:nth-child(1){
      margin-right: 10px;
    }
    &:hover{
      background-color: #717FE0;
    }
  }
`;