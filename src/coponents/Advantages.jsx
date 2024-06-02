import React from "react";
import ring from "../assets/Welcome/ring.svg";
import phone1 from "../assets/Advantages/phone1.svg";
import phone2 from "../assets/Advantages/phone2.svg";
import bell from "../assets/Advantages/bell.svg";
import star from "../assets/Advantages/star.svg";

const TextComponent = ({ title, icon, heading, paragraph }) => (
  <div className="block-2 flex-1 flex flex-col gap-4 mx-4 lg:mx-0 lg:px-4 justify-center">
    <div className="w-full items-center text-center lg:text-start ">
      <h1 className="text-[#FF5555] text-2xl mb-1 lg:mx-2">{title}</h1>
      <p className="text-3xl lg:text-5xl font-bold">{heading}</p>
    </div>
    <div className="flex flex-col gap-4 lg:gap-8 items-center lg:items-start text-left px-4">
      <div className="flex gap-2 items-start">
        <img src={icon} alt="" className="w-6 h-6 lg:w-8 lg:h-8" />
        <h1 className="font-semibold text-lg lg:text-xl">{heading}</h1>
      </div>
      <p className="text- text-sm lg:text-md text-justify">{paragraph}</p>
    </div>
  </div>
);

const ImageComponent = ({ phone }) => (
  <div className="block-1 flex-1 mx-4 lg:mx-0 relative flex  justify-center">
    <img
      src={phone}
      className="relative w-full max-w-xs lg:max-w-sm"
      alt="phone"
    />
  </div>
);

const Advantages = () => (
  <div className="flex flex-col items-center justify-center mt-8  mx-4  lg:px-60">
    <div className="flex flex-col lg:flex-row my-4 items-center h-auto gap-1 lg:gap-4">
      <TextComponent
        title="Features"
        icon={bell}
        heading="clever notifications"
        paragraph="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
        alignEnd={true}
      />
      <ImageComponent phone={phone1} />
    </div>

    <div className="flex flex-col lg:flex-row-reverse my-4  h-auto gap-1 lg:gap-4 justify-center">
      <TextComponent
        title="Advantages"
        icon={star}
        heading="fully customizable"
        paragraph="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
        alignEnd={false}
      />
      <ImageComponent phone={phone2} />
    </div>
  </div>
);

export default Advantages;
