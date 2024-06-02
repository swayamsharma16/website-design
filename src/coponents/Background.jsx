import React from "react";
import grainy1 from "../assets/Background/grainy1.svg";
import grainy2 from "../assets/Background/grainy2.svg";
import grainy3 from "../assets/Background/grainy3.svg";
import grainy4 from "../assets/Background/grainy4.svg";
import grainy5 from "../assets/Background/grainy5.svg";
import grainy6 from "../assets/Background/grainy6.svg";
import grainy7 from "../assets/Background/grainy7.svg";
import grainy8 from "../assets/Background/grainy8.svg";

const positions = [
  {
    id: "1",
    top: "2rem",
    left: "3rem",
    width: "317px",
    height: "230px",
  },
  {
    id: "2",
    top: "3rem",
    right: "5rem",
    width: "457.24px",
    height: "717.14px",
  },
  {
    id: "3",
    top: "80vh",
    left: "5rem",
    width: "393px",
    height: "285.14px",
  },
  {
    id: "4",
    top: "671px",
    right: "50%",
    width: "327px",
    height: "237.26px",
  },
  {
    id: "5",
    top: "1400px",
    left: "2rem",
    width: "327px",
    height: "237.26px",
  },
  {
    id: "6",
    top: "1500px",
    left: "50%",
    width: "393px",
    height: "285.14px",
  },
  {
    id: "7",
    top: "1808px",
    width: "327px",
    height: "237.26px",
  },
  {
    id: "8",
    top: "1978px",
    right: "8rem",
    width: "327px",
    height: "237.26px",
  },
];

const grainyImages = [
  grainy1,
  grainy2,
  grainy3,
  grainy4,
  grainy5,
  grainy6,
  grainy7,
  grainy8,
];

function Background() {
  return (
    <div className="absolute inset-0 overflow-x-hidden">
      {positions.map((pos, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            width: pos.width,
            height: pos.height,
          }}
        >
          <img
            src={grainyImages[index]}
            alt={`Grainy Dots ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default Background;
