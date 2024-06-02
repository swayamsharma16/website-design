import React from "react";
import banner from "../assets/Welcome/banner.svg";
import phone from "../assets/Welcome/phone.svg";
import arrow from "../assets/Welcome/arrow.svg";
import playButton from "../assets/Welcome/playButton.svg";

const Welcome = () => {
  return (
    <div className="welcomeContainer grid lg:grid-cols-2 grid-cols-1 overflow-hidden mt-10 lg:mt-12 ">
      <div className="welcomeBlock1 flex flex-col items-end gap-4 px-4  ">
        <div className="block-1 dark:text-[#FF5555] text-4xl lg:text-6xl font-extrabold w-full lg:w-[80%] text-clip flex items-end">
          Make The Best Financial Decisions
        </div>
        <div className="block-2 w-full lg:w-[80%] text-clip text-sm">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </div>
        <div className="block-3 w-full lg:w-[80%] flex  lg:flex-row justify-start gap-4">
          <div className="p-4 flex items-center bg-black h-full rounded-md px-8 text-white gap-3 w-40 cursor-pointer cursor-pointer hover:text-[#FF5555]">
            <p>Download</p>
            <img src={arrow} alt="" />
          </div>
          <div className="flex items-center gap-4 cursor-pointer ">
            <img src={playButton} alt="" />
            <p className="font-medium text-xl cursor-pointer hover:text-[#FF5555]">
              Watch Video
            </p>
          </div>
        </div>
        <div className="block-4 w-full lg:w-[85%] flex justify-start items-start">
          <img src={banner} className="m-0 p-0 w-full h-auto" alt="" />
        </div>
      </div>
      <div className="welcomeBlock2 relative h-full  ">
        <img
          src={phone}
          className="relative z-10 -top-10 left-1/2 transform -translate-x-1/2 -translate--1/2 lg:top-10% lg:left-20%  h-fit"
          alt="ring"
        />
      </div>
    </div>
  );
};

export default Welcome;
