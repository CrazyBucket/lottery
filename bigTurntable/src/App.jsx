import { useState, useRef } from "react";
import { LuckyWheel } from "@lucky-canvas/react";
import Modal from "./components/Modal/Modal";
import DigitSlot from "./components/DigitSlot/DigitSlot";
import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRecord, setShowRecord] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const [text, setText] = useState("");
  const [btn, setBtn] = useState("重抽");
  const [history, setHistory] = useState([]);
  const [num, setNum] = useState(0);
  const [inputNumber, setInputNumber] = useState(8008121023);
  const [outputNumbers, setOutputNumbers] = useState([]);

  function convertNumber() {
    let paddedNumber = inputNumber.padStart(10, "0");
    let output = [];
    for (let i = 0; i < 5; i++) {
      output[i] = paddedNumber.slice(i * 2, (i + 1) * 2);
    }
    setOutputNumbers(output);
  }
  convertNumber();
  // const [blocks] = useState([{ padding: "10px", background: "#b14c3a" }]);
  // const prizes = [
  //   {
  //     background: "#f35e36",
  //     fonts: [
  //       { text: "一等奖", top: "40px", fontWeight: "700", fontSize: "30px" },
  //     ],
  //   },
  //   {
  //     background: "#ffc43a",
  //     fonts: [
  //       { text: "二等奖", top: "40px", fontWeight: "700", fontSize: "30px" },
  //     ],
  //   },
  //   {
  //     background: "#feee74",
  //     fonts: [
  //       { text: "周边奖", top: "40px", fontWeight: "700", fontSize: "30px" },
  //     ],
  //   },
  // ];

  // const [buttons] = useState([
  //   { radius: "40%", background: "#f9f5ea" },
  //   { radius: "35%", background: "#edd994" },
  //   {
  //     radius: "30%",
  //     background: "#f9e8b2",
  //     pointer: false,
  //     fonts: [
  //       { text: "开始", top: "-24px", fontWeight: "700", fontSize: "40px" },
  //     ],
  //   },
  // ]);

  // const [pool, setPool] = useState([
  //   { prize: "一等奖" },
  //   { prize: "二等奖" },
  //   { prize: "二等奖" },
  //   { prize: "周边奖" },
  //   { prize: "周边奖" },
  //   { prize: "周边奖" },
  //   { prize: "周边奖" },
  //   { prize: "周边奖" },
  // ]);

  // const myLucky = useRef();
  // const handleStart = () => {
  //   if (pool.length > 0) {
  //     myLucky.current.play();
  //     setTimeout(() => {
  //       const randomIndex = Math.floor(Math.random() * pool.length);
  //       const selectedPrize = pool[randomIndex];
  //       let index = 0;
  //       if (selectedPrize.prize === "周边奖") {
  //         index = 2;
  //       }
  //       if (selectedPrize.prize === "一等奖") {
  //         index = 0;
  //       }
  //       if (selectedPrize.prize === "二等奖") {
  //         index = 1;
  //       }
  //       myLucky.current.stop(index);
  //       pool.splice(randomIndex, 1);
  //       setPool([...pool]);
  //     }, 2500);
  //   } else {
  //     setText("本轮奖品已经全部抽完！");
  //     setShowBtn(false);
  //     setShowModal(true);
  //   }
  // };

  // const handleEnd = prize => {
  //   let x = Math.floor(Math.random() * 100);
  //   setNum(Array.from(String(x).padStart(2, "0"), Number));
  //   console.log(x, num);
  //   setShowModal(true);
  //   setText("恭喜" + x + "号抽到" + prize.fonts[0].text);
  //   setReward(prize.fonts[0].text);
  //   setHistory([...history, { number: x, prize: prize.fonts[0].text }]);
  // };

  const handleOptionalClick = () => {};

  const handleRequiredClick = () => {
    setShowRecord(false);
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleLottery = () => {
    setShowModal(true);
    console.log(outputNumbers);
  };

  return (
    <div className="background">
      <div className="wheel">
        <div className="btn" onClick={handleLottery}>
          开始抽奖
        </div>
      </div>
      {showModal &&
        (showBtn ? (
          <Modal
            text={
              <div className="lotteryNum">
                <div>恭喜学号为</div>
                <span className="id">
                  <DigitSlot num={[8, 0]} />
                  <DigitSlot num={[8, 0]} />
                  <DigitSlot num={[8, 0]} />
                  <DigitSlot num={[8, 0]} />
                  <DigitSlot num={[8, 0]} />
                </span>
                <div>的同学抽到奖品</div>
              </div>
            }
            optionalButton={{ text: btn, onClick: handleOptionalClick }}
            requiredButton={{ text: "确定", onClick: handleRequiredClick }}
            onClose={handleClose}
          />
        ) : (
          <Modal
            text={text}
            requiredButton={{ text: "确定", onClick: handleRequiredClick }}
            onClose={handleClose}
          />
        ))}
      <div
        className="record"
        onClick={() => {
          setShowRecord(true);
        }}
      >
        抽奖记录
      </div>
      {showRecord && (
        <Modal
          text={
            history.length === 0
              ? "暂无抽奖记录"
              : history.map((item, index) => {
                  return (
                    <div key={index} style={{ whiteSpace: "pre-wrap" }}></div>
                  );
                })
          }
          requiredButton={{ text: "确定", onClick: handleRequiredClick }}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default App;
