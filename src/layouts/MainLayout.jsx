import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer"

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default MainLayout;
