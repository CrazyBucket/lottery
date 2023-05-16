import { useState, useRef } from "react";
import { LuckyWheel } from "@lucky-canvas/react"
import './App.css'

const App = ()=> {
  const [blocks] = useState([{ padding: "10px", background: "#869cfa" }]);
  const [prizes] = useState([
    { background: "#e9e8fe", fonts: [{ text: "谢谢惠顾", top: "30px" }] },
    { background: "#b8c5f2", fonts: [{ text: "一等奖", top: "30px" }] },
    { background: "#e9e8fe", fonts: [{ text: "二等奖", top: "30px" }] },
    { background: "#b8c5f2", fonts: [{ text: "周边奖", top: "30px" }] },
  ]);
  const [buttons] = useState([
    { radius: "40%", background: "#617df2" },
    { radius: "35%", background: "#afc8ff" },
    {
      radius: "30%",
      background: "#869cfa",
      pointer: false,
      fonts: [{ text: "开始", top: "-10px" }],
    },
  ]);
  const myLucky = useRef();
  return (
    <div className="background">
      <LuckyWheel
        ref={myLucky}
        width="300px"
        height="300px"
        blocks={blocks}
        prizes={prizes}
        buttons={buttons}
        onStart={() => {
          myLucky.current.play();
          setTimeout(() => {
            myLucky.current.stop(2);
          }, 2500);
        }}
        onEnd={prize => {
          alert("恭喜你抽到 " + prize.fonts[0].text);
        }}
      />
    </div>
  );
}
export default App