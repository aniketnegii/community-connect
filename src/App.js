import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import Connect from "./pages/Connect";
import Resources from "./pages/Resources";
import Blogs from "./pages/Blogs";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="connect" element={<Connect />} />
        <Route path="resources" element={<Resources />} />
        <Route path="blogs" element={<Blogs />} />
      </Routes>
      {/* <CustomCarousel />
      <Blogs />
      <Profile /> */}
    </>
  );
};

export default App;
