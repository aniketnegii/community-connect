import React from "react";
import Navbar from "./components/Navbar";
import CustomCarousel from "./components/CustomCarousel";
import Blogs from "./components/Blogs";
import Profile from "./components/Profile";
import Resources from "./components/Resources";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <CustomCarousel />
      <Blogs />
      <Profile /> */}
      <Resources />
    </>
  );
};

export default App;
