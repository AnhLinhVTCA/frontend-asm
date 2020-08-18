import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import * as Custom from "./typeTopBar";
import * as action from "../../../actions";

export default () => {
  const dispatch = useDispatch();
  const handleClickMyAccount = useCallback(() => {
    dispatch(action.openDisplayLoginForm());
  }, [dispatch])
  return (
    <Custom.Wrapper>
      <Custom.Container>
        <Custom.Flex>
          <Custom.LeftTopBar>
            Free shipping for standard order over $100
					</Custom.LeftTopBar>
          <Custom.RightTopBar>
            <Custom.ButtonCustom>
              Help & FAQs
						</Custom.ButtonCustom>
            <Custom.ButtonCustom onClick={() => handleClickMyAccount()}>
              My Account
						</Custom.ButtonCustom>
            <Custom.ButtonCustom>
              EN
						</Custom.ButtonCustom>
            <Custom.ButtonCustom>
              USD
						</Custom.ButtonCustom>
          </Custom.RightTopBar>
        </Custom.Flex>
      </Custom.Container>
    </Custom.Wrapper>
  )
}
