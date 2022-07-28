import React from 'react'
import './Nav.css'
import upSvg from '../../assests/arrow-up.svg'
import downSvg from '../../assests/arrow-down.svg'
import leftSvg from '../../assests/arrow-left.svg'
import rightSvg from '../../assests/arrow-right.svg'
export default function Nav({props}) {
let up;


  if (props === 'up') up = upSvg;
  if (props === 'down') up = downSvg;
  if (props === 'left') up = leftSvg;
  if (props === 'right') up = rightSvg;
  return (
    <div className='nav'><img className='arrow' src={up}/>{props}</div>
  )
}
