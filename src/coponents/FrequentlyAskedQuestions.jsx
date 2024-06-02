import React from "react";

const data = [
  {
    id: "",
    heading: "The Best Financial Accounting App Ever!",
    paragraph:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
  },
  {
    id: "",
    heading: "The Best Financial Accounting App Ever!",
    paragraph:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
  },
  {
    id: "",
    heading: "The Best Financial Accounting App Ever!",
    paragraph:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
  },
  {
    id: "",
    heading: "The Best Financial Accounting App Ever!",
    paragraph:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
  },
  {
    id: "",
    heading: "The Best Financial Accounting App Ever!",
    paragraph:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
  },
  {
    id: "",
    heading: "The Best Financial Accounting App Ever!",
    paragraph:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
  },
];

function FrequentlyAskedQuestions() {
  return (
    <div className="flex flex-col m-4 sm:m-8">
      <h1 className="text-[#FF5555] text-3xl sm:text-xl lg:text-2xl mx-2 lg:mx-4 lg:text-left md:text-left text-center">
        FAQ
      </h1>
      <p className="text-black text-2xl sm:text-3xl lg:text-4xl font-semibold mx-2 lg:mx-4 my-2  lg:text-left md:text-left text-center dark:text-white">
        Frequently asked questions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex h-auto p-4 rounded-md ${
              index % 2 === 0
                ? "bg-[#FF5555] text-white"
                : "bg-white text-black"
            } ${
              [0, 3, 4].includes(index)
                ? "lg:bg-[#FF5555] lg:text-white md:bg-[#FF5555] md:text-white"
                : "lg:bg-white lg:text-black md:bg-white md:text-black"
            }`}
          >
            <div className="flex-grow flex flex-col gap-1">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold">
                {item.heading}
              </div>
              <div className="font-normal text-sm sm:text-base lg:text-lg">
                {item.paragraph}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestions;
