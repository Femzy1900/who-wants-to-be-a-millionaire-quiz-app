import React, { useEffect, useMemo, useState } from "react";
import './App.css'
import Trivial from "./components/trivial";
import quizData from "./data";


function App() {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false)
  const [earned, setEarned] = useState("$ 0")
  

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);
  return (
    <div className="app">
        <div className="main">
          {timeOut ? (
            <h2 className="endText">You earned: {earned}</h2>
          ) : (
          <>
            <div className="top">
              <div className="timer">30</div>
            </div>
            <div className="bottom">
              <Trivial data={quizData} setTimeOut={setTimeOut} setQuestionNumber={setQuestionNumber}
              questionNumber={questionNumber}/>
            </div>
          </>
          )}
        </div>
        <div className="money">
          <ul className="moneyList">
            {moneyPyramid.map((m) => (
              <li className={
                questionNumber === m.id 
                ? "moneyListItem active" 
                : "moneyListItem"
                }
              >
                <span className="moneyNum">{m.id}</span>
                <span className="moneyCash">{m.amount}</span>
                </li>

            ))}

          </ul>
        </div>
    </div>
  );
}

export default App;
