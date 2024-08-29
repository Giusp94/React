import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export function GithubUserList() {
  const [users, setUsers] = useState([]);

  async function handleFetch() {
    const response = await fetch(`https://api.github.com/users`);

    const users = await response.json();

    users.map((user) => setUsers((u) => [...u, user]));
  }

  return (
    <div>
      <button onClick={handleFetch}>Show Users</button>
      <hr />
      <Outlet />
      <hr />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
