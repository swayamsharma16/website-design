import React from "react";
import ringPhotos from "../assets/Testimonials/ringPhotos.svg";
import avatar from "../assets/Testimonials/avatar.svg";

const Testimonials = () => {
  return (
    <div className="mt-4 p-4 sm:p-6 md:p-8">
      <div>
        <h1 className="text-2xl font-normal text-center">Testimonial</h1>
      </div>
      <div className="flex justify-center">
        <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          What Our Users Say About Us?
        </p>
      </div>
      <div className="mt-4 flex flex-col md:flex-row items-center">
        <div className="flex-1 flex items-center justify-center mb-4 md:mb-0">
          <img src={ringPhotos} className="w-3/4 md:w-full" alt="ring" />
        </div>
        <div className="flex-1 flex flex-col gap-4 px-4">
          <div>
            <h1 className="text-[#FF5555] text-xl sm:text-2xl mb-1">
              the best financial accounting app ever!
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold lg:text-left md:text-left text-center mt-2">
              Uifry Premium
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-base sm:text-lg md:text-xl">
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                  tristique lacus, et blandit viverra nisl velit. Sed mattis
                  rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget
                  eget ac dolor neque lorem sapien, suspendisse aliquam.”
                </p>
                <div className="flex justify-center mt-4">
                  <img
                    src={avatar}
                    alt="User Avatar"
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
