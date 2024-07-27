import { Color } from "./Color";
import { Colors } from "./Colors";

export function App() {
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <h3>Single li</h3>
      <Color color={{ id: 1, name: "red" }} />
      <h3>Ul list</h3>
      <Colors
        colors={[
          { id: 1, name: "red" },
          { id: 2, name: "green" },
          { id: 3, name: "blue" },
          { id: 4, name: "amber" },
        ]}
      />
    </div>
  );
}
