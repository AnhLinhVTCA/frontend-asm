import React from "react";
import * as Custom from "./typeTopBar";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Custom.Wrapper>
      <Custom.Container>
        <Custom.Flex>
          <Custom.LeftTopBar>
            Free shipping for standard order over $100
					</Custom.LeftTopBar>
          <Custom.RightTopBar>
            <Link to="#">
              Help & FAQs
						</Link>

            <Link to="#">
              My Account
						</Link>

            <Link to="#">
              EN
						</Link>

            <Link to="#">
              USD
						</Link>
          </Custom.RightTopBar>
        </Custom.Flex>
      </Custom.Container>
    </Custom.Wrapper>
  )
}
