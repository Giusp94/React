import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
  const [welcomeName, setWelcomeName] = useState("");

  function handleWelcomName(event) {
    setWelcomeName(event.target.value);
  }
  return (
    <div>
      <input
        name="welcomeName"
        value={welcomeName}
        type="text"
        onChange={handleWelcomName}
      />
      <Welcome name={welcomeName} />
    </div>
  );
}
/*
Crea un componente InteractiveWelcome che esegue il rendering di un tag di input e 
un componente Welcome che riceve una name prop e esegue il rendering del Welcome, {name}! messaggio all'interno del tag ap.

Passa il contenuto corrente del tag input alla prop name del componente Welcome. Il tag input dovrebbe essere un componente controllato.

Crea un componente Login contenente tre input: 
un input username, 
un input password e
una casella di controllo remember. 
Tutti e tre gli input devono essere componenti controllati. 

Aggiungi un pulsante "login" al componente Login. 
Questo pulsante deve essere disabilitato finché gli input username e password sono vuoti. 
Quando cliccato, il gestore eventi associato al pulsante deve chiamare un onLogin functionpassato come prop al componente Login, 
passandogli lo stato, che stamperà il valore dello stato.

Aggiungere un pulsante "reset" al componente Login che cancella il contenuto di tutti e tre gli input quando viene cliccato.

Utilizzare l'elemento form per gestire l'invio del form e collegare il gestore eventi handleLogin all'evento onSubmit dell'elemento form. 

Come si impedisce il comportamento predefinito dell'elemento form?
*/
/*INGLESE
Create an InteractiveWelcome component that 
renders an input tag and a Welcome component that receives a name prop and 
renders the Welcome, {name}! message within a p tag.

Pass the current content of the input tag to the name prop of the Welcome component. 
The input tag should be a controlled component.

Create a Login component containing three inputs: 
a username input, 
a password input and 
a remember checkbox. 
All three inputs should be controlled components. 

Add a "login" button to the Login component. 

This button should be disabled as long as the username and password inputs are empty. 
When clicked, the event handler attached to the button should call an 
onLogin function passed as a prop to the Login component, 
passing it the state, that will print the state value.

Add a "reset" button to the Login component that clears the content of all three inputs
when clicked. 
Use the form element to handle the form's submission, 
and attach the handleLogin event handler to the onSubmit event of the form element. 

How do you prevent the default behavior of the form element?
*/
