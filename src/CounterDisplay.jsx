export function CounterDisplay({ counter }) {
  const CounterDisplayStyle = {
    fontSize: "1.5rem",
    color: "red",
  };

  return (
    <div style={CounterDisplayStyle}>
      <h2>
        Show the increment.
        <br />
        {counter}
      </h2>
    </div>
  );
}
