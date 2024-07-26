import { useEffect, useRef } from "react";

export function FocusableInput() {
  const _refInputFocus = useRef(null);
  const _refInputMount = useRef(false);

  useEffect(() => {
    if (!_refInputMount.current) {
      console.log(`Input is mounted first time`);
      _refInputMount.current = true;
    } else {
      console.log("Input is mounted other time");
    }
    _refInputFocus.current?.focus();
  }, []);

  return <input ref={_refInputFocus} type="text" />;
}

/*INGLESE
Create a FocusableInput component that renders an input tag. 
As soon as the component renders, the input tag should be focused automatically.

Using StrictMode, create a component with an effect that prints a message only when 
the component is mounted the first time. Use a ref to keep track of whether the component is mounted or not.
*/
/*ITALIANO
Crea un componente FocusableInput che esegue il rendering di un tag di input. 
Non appena il componente esegue il rendering, il tag di input dovrebbe essere focalizzato automaticamente.

Utilizzando StrictMode, crea un componente con un effetto che stampa un messaggio solo quando il componente viene montato la prima volta. 
Utilizza un ref per tenere traccia se il componente è montato o meno.
*/
