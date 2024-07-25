import { useEffect, useState } from "react";

export function Counter2({ initialValue = 0, incrementImport = 1 }) {
  const [counter, setCount] = useState(initialValue);

  useEffect(() => {
    console.log(`Counter is: ${counter}`);
  }, [counter]);
  function handleCounterIncrement() {
    setCount((c) => c + incrementImport);
  }
  function handleCounterReset() {
    setCount(initialValue);
  }
  function handleCounterDecrement() {
    setCount((c) => c - incrementImport);
  }
  return (
    <div>
      <h2>The counter is:</h2>
      <h2>{counter}</h2>
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterReset}>Reset</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
    </div>
  );
}
