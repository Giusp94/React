import { useState } from "react";

function inputBase() {
  return {
    username: "",
    password: "",
    checkbox: false,
  };
}

export function Login({ onLogin }) {
  const [data, setData] = useState(inputBase());

  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    const type = event.target.type;
    const checked = event.target.checked;

    setData((d) => {
      return {
        ...d,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleLogin(event) {
    event.preventDefault();
    onLogin(data);
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        name="username"
        value={data.username}
        type="text"
        onChange={handleInput}
        placeholder="Username"
      />
      <input
        name="password"
        value={data.password}
        type="password"
        onChange={handleInput}
        placeholder="Password"
      />
      <input
        name="checkbox"
        checked={data.checkbox}
        type="checkbox"
        onClick={handleInput}
      />
      <button
        name="login"
        type="submit"
        disabled={!data.username || !data.password}
      >
        Login
      </button>
      <button
        name="reset"
        disabled={!data.username || !data.password}
        onClick={inputBase()}
      >
        Reset
      </button>
    </form>
  );
}
