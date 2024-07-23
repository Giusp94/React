import { Welcome } from "./Welcome2";

export function App() {
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <Welcome name="John" age={20} />
    </div>
  );
}
