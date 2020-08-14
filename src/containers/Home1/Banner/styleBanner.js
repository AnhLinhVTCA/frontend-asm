import styled from "styled-components";

export const Body = styled('div')`
  font-family: 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  margin: 50px 0;
`;

export const Container = styled('div')`
  max-width: 1200px;
  padding: 0 15px;
  margin: auto;
`;

export const Flex = styled('div')`
  display: flex;
`;

export const Col = styled('div')`
  width: 33%;
`;

export const Block = styled('div')`
  display: block;
  position: relative;
  border: 1px solid #e6e6e6;
  margin: 0 22px;
  &:hover{
    a{
      background-color: rgba(103,117,214,0.8);
      span{
        color: #fff !important;
      }
    }
    div{
      transform: scale(1);
      div{
        transform: translateY(0%);
        opacity: 1;
      }
    }
  }
  img{
    vertical-align: middle;
  }
  a{
    position: absolute;
    background-color: rgba(103,117,214,0.0);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: black;
  }
`;

export const Title = styled('div')`
  padding: 34px 38px;
  span{
    display: block;
    &:nth-child(1){
      font-size: 28px;
      font-weight: 800;
      margin-bottom: 10px;
    }
    &:nth-child(2){
      color: #555555;
      font-size: 14px;
    }
  }
`;

export const ShopNow = styled('div')`
  display: inline-block;
  margin: 30px 0 0 38px;
  border-bottom: 2px solid #fff;
  transform: scaleX(0);
  transition: all 0.5s;
`;

export const Effect = styled('div')`
  font-size: 15px;
  line-height: 1.466667;
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;
  transform: translateY(150%);
  opacity: 0;
  transition: all 0.9s;
`;