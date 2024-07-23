import { Counter } from "./Counter";

export function App() {
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <Counter initialValue={0} incrementImport={1} />
    </div>
  );
}
