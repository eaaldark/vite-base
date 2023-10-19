import { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  clear,
} from "./counterSlice";
import "./Counter.module.css";

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className="containervalues">
      <div className="row">
        <button
          className="button w-12"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className="text-7xl pl-4 pr-4 my-1 font-sans">{count}</span>
        <button
          className="button w-12"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className="row">
        <input
          className="incremental"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className="button"
          onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button
          className="button"
          onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </button>
        <button
          className="button"
          onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </button>
        <button className="button" onClick={() => dispatch(clear())}>
          Clear
        </button>
      </div>
    </div>
  );
}
