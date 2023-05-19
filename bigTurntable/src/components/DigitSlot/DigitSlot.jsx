import React, { useEffect, useRef, useState } from "react";
import { SlotMachine } from "@lucky-canvas/react";

const DigitSlot = ({ num }) => {
  useEffect(() => {
    myLucky.current.play();
    setTimeout(() => {
      console.log(num);
      myLucky.current.stop(num);
    }, 500);
  }, []);
  const [blocks] = useState([
    { padding: "2px", background: "#f9e8b2" },
    { padding: "2px", background: "#f9e8b2" },
  ]);
  const [slots] = useState([
    { order: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], direction: 1 },
    { order: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], direction: -1 },
  ]);
  const [prizes] = useState([
    { fonts: [{ text: "0", top: "5%" }] },
    { fonts: [{ text: "1", top: "5%" }] },
    { fonts: [{ text: "2", top: "5%" }] },
    { fonts: [{ text: "3", top: "5%" }] },
    { fonts: [{ text: "4", top: "5%" }] },
    { fonts: [{ text: "5", top: "5%" }] },
    { fonts: [{ text: "6", top: "5%" }] },
    { fonts: [{ text: "7", top: "5%" }] },
    { fonts: [{ text: "8", top: "5%" }] },
    { fonts: [{ text: "9", top: "5%" }] },
  ]);
  const defaultStyle = {
    borderRadius: Infinity,
    background: "#f35e36",
    fontSize: "32px",
    fontColor: "#fff",
    borderRadius: "5px",
  };
  const defaultConfig = {
    rowSpacing: "20px",
    colSpacing: "10px",
  };

  const myLucky = useRef();

  return (
    <div>
      <SlotMachine
        ref={myLucky}
        width="100px"
        height="80px"
        blocks={blocks}
        slots={slots}
        prizes={prizes}
        defaultConfig={defaultConfig}
        defaultStyle={defaultStyle}
      />
    </div>
  );
};

export default DigitSlot;
