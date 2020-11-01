import React from "react";
import "./aboutCompany.scss";

export const AboutCompany = () => {
  return (
    <div className="AboutCompany">
      {aboutData.map((item) => (
        <div className="AboutCompany__wrapper">
          <a href="/">
            <div className="AboutCompany__wrapper-content">
              <span>{item.text}</span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

const aboutData = [
  {
    route: "",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus assumenda beatae laborum!",
  },
  {
    route: "",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus assumenda beatae laborum!",
  },
  {
    route: "",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus assumenda beatae laborum!",
  },
  {
    route: "",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus assumenda beatae laborum!",
  },
  {
    route: "",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus assumenda beatae laborum!",
  },
];
