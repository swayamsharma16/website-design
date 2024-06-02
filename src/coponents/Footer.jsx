import React from "react";
import logo from "../assets/Footer/logo.svg";
import call from "../assets/Footer/call.svg";
import message from "../assets/Footer/message.svg";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 p-4 w-full ">
      <div className="flex flex-col md:flex-row w-full justify-center lg:items-start md:items-start gap-4 md:gap-8 items-center ">
        <div className="flex flex-col gap-3 items-center md:items-start">
          <div className="flex items-center gap-1">
            <img src={logo} alt="logo" />
            <p className="text-lg lg:text-2xl font-semibold cursor-pointer  hover:text-[#FF5555]">
              uifry
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={call} alt="call icon" />
            <p className="text-sm lg:text-base cursor-pointer  hover:text-[#FF5555]">
              help@frybix.com
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={message} alt="message icon" />
            <p className="text-sm lg:text-base cursor-pointer  hover:text-[#FF5555]">
              +1 234 456 678 89
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-start">
          <h1 className="text-lg lg:text-2xl font-medium text-[#FF5555] cursor-default">
            Links
          </h1>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer  hover:text-[#FF5555]">Home</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer  hover:text-[#FF5555]">About Us</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer  hover:text-[#FF5555]">Bookings</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer  hover:text-[#FF5555]">Blog</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-start">
          <h1 className="text-lg lg:text-2xl font-medium text-[#FF5555] cursor-default">
            Product
          </h1>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer  hover:text-[#FF5555]">Take Tour</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer  hover:text-[#FF5555]">Live Chat</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer  hover:text-[#FF5555]">Reviews</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-start">
          <h1 className="text-lg lg:text-2xl font-medium text-[#FF5555] cursor-default">
            Newsletter
          </h1>
          <div className="flex items-center gap-2">
            <p className="cursor-pointer  hover:text-[#FF5555]">
              Stay up to date
            </p>
          </div>
          <div className="flex items-center w-full">
            <input
              type="text"
              placeholder="Your email"
              className="h-10 w-full md:w-auto rounded-l-md text-center border border-gray-300 focus:outline-none focus:border-[#FF5555]"
            />
            <button className="h-10 px-4 text-white bg-[#FF5555] rounded-r-md cursor-pointer hover:bg-black  hover:text-[#FF5555] font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 w-full">
        <p className="py-2 border-t-2 border-gray-400 w-full md:w-[50vw] text-center cursor-pointer  hover:text-[#FF5555]">
          Copyright 2022 uifry.com all rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
