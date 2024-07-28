import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0, incrementImport = 1 }) {
  const [counter, setCount] = useState(initialValue);

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
      <h2>My Counter</h2>
      <CounterDisplay counter={counter} />
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterReset}>Reset</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
    </div>
  );
}

/*Risposte alle domande
- When calling "setter" function to increment the counter, should the parameter be a function or an immediate value? 
Nel mio caso è una funzione, se il codice all'interno di handleCounterIncrement o handleCounterDecrement fosse stato:

function handleCounterIncrement() {
    setCount(counter + incrementImport);
  }

allora il parametro sarebbe stato un valore immediato.
-Why?
Perchè il parametro della funzione setCount è un arrow function, mentre se fosse stato come nell'esempio della
risposta precedente il parametro sarebbe stato il counter che è il valore immediato ricevuto da setUse, che viene
salvato con un nuovo valore ogni volta che la funzione handleCounterIncrement viene richiamata.
 */
