import { useControlledForm } from "./hook/useControlledForm";
import { useCounter } from "./hook/useCounter";
import { GithubUsers } from "./GithubUsers";
import { useCurrenLocation } from "./hook/useCurrentLocation";

export function CustomHook() {
  const { counter, onIncrement, onReset, onDecrement } = useCounter();
  const { data, onInput, onLogin } = useControlledForm();
  const { currentPosition, errorPosition, loadPosition, onLocation } =
    useCurrenLocation();
  return (
    <div>
      <h2>COUNTER</h2>

      <h3>{counter}</h3>
      <button onClick={onIncrement}>+</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onDecrement}>-</button>

      <hr />

      <h2>CONTROLLED FORM</h2>

      <form onSubmit={onLogin}>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={onInput}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={onInput}
          placeholder="Password"
        />
        <button
          name="login"
          type="submit"
          disabled={!data.username || !data.password}
        >
          Login
        </button>
      </form>

      <hr />

      <h2>GITHUB USER</h2>

      <GithubUsers />

      <hr />

      <h2>CURRENT LOCATION</h2>

      <button onClick={onLocation}>Show my position</button>
      {loadPosition && <h2>Loading...</h2>}
      {!errorPosition && (
        <div>
          <p>Latitude: {currentPosition.latitude}</p>
          <p>Longtude: {currentPosition.longitude}</p>
        </div>
      )}
    </div>
  );
  S;
}
