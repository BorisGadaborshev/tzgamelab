import React from "react";
import { useSelector } from "react-redux";
import "./Box.css";
import startPng from "../../assests/495468.png";
import winPng from "../../assests/winner.png";
import failPng from "../../assests/fail.png";

function Box({ props }) {
  const start = useSelector((state) => state.start);
  let strVal = "";
  let winVal = "";
  let failVal = "";
  let back = {
    backgroundColor: "",
    animationDuration: "",
    animationName: "",
  };
  const winner = useSelector((store) => store.win);
  const fail = useSelector((store) => store.fail);
  

  if (start === props) {
    strVal = startPng;
  }
  if (winner && winner == props) {
    winVal = winPng;
    back.backgroundColor = "green";

  }

  if (fail && fail == props) {
    failVal = failPng;
    back.backgroundColor = "red";
  }

  return (
    <>
      <div className="boxgame" id={props} style={back}>
        <img className="start" src={strVal} alt="" />
        {failVal && (
          <div>
            <img className="start" src={failVal} alt="" />
            <img className="start" src={winVal} alt="" />
          </div>
        )}
        {winVal && <img className="start" src={winVal} alt="" />}
      </div>
    </>
  );
}

export default React.memo(Box);
