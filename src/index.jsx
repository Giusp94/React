import { App } from "./App";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(<App />);

/* Risposte alle domande
1-Can you use the Hello component more than once in the App component? 
Si è possibile usare il componente Hello più di una volta
-What happens if you do? 
Se si fa, ciò che il componente Hello contiene viene renderizzato tante volte quanti sono gli utilizzi in App.jsx
-Can you render the Message component directly within the App component? 
Si, è possibile renderizzare il componente Message direttamente nel componente App
-What happens if you do? 
Se si renderizza il componente Message nel componente App, verrà visualizzato cioò che è contenuto
nel componente funzione di Message
*/
