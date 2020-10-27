import React from "react";
import {
  Block,
  HeaderMenuItemText,
  HeaderMenuItem,
  Logo,
  MainWrapper,
} from "./header.styled";
import { headerItems } from "./header-data";
import logo from "../../img/logo-wtt-w.svg";
import search from "../../img/search.png";

export const Header = () => {
  return (
    <MainWrapper>
      <Block>
        <HeaderMenuItem>
          <Logo src={logo} />
          <span className="Header__will-you">Will you try?</span>
        </HeaderMenuItem>
        <HeaderMenuItem>
          {headerItems.map((el, id) => (
            <HeaderMenuItemText key={id}>{el}</HeaderMenuItemText>
          ))}
        </HeaderMenuItem>
        <div className="Header__search-link">
          <a href="https://google.com">ws</a>
          <div>
            <a href="*">
              <i></i>
            </a>
          </div>
        </div>
        <div className="Header__software">
          SOFTWARE AND<br/> DEVELOPMENT<br/> AGENCY
        </div>
      </Block>
    </MainWrapper>
  );
};
