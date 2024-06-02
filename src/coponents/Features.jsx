import React from "react";
import phone from "../assets/Features/phone.svg";
import Icon1 from "../assets/Features/Icon1.svg";
import Icon2 from "../assets/Features/Icon2.svg";
import Icon3 from "../assets/Features/Icon3.svg";

const data = [
  {
    heading: "Budgeting Intervals",
    Icon: Icon1,
    paragraph:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor",
  },
  {
    heading: "Budgeting Intervals",
    Icon: Icon2,
    paragraph:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor",
  },
  {
    heading: "Budgeting Intervals",
    Icon: Icon3,
    paragraph:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center  mt-4 w-full  lg:px-0 overflow-hidden">
      <div className="block-1 flex-1 flex justify-center items-center relative mb-8 lg:mb-0">
        <img
          src={phone}
          className="relative z-10 w-full max-w-[300px] lg:max-w-none"
          alt="phone"
        />
      </div>

      <div className="block-2 flex-1 flex flex-col gap-4 lg:px-0 px-2">
        <div>
          <h1 className="text-[#FF5555] text-2xl mb-1 text-center lg:text-left">
            Features
          </h1>
          <p className="text-3xl lg:text-5xl font-bold text-center lg:text-left ">
            Uifry Premium
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {data.map(({ Icon, paragraph, heading }, index) => (
            <div key={index} className="flex items-start gap-4">
              <img src={Icon} alt={heading} className="w-8 h-8 mt-1" />
              <div>
                <h1 className="font-semibold text-xl">{heading}</h1>
                <p className="text-slate-500 mt-2 text-md">{paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
