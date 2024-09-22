import React, { useState } from "react";
import logo from "../../../images/MainLogo.png";
import uploadLogo from "../../../images/upload.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import heroIMG from "../../../images/heroImg.jpg";

import Footer from "../Footer/Footer";

const HomePage = () => {
  const location = useLocation();
  return (
    <>
      {/* Navigation bar Starts */}
      <div className="relative">
        <div className="fixed top-0 left-0 w-full z-20">
          <div className="bg-[#eff7f0f1] py-2">
            <div className="navbar mx-auto md:px-10">
              <div className="navbar-start">
                <Link to="/">
                  <img className="md:w-24 w-16" src={logo} alt="" />
                </Link>
              </div>
              <div className="navbar-center lg:flex">
                <h1 className="md:text-3xl font-bold font-1 text-sm">
                  BAUST Question Bank
                </h1>
              </div>
              <div className="navbar-end">
                <Link>
                  <div className="flex justify-center items-center">
                    <img className="w-8" src={uploadLogo} alt="" />
                    <p className="md:pl-2 pl-1 text-sm hidden md:block">
                      Upload
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-2 border-[#d1e6b7]"></div>
        </div>
      </div>
      {/* Navigation bar END */}

      {/* Hero Container Starts */}
      <div className="relative h-screen">
        {/* Background with blur */}
        <div
          style={{ backgroundImage: `url(${heroIMG})` }}
          className="absolute inset-0 bg-cover bg-no-repeat bg-center blur-[3px] z-0"
        ></div>
        <div className="relative z-10 pt-28 text-black container mx-auto">
          {location.pathname == "/questions" ? (
            ""
          ) : (
            <Link to="/questions">
              <button className="btn btn-secondary">Questions</button>
            </Link>
          )}
          <Outlet></Outlet>
        </div>
      </div>
      {/* Hero Container END */}
      {/* <Footer></Footer> */}
      {/* Hero Container END */}
    </>
  );
};

export default HomePage;
