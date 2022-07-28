import React from 'react'
import { useSelector } from 'react-redux';
import './Box.css'
import startPng from '../../assests/495468.png'
import winPng from '../../assests/winner.png';
import failPng from '../../assests/fail.png'

export default function Box({ props }) {

  const start = useSelector(state => state.start)
  let strVal ='';
  let winVal = ''
  const winner = useSelector(store => store.win);
  const fail = useSelector(store => store.fail);
console.log('win',winner)
// console.log('fail',props)

if (start === props) {
   strVal = startPng;
}
if(winner && winner == props){
strVal = winPng
}

if(fail && fail == props){
  winVal = failPng;
}


  return (
    <>
    <div className='boxgame' id={props}><img className='start' src={strVal} alt="" />{winVal && <div id={props}><img className='start' src={winVal} alt="" /></div>}</div>
    
    </>
  )
  
}

