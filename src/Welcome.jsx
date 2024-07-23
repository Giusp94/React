import { Age } from "./Age";

export function Welcome({ name = Paolo, age = 18 }) {
  return (
    <div>
      <p>
        Welcome,
        <strong> {name}</strong>!
      </p>
      <Age age={age} />
    </div>
  );
}
