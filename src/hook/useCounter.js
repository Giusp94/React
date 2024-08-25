import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrementCounter() {
    setCounter((c) => c + 1);
  }

  function handleResetCounter() {
    setCounter(initialValue);
  }

  function handleDecrementCounter() {
    setCounter((c) => c - 1);
  }

  return {
    counter: counter,
    onIncrement: handleIncrementCounter,
    onReset: handleResetCounter,
    onDecrement: handleDecrementCounter,
  };
}
/*
Create a custom hook useCounter that keeps track of the state of a counter, 
and returns the current value of the counter as well as three functions to increment, 
decrement and reset the counter.
*/
