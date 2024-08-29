import { useEffect } from "react";
import { useGithubUser } from "./hook/useGithubUser";

export function GithubUser({ username }) {
  const { user, load, error, onFetchGithubUser } = useGithubUser(username);

  useEffect(() => {
    onFetchGithubUser(username);
  }, [username]);

  return (
    <div>
      {load && <h2>Loading...</h2>}
      {error ? <h1>There is an error</h1> : user && <p>{user?.name}</p>}
    </div>
  );
}
/*
Crea un componente GithubUser che riceve una prop username e recupera i dati dell'utente Github corrispondente dalla Github API. 
Il componente dovrebbe rendere il nome, il login e l'avatar dell'utente.

Crea un nuovo componente GithubUsers che abbia un modulo con un input di testo e un pulsante di invio. 
L'input verrà utilizzato per cercare un utente specificandone il nome utente. 
Ogni utente verrà visualizzato in un elenco, in cui ogni elemento dell'elenco è un componente GithubUser. 
Questi componenti prenderanno il nome utente come prop
*/
