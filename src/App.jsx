import { AlertClock } from "./AlertClock";

export function App() {
  function handleShowTime() {
    const time = new Date();
    alert(`The time is ${time.toLocaleTimeString()}`);
  }

  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <AlertClock label="Click me!" onClick={handleShowTime} />
    </div>
  );
}
