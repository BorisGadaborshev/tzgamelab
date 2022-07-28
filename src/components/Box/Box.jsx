import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Box.css";
import startPng from "../../assests/495468.png";
import winPng from "../../assests/winner.png";
import failPng from "../../assests/fail.png";

function Box({ props }) {
  const start = useSelector((state) => state.start);
  let strVal = "";
  let winVal = "";
  let failVal = "";
  const dispatch = useDispatch();
  let back = {
    backgroundColor: "",
    animationDuration: "",
    animationName: "",
  };
  const winner = useSelector((store) => store.win);
  const fail = useSelector((store) => store.fail);
  
  // console.log('fail',props)

  if (start === props) {
    strVal = startPng;
  }
  if (winner && winner == props) {
    winVal = winPng;
    back.backgroundColor = "green";
    // dispatch({type:'DEL_WIN', payload:0})
    // back.animationDuration = '3s'
    // back.animationName = 'slide'
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
