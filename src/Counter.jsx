import React from 'react'
import { useSelector } from 'react-redux'

 const Counter = () => {
  const myData = useSelector((state)=>
    // console.log(myData)
    state.show.value
  )
  console.log(myData)
  // const myData = useSelector((state) => state.show.value); // Accessing the value from Redux store
  return (
    <div>
        <div>
                  <h1>INCREMENT/DECREMENT</h1>
                  <h4>React Redux</h4>
                </div>
        
                <div className="class-counter">
                <li title='decrement' href='/' ><span>-</span></li>
                  <input value={myData}/>
                <li href='/' title='increment'  ><span>+</span></li>
                </div>
    </div>
  )
}
export default Counter;