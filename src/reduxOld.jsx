import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index'

export default function ReduxOld() {
const myState = useSelector((state) => state.changeTheNumber)
const dispatch= useDispatch();
  return (
    <div>
        <div>
          <h1>INCREMENT/DECREMENT</h1>
          <h4>React Redux</h4>
        </div>

        <div className="class-counter">
        <li title='decrement' href='/' onClick={ ()=> dispatch(decNumber())}><span>-</span></li>
          <input value={myState}/>
        <li href='/' title='increment' onClick={ ()=> dispatch(incNumber())} ><span>+</span></li>
        </div>
    </div>
  )
}
