import styled from "styled-components";
import { Button, Select, Input, Tabs } from "antd";
const { Option } = Select;
const { TabPane } = Tabs;

export const Product = styled('div')`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
   'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

export const Container = styled('div')`
  position: relative;
  max-width: 1200px;
  padding: 0 15px;
  margin: 40px auto;
`;

export const Location = styled('div')`
  margin-bottom: 50px;
  a{
    font-size: 13px;
    color: #555555;
    margin-right: 10px;
    font-weight: 500;
    line-height: 1;
  }
  span{
    font-size: 13px;
    color: #999999;
    margin-right: 10px;
    font-weight: 500;
    line-height: 1;
  }
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

export const tabs = styled(Tabs)`
  margin-top: 100px;
  padding: 50px 100px;
  border: 1px solid #e6e6e6;
  .ant-tabs-nav{
    &::before{
      border: none;
    }
    .ant-tabs-nav-wrap{
      justify-content: center;
      color: #888888;
    }
    .ant-tabs-tab{
      div{
        font-weight: 500;
        font-size: 15px;
      }
      &:hover{
        color: #555555;
      }
    }
    .ant-tabs-tab-active{
      div{
        color: #555555;
      }
    }
    .ant-tabs-ink-bar{
      background-color: #555555;
    }
  }
`;

export const tabPane = styled(TabPane)`
  margin-top: 20px;
  ul{
    width: 600px;
    margin: auto;
    li{
      display: flex;
      list-style-type: none;
      margin-bottom: 10px;
      .title-info{
        width: 40%;
        color: #666666;
        font-weight: 500;
      }
      span{
        color: #888888;
      }
    }
  }
`;

export const subText = styled('div')`
  padding: 25px 0;
  color: #666666;
  background-color: #F2F2F2;
  text-align: center;
  span{
    font-weight: 500;
    margin-right: 20px
  }
`;

export const RelateProduct = styled('div')`
  margin-top: 20px;
  .owl-carousel{
    .owl-nav button {
      position: absolute;
      top: 20%;
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
        left: -30px;
      }
      .owl-next {
        right: -30px;
      }
    }
    .owl-dots {
      display: none;
    }
  }
`;

export const TitleRelate = styled('div')`
  text-align: center;
  margin-bottom: 50px;
  h3{
    font-size: 36px;
    font-weight: 800;
    color: #222222;
  }
`;

export const Item = styled('div')`
    position: relative;
    margin: 0 10px;
`;


