import { useState } from "react";

function printTodo({ todo }) {
  const [todo, setTodo] = useState([]);
  return <li>{todo}</li>;
}

export function TodoList() {
  const [todos, setTodos] = useState([]);

  function handleTodo(event) {
    event.preventDefault();
    const formTodo = new FormData(event.target);
    const todo = formTodo.get("todo");
    console.log(todo);
    //   console.log(todos);
    todos.push(todo);
    setTodos((t) => t);
  }

  return (
    <section>
      <form onSubmit={handleTodo}>
        <input type="text" name="todo" />
        <button onClick={printTodo}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <printTodo todo={todo} />
        ))}
      </ul>
    </section>
  );
}
/*
Crea un componente TodoList che esegue il rendering di un ul tag 
con un li tag per ogni elemento contenuto nella variabile di stato todos. 
La variabile di stato todos dovrebbe essere un array di stringhe. 
Il componente TodoList dovrebbe anche contenere un input tag e un pulsante. 
Quando si fa clic sul pulsante, il gestore eventi dovrebbe aggiungere 
il valore del tag di input all'array todos.

Cancella l'input ogni volta che un Todo viene aggiunto all'array todos.

Aggiungere un pulsante "reset" che, se cliccato, cancella l'array delle cose da fare.

Aggiungere un pulsante "rimuovi" a ogni tag li. 
Quando cliccato, il gestore eventi dovrebbe rimuovere l'elemento corrispondente dall'array todos.
*/
