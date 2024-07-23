import { Age } from "./Age";

export function Welcome({ name = Paolo, age = 18 }) {
  return (
    <div>
      <p>
        Welcome,
        <strong> {name}</strong>!
      </p>
      {age > 18 ? <Age age={age} /> : <p>You are very young!</p>}
      {Boolean(age) ? <Age age={age} /> : ""}
      {age > 18 && age < 65 ? <Age age={age} /> : <p>You are very young!</p>}
      {age > 18 && name === "John" ? (
        <Age age={age} />
      ) : (
        <p>You are very young!</p>
      )}
    </div>
  );
}
