import React from "react";
import "./aboutCompany.scss";

export const AboutCompany = () => {
  return (
    <div className="AboutCompany__wrapper">
      {aboutData.map((item) => (
        <div>
            <span>{item.text}</span>
            <button>{item.button}</button>
        </div>
      ))}
    </div>
  )
}

const aboutData = [
  {
    route: "",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus assumenda beatae laborum!",
    button: "link1",
  },
  {
    route: "",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus assumenda beatae laborum!",
    button: "link2",
  },
  {
    route: "",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus assumenda beatae laborum!",
    button: "link3",
  },
  {
    route: "",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus assumenda beatae laborum!",
    button: "link4",
  },
  {
    route: "",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus assumenda beatae laborum!",
    button: "link5",
  },
];
