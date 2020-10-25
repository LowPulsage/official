import React from "react";
import {
  Block,
  HeaderMenuItemText,
  HeaderMenuItem,
  Logo,
  MainWrapper
} from "./header.styled";
import { headerItems } from "./header-data";
import logo from "../../img/logo-wtt-w.svg";

export const Header = () => {
  return (
    <MainWrapper>
      <Block>
        <HeaderMenuItem>
          <Logo src={logo} />
          <HeaderMenuItemText>Will you try?</HeaderMenuItemText>
        </HeaderMenuItem>
        <HeaderMenuItem>
          {headerItems.map((el, id) => (
            <HeaderMenuItemText key={id}>{el}</HeaderMenuItemText>
          ))}
        </HeaderMenuItem>
        <HeaderMenuItem>
          <HeaderMenuItemText>ws search</HeaderMenuItemText>
        </HeaderMenuItem>
      </Block>
    </MainWrapper>
  );
};
