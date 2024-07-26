import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";

export function App() {
  function handleLogin(state) {
    console.log(`Lo stato del login è ${state}`);
  }
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <InteractiveWelcome />
      <hr />
      <Login onLogin={handleLogin} />
    </div>
  );
}
