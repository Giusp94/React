import { Link, Route, Routes } from "react-router-dom";
import { Container } from "./Container2";
import { Welcome } from "./Welcome";
import "./Container.css";
import { Counter } from "./Counter";
import { GithubUsers } from "./GithubUsers";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <Container
      title={
        <div>
          <h1 className="title">My Awesome Application</h1>
          <div className="nav">
            <Link to="/">Home page</Link> | <Link to="/counter">Counter</Link> |{" "}
            <Link to="/user">Github Search User</Link> |{" "}
            <Link to="/users">Github User List</Link>
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/:name" element={<Welcome />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/user" element={<GithubUsers />}>
          <Route index element={<p>Scrivii il nome utente</p>} />
          <Route path=":username" element={<GithubUser />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <p>Not Found</p>
              <Link to="/">Go to Home page</Link>
            </div>
          }
        />
        <Route path="/users" element={<GithubUserList />}>
          <Route path=":id" element={<ShowGithubUser />} />
          <Route path="user" element={<GithubUsers />}>
            <Route index element={<p>Add a user and select it</p>} />
            <Route path=":username" element={<GithubUser />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
}
/*
Create a new branch starting from the first props exercise. 
Modify App component that wraps a Routes component and add a single Route to the / path that renders the Welcome component, 
passing it a name prop. Render the App component within a BrowserRouter component. 
Add a new Route to the /counter path that renders the Counter component from the first state exercise.

Add a new Route to the users/:username path that renders a ShowGithubUser component that receives the username 
as a path parameter and renders a GithubUser component by passing it the received username.

Add three Links within the main App component and use them to navigate to all three routes. 
- Add a Not Found route that renders when a user navigates to a path that does not exist.

Create a GithubUserList component that fetching this API url, https://api.github.com/users, show a list of links of github usernames. 
By clicking on a username, the ShowGithubUser component will be displayed. Add a Route to the users path that shows the GithubUserList component. 
If there is a /users/:username route, remove it from the App component, and add a new nested route within the /users route. 
Add an index route to the GithubUsers route that shows the "Add a user and select it" message.

ITA

Crea un nuovo ramo a partire dal primo esercizio di props. 
Modifica il componente App che racchiude un componente Routes e aggiungi un singolo Route al percorso / che esegue il rendering del componente 
Welcome, passandogli una prop name. Esegui il rendering del componente App all'interno di un componente BrowserRouter. 
Aggiungi un nuovo Route al percorso /counter che esegue il rendering del componente Counter dal primo esercizio di stato.

Aggiungere una nuova Route al percorso users/:username che esegue il rendering di un componente 
ShowGithubUser che riceve il nome utente come parametro di percorso e esegue il rendering di un componente 
GithubUser passandogli il nome utente ricevuto.

Aggiungi tre collegamenti nel componente principale dell'app e usali per navigare verso tutti e tre i percorsi. 
- Aggiungi un percorso Non trovato che viene visualizzato quando un utente naviga verso un percorso che non esiste.

Crea un componente GithubUserList che, recuperando questo URL API, https://api.github.com/users , 
mostri un elenco di link di nomi utente github. Cliccando su un nome utente, verrà visualizzato il componente ShowGithubUser. 
Aggiungi una Route al percorso degli utenti che mostra il componente GithubUserList. Se c'è una route /users/:username, 
rimuovila dal componente App e aggiungi una nuova route nidificata nella route /users. 
Aggiungi una route indice alla route GithubUsers che mostra il messaggio "Aggiungi un utente e selezionalo".
*/
