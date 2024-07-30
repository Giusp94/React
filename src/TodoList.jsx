import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);

  function handleTodo(event) {
    event.preventDefault();
    const input = event.target.children[0];
    const formTodo = new FormData(event.target);
    const todo = formTodo.get("todo");
    setTodos((t) => [...t, todo]);
    input.value = "";
  }

  function handleResetButton() {
    setTodos(() => []);
  }

  function handleSingleLi(index) {
    const newTodos = todos.filter((t, i) => i !== index);
    setTodos(newTodos);
  }
  console.log(todos);

  return (
    <section>
      <form onSubmit={handleTodo}>
        <input type="text" name="todo" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button type="button" onClick={() => handleSingleLi(index)}>
              Remove
            </button>
            <br />
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleResetButton}>
        Reset
      </button>
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
