import { Clock } from "./Clock.jsx";
import { Counter2 } from "./Counter2.jsx";

export function App() {
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <Counter2 initialValue={0} incrementImport={1} />
      <hr />
      <Clock />
    </div>
  );
}
