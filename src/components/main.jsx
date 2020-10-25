import React from "react";
import { AboutCompany } from "./aboutCompany";
import { Contact } from "./contact/contact";
import { Footer } from "./footer";
import { Header } from "./header/header";
import { Welcome } from "./welcome";

const MainPage = () => {
  return (
    <>
      <Header />
      <Welcome />
      <AboutCompany /> 
      <Contact />
      <Footer />
    </>
  );
};

export default MainPage
