function onLogin(data) {
  console.log(`LOGIN
Username: ${data.target.elements.namedItem("username").value}
Password: ${data.target.elements.namedItem("password").value}
Remember: ${data.target.elements.namedItem("remember").checked}
`);
}
export function UncontrolledLogin() {
  function handleLoginUC(event) {
    event.preventDefault();
    onLogin(event);
  }

  function loginWithFormData(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(`LOGIN FORM DATA
Username: ${formData.get("username")}
Password: ${formData.get("password")}
Remember: ${formData.get("remember") === "on" ? true : false}`);
  }

  function checkButton(event) {
    event.preventDefault();
    event.nativeEvent.submitter.name === "event.target"
      ? handleLoginUC(event)
      : loginWithFormData(event);
  }

  return (
    <form onSubmit={checkButton}>
      <input name="username" type="text" />
      <input name="password" type="password" />
      <input name="remember" type="checkbox" />
      <button name="event.target">Login</button>
      <button name="form data">Login Form Data</button>
    </form>
  );
}
/*INGLESE

Create an uncontrolled component called UncontrolledLogin, containing three inputs: 
a username input, 
a password input and 
a remember checkbox. 
Add a "login" button to the Login component

When clicked, the event handler attached to the button should call an onLogin function that will print the values of the inputs.

Attempt to access the values of the form using the DOM API by reading the event.target of the onSubmit event handler.

Add a second button that call a loginWithFormData function that prints the values of the inputs by using the FormData API.

*/
/*ITALIANO
Crea un componente non controllato chiamato UncontrolledLogin, contenente tre input: 
un input username, 
un input password e 
una casella di controllo remember. 
Aggiungi un pulsante "login" al componente Login

Quando si fa clic, il gestore eventi associato al pulsante dovrebbe richiamare una funzione onLogin che stamperà i valori degli input.

Prova ad accedere ai valori del modulo utilizzando l'API DOM leggendo l'event.target del gestore eventi onSubmit.

Aggiungere un secondo pulsante che richiama una funzione loginWithFormData che stampa i valori degli input utilizzando l'API FormData.

*/
