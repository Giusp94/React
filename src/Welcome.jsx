import { useNavigate, useParams } from "react-router-dom";

export function Welcome() {
  const { name = "All of People" } = useParams();

  return (
    <div>
      <p>Welcome, {name}!</p>
    </div>
  );
}
