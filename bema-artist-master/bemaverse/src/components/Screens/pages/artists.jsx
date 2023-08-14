import React from "react";
import { Helmet } from "react-helmet";
import "../pages_styles/artists.scss";
import Header from "../../Header/Header";
import MobileHeader from "../../Header/mobileHeader";
import MinHeading from "./pagescomponents/artistsComponent/MinHeader";
import Container from "./pagescomponents/artistsComponent/Container";

const Artists = () => {
  const artistsNames = [
    "Burna Boy",
    "Wizkid",
    "Davido",
    "Tiwa Savage",
    "Yemi Alade",
    "Olamide",
    "Phyno",
    "Falz",
    "Rema",
    "Fireboy DML",
    "Teni",
    "Niniola",
  ];

  return (
    <div className="mainContentContainer">
      <Helmet>
        <title>{"BEMA - Artists"}</title>
      </Helmet>

      <Header />
      <MobileHeader />
      <div className="pop-artists">
        <div>
          <MinHeading title="Featured Artists" />
        </div>
        <div className="artCards">
          {artistsNames.map((artist, index) => (
            <Container
              key={index}
              artistName={artist}
              artistTitle={"Musician"}
            />
          ))}
        </div>
      </div>
      <div className="pop-artists">
        <div>
          <MinHeading title="Reggae Artists" />
        </div>
        <div className="artCards">
          {artistsNames.map((artist, index) => (
            <Container
              key={index}
              artistName={artist}
              artistTitle={"Musician"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;
