import React from "react";
import { Routes, Route } from "react-router-dom";
import SideNavigation from "./components/SideNavigation";
import Home from "./components/Screens/pages/HomePage";
import Artists from "./components/Screens/pages/artists";
import ArtistPage from "./components/Screens/pages/artistPage";
import Library from "./components/Screens/pages/Library";
import About from "./components/Screens/pages/AboutPage";
import DashBoard from "./components/Screens/pages/DashBoard";
import ErrorPage from "./components/Screens/pages/ErrorPage";

 
const AllRoute = () => {
  return (
    <div className="app">
      <Routes>
        {/* Index */}
          <Route path="/" element={<SideNavigation />}>
          <Route index element={<Home />} />
          <Route path="/blogs" element={<About />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/library" element={<Library />} />
        </Route>

        {/* Artist Routing */}

        <Route path="/artists" element={<SideNavigation />}>
          <Route index element={<Artists />} />
          <Route path="/artists/artistpage/:artistName" element={<ArtistPage />} />
          <Route path="/artists/blogs" element={<About />} />
          <Route path="/artists/dashboard" element={<DashBoard />} />
          <Route path="/artists/artists" element={<Artists />} />
          <Route path="/artists/library" element={<Library />} />
        </Route>

        {/* Playlist Routing */}

        <Route path="/playlist" element={<SideNavigation />}>
          <Route index element={<Home />} />
          <Route path="/playlist/blogs" element={<About />} />
          <Route path="/playlist/dashboard" element={<DashBoard />} />
          <Route path="/playlist/artists" element={<Artists />} />
          <Route path="/playlist/library" element={<Library />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default AllRoute;
