import styled from "styled-components";
import { Button, Select, Input } from "antd";
const { Option } = Select;

export const Quickview = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0,0,0,0.6);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
   'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  .close-modal{
    width:100%;
    height: 100%;
  }
`;

export const Container = styled('div')`
  position: relative;
  max-width: 1200px;
  padding: 0 15px;
  margin: 40px auto;
`;

export const CloseModal = styled('div')`
  position: absolute;
  cursor: pointer;
  font-size: 24px;
  color: #888888;
  top: -80px;
  right: 0;
  &:hover{
    color: #c5c5c5;
  }
`;

export const Modal = styled('div')`
  position: absolute;
  background-color: #fff;
  width: 80vw;
  top: 5%;
  left: 10%;
`;

export const ContentModal = styled('div')`
  display: flex;
`;

export const Image = styled('div')`
  display: flex;
  width: 50%;
  .actived{
    border: 2px solid #ccc;
  }
`;

export const ListImage = styled('div')`
  width: 10%;
`;

export const PreviewImage = styled('div')`
  width: 85%;
  margin-left: 5%;
  .owl-carousel{
    width: 100%;
    .owl-nav button {
      position: absolute;
      top: 35%;
      z-index: 11;
      outline: none;
      span {
        font-size: 80px;
        opacity: 0.1;
        &:hover {
          opacity: 1;
        }
      }
    }
    .owl-nav  {
      .owl-prev{
        left: 0;
      }
      .owl-next {
        right: 0;
      }
    }
    .owl-dots {
      display: none;
    }
  }
`;

export const ItemImage = styled('div')`
  margin-bottom: 10px;
  cursor: pointer;
  img{
    width: 100%;
    &:hover{
    border: 2px solid #ccc;
  }
  }
`;

export const DetailProduct = styled('div')`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  padding: 0 50px;
`;

export const InfoProduct = styled('div')`
  width: 100%;
  .product-name{
    font-size: 24px;
    font-weight: 500;
  }
  .price{
    font-weight: 700;
    font-size: 22px;
    color: black;
    margin-bottom: 10px;
  }
  .description{
    color: #666666;
    line-height: 1.7;
    font-weight: 500;
  }
`;

export const Size = styled('div')`
  display: flex;
  .title{
    width: 34%;
    text-align: center;
    color: #666666;
    font-weight: 500;
  }
  .option{
    width: 66%;
  }
`;

export const Color = styled('div')`
  display: flex;
  margin-top: 10px;
  .title{
    width: 34%;
    text-align: center;
    color: #666666;
    font-weight: 500;
  }
`;

export const select = styled(Select)`
  color: black;
  width: 66%;
`;

export const option = styled(Option)`
  color:black;
  background-color:black;
`;

export const InputQuantity = styled(Input)`
  width: 60px;
  height: 40px;
  font-weight: bold;
  text-align: center;
  border-radius: 0;
  font-size: 16px;
  background-color: #f7f7f7;
  &::-webkit-outer-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:hover{
    border-color: rgb(217, 217, 217);
  }
`;

export const InputDetail = styled('div')`
  margin-top: 20px;
  width: 100%;
`;

export const Quantity = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  .plus{
    cursor: pointer;
    border: 1px solid rgb(217, 217, 217);
    border-left: none;
    padding: 8px 14px;
    &:hover{
      color: #fff;
      background-color: #717FE0;
      border-color: #717FE0;
    }
  }
  .minus{
    cursor: pointer;
    border: 1px solid rgb(217, 217, 217);
    padding: 8px 14px;
    border-right: none;
    &:hover{
      color: #fff;
      background-color: #717FE0;
      border-color: #717FE0;
    }
  }
`;

export const ModalBottom = styled('div')`
  text-align: center;
  margin-top: 20px;
  .err{
    color: red;
  }
`;

export const Submit = styled(Button)`
  margin-top: 10px;
  border: none;
  background-color: #717FE0;
  border-radius: 25px;
  height: 40px;
  width: 150px;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  &:hover{
    background-color: black;
    color: #fff
  }
  &:focus{
    outline: none;
    background-color: #717FE0;
    border: none;
    color: #fff;
  }
`;
