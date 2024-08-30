import { useState } from "react";
import useSWR from "swr";

export function useGithubUsersSWR(username) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`
  );
  const [users, setUsers] = useState(username);
  const [err, setErr] = useState(null);
  const [load, setLoad] = useState(false);

  function handleRefresh() {
    mutate();
  }

  const handleManualFetchUsers = async () => {
    setLoad(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      if (!response.ok) {
        setErr(new Error());
      }

      setUsers(users);
    } catch (err) {
      console.log(e);
      setLoad(false);
      setErr(null);
    } finally {
      setLoad(false);
    }
  };

  return {
    users: data,
    error,
    loading: !data && !error,
    onRefresh: username !== null && handleRefresh,
    usersManual: users,
    errorManual: err,
    loadingManual: load,
    onManualFetch: username !== null && handleManualFetchUsers,
  };
}
