import { useState, useRef, useEffect } from "react";
import { LuckyWheel } from "@lucky-canvas/react";
import Modal from "./components/Modal/Modal";
import DigitSlot from "./components/DigitSlot/DigitSlot";
import poolData from "./assets/pool.json";
import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRecord, setShowRecord] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const [text, setText] = useState("");
  const [btn, setBtn] = useState("重抽");
  const [history, setHistory] = useState([]);
  const [nums, setNums] = useState();
  const [data, setDate] = useState();
  const [reward, setReward] = useState();
  const [showName, setShowName] = useState(false);
  useEffect(() => {
    setDate(poolData);
  }, []);

  const handleOptionalClick = () => {};

  const handleRequiredClick = () => {
    setShowRecord(false);
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleLottery = () => {
    setShowName(false);
    setShowModal(true);
    const randomObject = data[Math.floor(Math.random() * data.length)];
    console.log(data);
    console.log(randomObject);
    setReward(randomObject);
    const str = randomObject.id;
    const paddedStr = str.padStart(12, "0");
    const arr = paddedStr
      .match(/.{1,2}/g)
      .map(pair => pair.split("").map(Number));
    console.log(arr);
    setNums(arr);
    setTimeout(() => {
      setShowName(true);
    }, 5000);
  };

  const handleSeeHistory = () => {
    setShowRecord(true);
    let newList = [...history];
    newList = [...history, `${reward.name} ${reward.id}`];
    setHistory(newList);
  };
  return (
    <div className="background">
      <div class="container">
        <div className="btn" onClick={handleLottery}>
          开始抽奖
        </div>
      </div>
      {showModal &&
        (showBtn ? (
          <Modal
            text={
              <div className="lotteryNum">
                <div>中奖学号为:</div>
                <span className="id">
                  {nums.map((num, index) => (
                    <DigitSlot num={num} />
                  ))}
                </span>
                {showName && <>恭喜：{reward.name}同学</>}
              </div>
            }
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
          handleSeeHistory();
        }}
      >
        抽奖记录
      </div>
      ;
      {showRecord && (
        <Modal
          text={
            history.length === 0
              ? "暂无抽奖记录"
              : history.map((item, index) => {
                  return (
                    <div key={index} style={{ textAlign: "center" }}>
                      {item}
                    </div>
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
