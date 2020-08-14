import styled from "styled-components";

export const Carousel = styled('div')`
  .owl-carousel{
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