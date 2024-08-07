import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [user, setUser] = useState(username);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser(username) {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userJson = await response.json();
      setUser(userJson);
      console.log(userJson);
    } catch (error) {
      setError(error);
      setUser(null);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => fetchGithubUser(username), [username]);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <h1>There is an error</h1>}
      {user && (
        <p>
          Name: {user.name}
          <br />
          Login: {user.login}
          <br />
          Avatar:
          <br />
          <img src={`${user.avatar_url}`} alt="" />
        </p>
      )}
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
