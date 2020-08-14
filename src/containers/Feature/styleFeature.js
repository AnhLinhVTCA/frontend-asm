import styled from "styled-components";
import { Button, Input, Table, Form, Select } from "antd";
const { Option } = Select;

export const Feature = styled('div')`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
   'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  margin-bottom: 100px;
`;

export const Location = styled('div')`
  margin: 50px 0;
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

export const Container = styled('div')`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const form = styled(Form)`
  .d-flex{
    display: flex;
  }
`;

export const leftFeature = styled('div')`
  width: 65%;
  margin-right: 5%;
`;

export const rightFeature = styled('div')`
    width: 30%;
    border: 1px solid #F0F0F8;
    padding: 20px 30px;
    h4{
      font-size: 20px;
      line-height: 1.3;
      text-transform: uppercase;
      font-weight: 800;
    }
    .info-cart{
      display: flex;
      border-bottom: 1px dashed #666666;
      padding-bottom: 10px;
      span{
        font-size: 18px;
        color: #333333;
        font-weight: 500;
      }
      .title{
        font-weight: 600;
        width: 35%;
      }
    }
    .info-shipping{
      display: flex;
      margin-top: 10px;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px dashed #666666;
      .title{
        width: 35%;
        font-size: 18px;
        color: #333333;
        font-weight: 600;
      }
      .right-shipping{
        width: 65%;
        p{
          font-size: 13px;
          line-height: 1.5;
          font-weight: 400;
        }
        .calculate-shipping{
          span{
            font-size: 13px;
            line-height: 1.6923;
            text-transform: uppercase;
            color: #555;
            font-weight: 500;
          }
        }
      }
    }
  `;

export const select = styled(Select)`
  width: 100%;
  margin: 10px 0;
  span{
    align-items: center;
    display: flex;
    font-weight: 500;
    color: #555555;
  }
`;

export const option = styled(Option)`
`;

export const inputShipping = styled(Input)`
  margin-bottom: 10px;
  font-weight: 500;
  color: #555555;
  &::placeholder{
    font-weight: 500;
    color: #555555;
  }
`;

export const EndLeftFeature = styled('div')`
  display: flex;
  padding: 20px;
  border-left: 1px solid #F0F0F8;
  border-right: 1px solid #F0F0F8;
  border-bottom: 1px solid #F0F0F8;
  .d-flex{
    width: 70%;
    display: flex;
    margin-right: 20px;
    button{
      width: 45%;
    }
  }
`;

export const table = styled(Table)`
  border: 1px solid #F0F0F8;
  thead{
    tr{
      th{
        color: #333333;
        font-weight: 800;
      }
    }
  }
`;

export const input = styled(Input)`
  margin-right: 20px;
  padding: 10px 20px;
  border: 1px solid #e6e6e6;
  border-radius: 22px;
  color: #333333;
  font-size: 14px;
  font-weight: 500;
  &::placeholder{
    font-size: 14px;
    color: #999999;
    font-weight: 500;
  }
  &:focus{
    outline: none;
  }
  &:hover{
    border: 1px solid #e6e6e6;
  }
`;

export const button = styled(Button)`
  width: 170px;
  border: 1px solid #e6e6e6;
  background-color: #EFEFEF;
  height: 45px;
  border-radius: 22px;
  span{
    font-weight: 700 !important;
    font-size: 15px !important;
    text-transform: uppercase !important;
  }
  cursor: pointer;
  &:focus{
    outline: none;
  }
  &:hover{
    background-color: #717FE0;
    border-color: #717FE0;
    color: #fff;
  }
`;

export const buttonSubmit = styled(Button)`
  border: 1px solid #e6e6e6;
  background-color: #222222;
  color: #fff;
  height: 45px;
  border-radius: 22px;
  span{
    font-weight: 700 !important;
    font-size: 15px !important;
    text-transform: uppercase !important;
  }
  cursor: pointer;
  &:focus{
    outline: none;
  }
  &:hover{
    background-color: #717FE0;
    border-color: #717FE0;
    color: #fff;
  }
`;

export const Total = styled('div')`
  display: flex;
  margin-bottom: 20px;
  span{
    font-size: 18px;
    color: #333333;
    font-weight: 500;
  }
  .title{
    font-weight: 600;
    width: 35%;
  }
`;

export const InputQuantity = styled(Input)`
  width: 50px;
  height: 40px;
  font-weight: bold;
  text-align: center;
  border-radius: 0;
  background-color: #f7f7f7;
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