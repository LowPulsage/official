import React from "react";
import { AboutCompany } from "./aboutCompany";
import { Contact } from "./contact/contact";
import { Footer } from "./footer";
import { Welcome } from "./welcome";

const MainPage = () => {
  return (
    <>
      <Welcome />
      <AboutCompany /> 
      <Contact />
      <Footer />
    </>
  );
};

export default MainPage
