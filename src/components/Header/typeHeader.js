import styled from "styled-components";
import { } from "antd";

export const Header = styled('div')`
  background-color: transparent;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
   'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

export const Container = styled('div')`
  max-width: 1200px;
  padding: 0 15px;
  margin: auto;
`;

export const Flex = styled('div')`
  display: flex;
  height: 84px;
  align-items: center;
`;

export const Logo = styled('div')`
  width: 15%;
`;

export const Menu = styled('div')`
  width: 65%;
  .main-menu{
    display: flex;
    a{
      color: black;
      text-decoration: none;
      font-size: 15px;
      font-weight: 520;
      line-height: 1.3;
      padding: 25px 0;
      &:hover{
        color: #717FE0;
      }
    }
    .sub-menu{
      display: none;
      width: 150px;
      position: absolute;
      background-color: #fff;
      padding: 5px 10px;
      font-weight: 400;
      top: 30px;
      left: -50%;
      box-shadow: 0 1px 5px 0px rgba(0,0,0,0.2);
      li{
        padding: 5px 0;
      }
    }
    li{
      list-style-type: none;
      margin: 0 5px;
      padding: 0 5px;
      &:nth-child(1){
        position: relative;
        &:hover{
          .sub-menu{
            display: block;
          }
        }
      }
    }
    .active{
      color: #717fe0;
    }
    .hot{
      position: relative;
    }
    .hot::after{
      content: "HOT";
      background-color: #F74877;
      color: #fff;
      font-size: 12px;
      padding: 2px 5px;
      border-radius: 23px;
      position: absolute;
      top: -20px;
      right: -15px;
    }
  }
`;

export const SelectIcon = styled('div')`
  display: flex;
  width: 20%;
  a{
    color: black;
    text-decoration: none;
    svg{
      font-size: 24px;
    }
    &:hover{
      cursor: pointer;
      color: #717FE0;
    }
    position: relative;
    span{
      color: #fff;
      font-weight: 500;
      padding: 1px 2px;
      line-height: 1;
      font-size: 12px;
      position: absolute;
      background-color: #717fe0;
      top: -7px;
      right: -7px;
    }
  }
`;

export const Icon = styled('div')`
  svg{
    font-size: 22px;
  }
  margin-right: 30px;
  &:hover{
    cursor: pointer;
    color: #717FE0;
  }
  &:nth-child(2){
    position: relative;
    span{
      color: #fff;
      font-weight: 500;
      padding: 1px 2px;
      line-height: 1;
      font-size: 12px;
      position: absolute;
      background-color: #717fe0;
      top: -7px;
      right: -7px;
    }
  }
`;