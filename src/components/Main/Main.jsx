import React from 'react'

import AboutProject from "./AboutProject/AboutProject";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";
import Portfolio from "./Portfolio/Portfolio"
import AboutMe from "./AboutMe/AboutMe";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import NavTab from "./NavTab/NavTab"

const Main = () => {
    return (
     <div className="page">   
      <header>
      <Header color="main" />
      </header>
      <main>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer />
      </main>
     </div>
    );
};


export default Main