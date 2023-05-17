import { useState, useRef } from "react";
import { LuckyWheel } from "@lucky-canvas/react";
import bcImg from "./assets/bcImg.jpg";
import "./App.css";

const App = () => {
  const [blocks] = useState([{ padding: "10px", background: "#b14c3a" }]);
  const prizes = [
    {
      background: "#f35e36",
      fonts: [
        { text: "一等奖", top: "40px", fontWeight: "700", fontSize: "30px" },
      ],
    },
    {
      background: "#ffc43a",
      fonts: [
        { text: "二等奖", top: "40px", fontWeight: "700", fontSize: "30px" },
      ],
    },
    {
      background: "#feee74",
      fonts: [
        { text: "周边奖", top: "40px", fontWeight: "700", fontSize: "30px" },
      ],
    },
  ];
  const [buttons] = useState([
    { radius: "40%", background: "#f9f5ea" },
    { radius: "35%", background: "#edd994" },
    {
      radius: "30%",
      background: "#f9e8b2",
      pointer: false,
      fonts: [
        { text: "开始", top: "-24px", fontWeight: "700", fontSize: "40px" },
      ],
    },
  ]);

  const [pool, setPool] = useState([
    { prize: "一等奖" },
    { prize: "二等奖" },
    { prize: "二等奖" },
    { prize: "周边奖品" },
    { prize: "周边奖品" },
    { prize: "周边奖品" },
    { prize: "周边奖品" },
    { prize: "周边奖品" },
  ]);

  const myLucky = useRef();
  const handleStart = () => {
    if (pool.length > 0) {
      myLucky.current.play();
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * pool.length);
        const selectedPrize = pool[randomIndex];
        let index = 0;
        if (selectedPrize.prize === "周边奖品") {
          index = 2;
        }
        if (selectedPrize.prize === "一等奖") {
          index = 0;
        }
        if (selectedPrize.prize === "二等奖") {
          index = 1;
        }
        myLucky.current.stop(index);
        pool.splice(randomIndex, 1);
        setPool([...pool]);
      }, 2500);
    } else {
      alert("本轮奖品已经全部抽完！");
    }
  };

  const handleEnd = prize => {
    let x = Math.floor(Math.random() * 100) + 1;
    alert("恭喜" + x + "号抽到" + prize.fonts[0].text);
  };

  return (
    <div className="background">
      <img src={bcImg} width="90%" />
      <div className="wheel">
        <LuckyWheel
          ref={myLucky}
          width="500px"
          height="500px"
          blocks={blocks}
          prizes={prizes}
          buttons={buttons}
          onStart={handleStart}
          onEnd={handleEnd}
        />
      </div>
    </div>
  );
};

export default App;
