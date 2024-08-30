import useSWR from "swr";

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    {
      revalidateOnFocus: false,
    }
  );

  function fetchGithubUser() {
    mutate();
  }

  return {
    user: data,
    error: error,
    load: !data && !error,
    onFetchGithubUser: fetchGithubUser,
  };
}
/*
Create a custom hook called useGithubUser that receive a username, 
fetches the data of the corresponding Github user from the Github API and returns 
user, error, loading and the function to fetch the data
*/
