import { UncontrolledLogin } from "./UncontrolledLogin";

export function App() {
  function handleLogin(state) {
    console.log(`Lo stato del login è ${state}`);
  }
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <UncontrolledLogin />
    </div>
  );
}
