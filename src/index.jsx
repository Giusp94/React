import { App } from "./App";
import { createRoot } from "react-dom/client";

// const helloWorldElement = <HelloWorld />;
// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// Modalità comune di fare questa chiamata
createRoot(document.getElementById("root")).render(<App />);
