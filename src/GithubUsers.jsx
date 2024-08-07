import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [users, setUsers] = useState([]);

  function handleSerchUser(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.User;
    setUsers((u) => [...u, input.value]);
  }

  return (
    <form onSubmit={handleSerchUser}>
      <label>Inserisci il nome utente da ricercare:</label>
      <br />
      <input type="text" name="User" id="User" />
      <button>Search</button>
      <br />
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <GithubUser username={user} />
          </li>
        ))}
      </ul>
    </form>
  );
}
