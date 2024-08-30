import { useGithubUsersSWR } from "./hook/useGithubUsersSWR";

export function GithubUsersSWR() {
  const { users, error, loading, onRefresh } = useGithubUsersSWR();

  return (
    <div>
      <button onClick={onRefresh}>Refresh</button>
      {loading && <p>Loading...</p>}
      {error && <p>C'è un errore</p>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.login} </li>
          ))}
        </ul>
      )}
    </div>
  );
}
