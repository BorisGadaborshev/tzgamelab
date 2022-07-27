import React from 'react'
import {  useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Box from '../Box/Box';
import './Board.css'

export default function Board() {

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
        console.log('up')
        break;
      case 'right':
        this.right();
        console.log('down')
        break;
      case 'up':
        this.up();
        console.log('left')
        break;
      case 'down':
        this.down();
        console.log('right')
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

  useEffect(() => {
   
    const play = new Play();
    // console.log(play.GetPosition());
    dispatch({type:'ADD_START', payload: play.GetPosition()})
    play.calculation(10);
    // console.log(play.GetPosition());
    dispatch({type:'ADD_RANDOM', payload: play.GetPosition()})
  
   
  }, [])
  
  
const [box, setBox] = useState([0, 1, 2, 3, 4, 5,6, 7, 8]);

  return (
    <div className='boardGame'>
      { box.map((el) => <Box key={el.id}/> )}
      
    </div>
  )
}
