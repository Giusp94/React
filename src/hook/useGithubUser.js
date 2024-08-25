import { useEffect, useState } from "react";

export function useGithubUser(username) {
  const [user, setUser] = useState(username);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser(username) {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userJson = await response.json();
      if (!response.ok) {
        setError(new Error());
      }
      setUser(userJson);
      console.log(userJson);
    } catch (error) {
      console.error(error);
      setError(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  return {
    user: user,
    error: error,
    load: loading,
    onFetchGithubUser: fetchGithubUser,
  };
}
/*
Create a custom hook called useGithubUser that receive a username, 
fetches the data of the corresponding Github user from the Github API and returns 
user, error, loading and the function to fetch the data
*/
