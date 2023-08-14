import { Outlet, NavLink } from "react-router-dom";
import {
  BsHouse,
  BsPerson,
  BsCollectionPlay,
  BsCompass,
  BsPlus,
  BsPeople,
  BsFolder2Open,
  BsArrow90DegLeft,
  BsFillFileXFill,
} from "react-icons/bs";
import "./styles/sidenavigation_module_style.scss";

const SideNavigation = () => {
  const handleXClick = () => {
    const navv = document.getElementsByClassName("navv")[0];
    navv.classList.toggle("open");
  };

  return (
    <>
      <nav className="navv" onClick={handleXClick}>
        <div>
          <div className="navv-header">
            <h1>BEMA</h1>

            <div className="x-button">
              <BsFillFileXFill />
            </div>
          </div>
          <ul>
            <div className="menu-header">
              <h4>Menu</h4>
            </div>
            <li>
              <BsHouse />
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <Bsmusic/>
              <NavLink to="/">New Music</NavLink>
            </li>
            <li>
              <BsHouse />
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <BsHouse />
              <NavLink to="/">Live</NavLink>
            </li>
            <li>
              <BsCompass />
              <NavLink to="/dashboard">Explore</NavLink>
            </li>
            <li>
              <BsCollectionPlay />
              <NavLink to="/library">Library</NavLink>
            </li>

            <li>
              <BsPerson />
              <NavLink to="/blogs">Profile</NavLink>
            </li>
          </ul>

          <ul>
            <div className="menu-header">
              <h4>My Music</h4>
            </div>
            <li>
              <BsArrow90DegLeft />
              <NavLink to="/recent-played">Recents</NavLink>
            </li>
            <li>
              <BsCompass />
              <NavLink to="/liked-songs">Liked Songs</NavLink>
            </li>
            <li>
              <BsPeople />
              <NavLink to="/artists">Artists</NavLink>
            </li>

            <li>
              <BsFolder2Open />
              <NavLink to="/albums">Albums</NavLink>
            </li>
          </ul>
          <ul>
            <div className="menu-header">
              <h4>Play Lists</h4>
              <BsPlus />
            </div>
            <li>
              <BsCollectionPlay />
              <NavLink to="/playlists/joeswoll">Joe Swolls</NavLink>
            </li>
            <li>
              <BsCollectionPlay />
              <NavLink to="/playlists/slow">Slow</NavLink>
            </li>
            <li>
              <BsCollectionPlay />
              <NavLink to="/playlists/art">Art</NavLink>
            </li>

            <li>
              <BsCollectionPlay />
              <NavLink to="/playlists/coding">Coding</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default SideNavigation;
