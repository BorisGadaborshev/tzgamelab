import React, { useRef } from 'react'
import {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Box from '../Box/Box';
import Nav from '../Nav/Nav';
import './Board.css'

 function Board() {

  const nav1 = useSelector(store => store.nav)
console.log('nav how', nav1);
let nav;
let arr=[];
setTimeout(()=>{
  nav = [...nav1]
})
  const random = useSelector(store => store.random)
  const winner = useSelector(store => store.win)
  const fail = useSelector(store => store.fail)
const [flag, setFlag] = useState(true)
console.log('start', flag)
  class Play {
    constructor() {
      this.xPosition = Math.floor(Math.random() * 3); 
      this.yPosition = Math.floor(Math.random() * 3); 
      this.field = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ] 
    }
  
    GetPosition() {
      return this.field[this.xPosition][this.yPosition];
    }
  
    letf() {
      this.xPosition -= 1;
    }
  
    right() {
      this.xPosition += 1;
    }
  
    up() {
      this.yPosition -= 1;
    }
  
    down() {
      this.yPosition += 1;
    }
  
    move(arr) {
       console.log(`текущая позиция [${this.xPosition}, ${this.yPosition}]. Число: ${this.GetPosition()} `)
      switch (arr[Math.floor(Math.random() * arr.length)]) {
        case 'left':
        this.letf();
        dispatch({type:'ADD_NAV', payload: 'up'})
        break;
      case 'right':
        this.right();
        dispatch({type:'ADD_NAV', payload: 'down'})
        break;
      case 'up':
        this.up();
        dispatch({type:'ADD_NAV', payload: 'left'})
        break;
      case 'down':
        this.down();
        dispatch({type:'ADD_NAV', payload: 'right'})
        break;
        default:
          console.log('');
      }
    }
  
    calculation(howMany) {
      for (let i = 0; i < howMany; i++) {


  this.move([
    this.yPosition !== 0 && 'up',
    this.yPosition !== 2 && 'down',
    this.xPosition !== 0 && 'left',
    this.xPosition !== 2 && 'right'
  ].filter(el => el))


      }
    }
  }
  const dispatch = useDispatch();

  const play = new Play();

  
  const [view, setView] = useState([]);
  function ren(){
    
   console.log('this', nav)
    // console.log(play.GetPosition());
    dispatch({type:'ADD_START', payload: play.GetPosition()})
  
  
      play.calculation(10);
      // console.log(play.GetPosition());
      dispatch({type:'ADD_RANDOM', payload: play.GetPosition()})

    // console.log('nav1',nav1)
      

  }

useEffect(()=> {
ren();
// ren();
},[])


  function win(e) {
    console.log('win')
    setFlag(prev => !prev);


    console.log('flag 2', flag)
    dispatch({ type: "DEL_NAV", payload: [] });
    dispatch({type: 'DEL_HIDDEN', payload: true})
    if (e.target.id == random) {
      dispatch({ type: "ADD_WIN", payload: e.target.id });
    } else {
      dispatch({ type: "ADD_FAIL", payload: e.target.id });
      dispatch({ type: "ADD_WIN", payload: random });
    }
    setTimeout(()=>{
      dispatch({type:'DEL_FAIL', payload:0})
      dispatch({type:'DEL_WIN', payload:0})
      
    },1500)
   
    setView([]);
    ren();
setFlag(prev => !prev);
setTimeout(()=>{

  window.location.href = '/';
},1500)
  }
const [box, setBox] = useState([1, 2, 3, 4, 5,6, 7, 8, 9]);

  return (
    <>
    <div className='boardGame' onClick={win} >
      { box.map((el) => <Box key={el.id} props={el}/> )}
      
    </div>
    <h3 style={{textAlign:'center'}}>Направление ходов</h3>
    <div className='navBoard'>
  {flag && nav1.map((el,index) => <Nav key={el.id} el={el} index={index} /> )}
    </div>
    </>
  )
}

export default Board;
