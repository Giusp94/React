import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <Welcome name="John" age={19} />
    </div>
  );
}
