import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    checkbox: false,
  });
  const navigate = useNavigate();
  function handleReset() {
    setData((d) => ({
      username: "",
      password: "",
      checkbox: false,
    }));
  }
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
    console.log(
      `Lo stato del login è Username: ${data.username}, Password: ${data.password},Checkbox: ${data.checkbox}`
    );
  }

  function handleButtonWelcome() {
    navigate("/welcome");
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
        type="button"
        disabled={!data.username || !data.password}
        onClick={handleReset}
      >
        Reset
      </button>
      <div>
        <button type="button" onClick={handleButtonWelcome}>
          Go to Welcome Page
        </button>
      </div>
    </form>
  );
}
