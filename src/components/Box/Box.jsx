import React from 'react'
import { useSelector } from 'react-redux';
import './Box.css'
import startPng from '../../assests/495468.png'

export default function Box({ props }) {

  const start = useSelector(state => state.start)
  let strVal ='';
if (start === props) {
   strVal = startPng;
}

  return (
    <div className='boxgame'><img className='start' src={strVal} alt="" /></div>
  )
}

