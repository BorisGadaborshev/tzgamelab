import React,{ useState, useEffect} from 'react'
import{ useSelector, useDispatch} from 'react-redux'
import './Nav.css'
import upSvg from '../../assests/arrow-up.svg'
import downSvg from '../../assests/arrow-down.svg'
import leftSvg from '../../assests/arrow-left.svg'
import rightSvg from '../../assests/arrow-right.svg'
export default function Nav({el, index}) {
let up;

const [hidden, setHidden] = useState(true);
const dispatch = useDispatch();
useEffect(() => {

const id = setTimeout(()=>{
  setHidden(false)
}, index * 300)
 return () =>{
  clearTimeout(id)
 }
}, [])


  if (el === 'up') up = upSvg;
  if (el === 'down') up = downSvg;
  if (el === 'left') up = leftSvg;
  if (el === 'right') up = rightSvg;
  return (
    <div className={`nav ${hidden && 'hidden'}`}><img className='arrow' src={up} alt="" />{el}</div>
  )
}
