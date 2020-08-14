import styled from "styled-components";
import { Button } from "antd";

export const ListProducts = styled('div')`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
   'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

export const Container = styled('div')`
  max-width: 1200px;
  padding: 0 15px;
  margin: auto;
`;

export const Title = styled('div')`
  h3{
    font-size: 36px;
    font-weight: 800;
  }
`;

export const Category = styled('div')`
  display: flex;
  margin-bottom: 50px;
  .active{
    border-bottom: 1px solid #797979;
    color: #333333;
  }
  .col-8{
    width: 80%;
  }
  .col-4{
    width: 20%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Flex = styled('div')`
  display: flex;
`;

export const BtnCategory = styled(Button)`
  background-color: #fff;
  cursor: pointer;
  border: none;
  margin-right: 30px;
  font-size: 16px;
  font-weight: 500;
  color: #888;
  line-height: 1.2;
  &:focus{
    outline: none;
    color: #888;
  }
  &:hover{
    color: #888;
    border-bottom: 1px solid #797979;
  }
`;

export const BtnSearchAndFilter = styled(Button)`
  background-color: #fff;
  width: 110px;
  cursor: pointer;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  font-size: 14px;
  color: #888;
  line-height: 1.2;
  &:nth-child(1){
    margin-right: 10px;
  }
  svg{
    margin-right: 5px;
  }
  &:hover{
    border-color: #717fe0;
    background-color: #717fe0;
    color: #fff;
  }
  &:focus{
    border-color: #717fe0;
    color: #fff;
    background-color: #717fe0;
    outline: none;
  }
`;

export const ShowListProducts = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled('div')`
  position: relative;
  width: 24%;
  margin:  0 0.5% 40px 0.5%;
`;

export const Image = styled('div')`
  img{
    vertical-align: middle;
    border-style: none;
    transition: transform 0.9s ease;
  }
  button{
    display: flex;
    cursor: pointer;
    visibility: hidden;
    align-items: center;
    opacity: 0;
    position: absolute;
    justify-content: center;
    color: #333333;
    border: none;
    border-radius: 20px;
    background-color: #fff;
    min-width: 139px;
    height: 40px;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.466667;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.4s;
    &:focus{
      outline: none;
    }
  }
  &:hover{
    img{
      /* transform: scale(1.2) */
    }
    button{
      visibility: visible;
      opacity: 1;
      bottom: 25%;
      &:hover{
        background-color: black;
        color: #fff;
      }
    }
  }
`;

export const Text = styled('div')`
  width: 80%;
  margin-top: 20px;
  a{
    text-decoration: none;
    color: #999999;
    font-weight: 500;
    font-size: 15px;
    &:hover{
      color: #717fe0;
    }
  }
  span{
    display: block;
    margin-top: 10px;
    font-size: 14px;
    color: #666666;
  }
`;

export const BtnLike = styled('div')`
  display: flex;
  justify-content: flex-end;
  width: 20%;
  margin-top: 20px;
  button{
    background-color: #fff;
    display: contents;
    border: none;
    cursor: pointer;
    color: #999999;
    svg:hover{
      color: #717fe0;
    }
  }
`;

export const Loadmore = styled('div')`
  text-align: center;
  padding: 50px 0;
  button{
    cursor: pointer;
    text-transform: uppercase;
    color: #222;
    font-size: 14px;
    font-weight: 600;
    border: none;
    background-color: #E6E6E6;
    border-radius: 25px;
    padding: 15px 30px;
    &:hover{
      color: #fff;
      background-color: black;
    }
  }
`;