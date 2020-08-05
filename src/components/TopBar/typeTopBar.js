import styled from "styled-components";
import { } from "antd";

export const Wrapper = styled('div')`
  background-color: #222;
  color: #B2B2B2;
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
  height: 40px; 
  align-items: center;
`;

export const LeftTopBar = styled('div')`
  width: 65%;
  font-size: 12px;
  font-weight: 500;
`;

export const RightTopBar = styled('div')`
  display: flex;
  width: 35%;
  height: 100%;
  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 12px;
    color: #B2B2B2;
    font-weight: 500;
    padding: 0 25px;
    border-right: 1px solid #B2B2B2;
    &:nth-child(1){
      border-left: 1px solid #B2B2B2;
    }
    &:hover{
      color: #717FE0;
    }
  }
`;