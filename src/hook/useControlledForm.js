import { useState } from "react";

export function useControlledForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;

    setData((d) => ({
      ...d,
      [name]: value,
    }));
  }

  function handleLogin() {
    event.preventDefault();
    console.log(`Username: ${data.username}, Password: ${data.password}`);
  }

  return { data: data, onInput: handleInput, onLogin: handleLogin };
}
/*
Create a custom hook that keeps track of the state of a controlled form with the username and password inputs, 
and returns the current value of the inputs as well as an event handler to update either input.
*/
