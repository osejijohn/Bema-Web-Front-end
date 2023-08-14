import React from "react";
import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import MobileHeader from "../../Header/mobileHeader";

const Home = () => {
  return (
    <div className="mainContentContainer">
      <Helmet>
        <title>{"BEMA"}</title>
      </Helmet>

      <Header />
      <MobileHeader />
    </div>
  );
};

export default Home;
