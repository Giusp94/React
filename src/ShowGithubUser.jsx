import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ShowGithubUser() {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [error, setError] = useState(0);

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${id}`);
      const userJson = await response.json();

      if (!response.ok) {
        setError(new Error(0));
      }

      console.log(response);
      console.log(userJson);
      console.log("sono in errore", error);

      setUser(userJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchUser();
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {error ? (
        <h1>User not found</h1>
      ) : (
        <p>
          ID: {user.id}
          <br />
          Name: {user.name}
          <br />
          Avatar:
          <br />
          <img src={`${user.avatar_url}`} alt="" />
        </p>
      )}
    </div>
  );
}
