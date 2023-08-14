import React from "react";
import "../pages_styles/artistPage.scss";
import Header from "../../Header/Header";
import MinHeading from "./pagescomponents/artistsComponent/MinHeader";
import MobileHeader from "../../Header/mobileHeader";
import Container from "./pagescomponents/artistsComponent/Container";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Song from "./pagescomponents/artistsComponent/playlist";
import { Helmet } from "react-helmet";

const ArtistPage = () => {
  const url = new URL(window.location.href);
  const artistName = decodeURI(url.pathname.split("/")[3]).replace("%", "");
  const artistCardBackgroundImage = "https://picsum.photos/200";
  const albumName = [
    "Break It",
    "Love Me",
    "Hello",
    "Brother",
    "Welcome ",
    "The Other Side",
    "Wizard",
    "Harry Potter",
    "He who was",
  ];

  return (
    <div className="mainContentContainer">
      <Helmet>
        <title>{"BEMA - Artist " + artistName}</title>
      </Helmet>
      <div className="artistpage">
        <div className="headers">
          <Header />
          <MobileHeader />
        </div>
        <div
          className="artistCard"
          style={{
            "--artist-card-background-image": `url(${artistCardBackgroundImage})`,
          }}
        >
          <div className="titleCard">
            <h4>Verified Artist</h4>

            <h1 className="artistName">
              {artistName} <BsFillPatchCheckFill />
            </h1>

            <h4>50,000,000 Monthly Viewers</h4>
          </div>
        </div>
        <div className="bottom-grid">
          <div className="g1">
            <MinHeading title="Albums" />
            <div className="cards">
              {albumName.map((artist, index) => (
                <Container
                  key={index}
                  albumName={artist}
                  artistTitle={artistName}
                />
              ))}
            </div>
          </div>
          <div className="g2">
            <MinHeading title="Events" color="white" />
            <ul>
              {albumName.map((artist, index) => (
                <li key={index}>{artist} </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="playlist">
          <MinHeading title="Playlists" />
          <table>
            {albumName.map((artist, index) => (
              <Song key={index} k={index + 1} title={artist} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
