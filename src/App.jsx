import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Login } from "./Login";

export function App() {
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <Welcome />
      <hr />
      <Counter />
      <hr />
      <Login />
    </div>
  );
}
