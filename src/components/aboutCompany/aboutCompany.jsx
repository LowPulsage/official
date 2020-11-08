import React from "react";
import "./aboutCompany.scss";

export const AboutCompany = () => {
  return (
    <div className="AboutCompany">
      {aboutData.map(el => (
        <div className="AboutCompany__wrapper" key={el.route}>
          <a href="/">
            <div className="AboutCompany__wrapper-content">
              <span>{el.text}</span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

const aboutData = [
  {
    route: "1",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus assumenda beatae laborum!",
  },
  {
    route: "2",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus assumenda beatae laborum!",
  },
  {
    route: "3",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus assumenda beatae laborum!",
  },
  {
    route: "4",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus assumenda beatae laborum!",
  },
  {
    route: "5",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus assumenda beatae laborum!",
  },
];
