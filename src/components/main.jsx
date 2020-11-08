import React from "react";
import { AboutCompany } from "./aboutCompany";
import { Contact } from "./contact/contact";
import { Welcome } from "./welcome";

const MainPage = () => {
  return (
    <>
      <Welcome />
      <AboutCompany /> 
      <Contact />
    </>
  );
};

export default MainPage
