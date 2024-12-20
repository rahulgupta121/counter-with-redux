import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {decrementData, addData} from "./feature/counterSlice"
const Counter = () => {
  const myData = useSelector(
    (state) =>
      state.show.value
  );
  // console.log(myData);
  // const myData = useSelector((state) => state.show.value); // Accessing the value from Redux store
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1>INCREMENT/DECREMENT</h1>
        <h4>React Redux</h4>
      </div>

      <div className="class-counter">
        <li title="decrement" href="/" onClick={()=>dispatch(decrementData())}>
          <span>-</span>
        </li>
        <input value={myData} />
        <li href="/" title="increment" onClick={()=>dispatch(addData())}>
          <span>+</span>
        </li>
      </div>
    </div>
  );
};
export default Counter;
