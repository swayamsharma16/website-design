import React, { useState, useEffect } from "react";
import logo from "../../src/assets/Navbar/logo.svg";
import star from "../../src/assets/Navbar/star.svg";
import light from "../../src/assets/Navbar/light.svg";
import dark from "../../src/assets/Navbar/dark.svg";

const Navbar = () => {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <div className="Navbar w-full h-full flex justify-center text-xs lg:text-xl md:text-xl ">
      <div className="mt-3 mx-2 rounded-md h-10 flex items-center gap-4 lg:justify-between md:justify-between lg:w-full">
        <div className="flex justify-center items-center gap-2 ml-4">
          <img src={logo} alt="Logo" className="w-[24px] h-[24px] pl-2" />
          <span className="font-bold cursor-pointer hover:text-[#FF5555]">
            uifry
          </span>
        </div>
        <div className="text-center flex lg:justify-start md:justify-start justify-center gap-4 items-center">
          <img
            src={mode === "light" ? light : dark}
            className="w-[24px] h-[24px] rounded-full object-cover ml-4 cursor-pointer"
            alt={mode === "light" ? "Light" : "Dark"}
            onClick={toggleMode}
            aria-label="Toggle Dark Mode"
          />
          <div className="text-[#FF5555] font-bold cursor-pointer ">Home</div>
          <div className="font-semibold hover:text-[#FF5555] cursor-pointer">
            About
          </div>
          <div className="font-semibold hover:text-[#FF5555] cursor-pointer">
            Pricing
          </div>
          <div className="font-semibold hover:text-[#FF5555] cursor-pointer">
            Features
          </div>
        </div>
        <div className="p-4 flex items-center bg-black h-full rounded-sm text-white dark:bg-white dark:text-black font-bold hover:text-[#FF5555] cursor-pointer dark:hover:text-[#FF5555]">
          Download
        </div>
        <img src={star} alt="" className="relative top-8 flex justify-start" />
      </div>
    </div>
  );
};

export default Navbar;
