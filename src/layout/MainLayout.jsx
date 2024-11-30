import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="min-h-[calc(100vh-13rem)]">
          <div className="sticky top-0 z-50 ">
            <Navber></Navber>
          </div>
          <div className="">
            <Outlet></Outlet>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
