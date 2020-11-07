import React from "react";
import { NavLink } from "react-router-dom";
import "./contact.scss";

export const Contact = () => {
  return (
    <div className="Contact__wrapper">
      <span>WORKING WITH US</span>
      <p>
        We work for you by working with you. <br/>
        Client satisfaction and quality work are our top priorities.
      </p>
      <a href='/contact'> Get in touch</a>
    </div>
  );
};

//<Button type="link" to="/contact"> Get in touch</Button>