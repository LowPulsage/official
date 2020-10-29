import React from "react";
import './footer.scss'

export const Footer = () => {
  return (
    <div className="Footer__wrapper">
      <div className="Footer__block">
        <span>COPYRIGHT</span>
        <span>Try to be Happy - 2020</span>
      </div>
      <div className="Footer__block">
        <span>Follow</span>
        <span><a href="*">WebSite Link</a></span>
      </div>
      <div className="Footer__block">
        <span>CONTACT</span>
        <span><a href="*">IT-Life@gmail.com</a> / +380443123441</span>
      </div>
    </div>
  )
};
