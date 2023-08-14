import React from "react";
import { Link } from "react-router-dom";

const Container = ({ artistName, artistTitle, albumName }) => {
  return (
    <div className="container">
      <div>
        <img
          src="https://images.pexels.com/photos/2170729/pexels-photo-2170729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Artist"
        />

        <div className="titles">
          <span className="artists-name">
            <Link
              to={`/artists/artistpage/${
                artistName ? artistName : "Kiddhillz"
              }`}
            >
              {artistName}
              {albumName}
            </Link>
          </span>
          <span className="role">{artistTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Container;
