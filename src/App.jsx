import { Container } from "./Container";
import { TodoList } from "./TodoList";

export function App() {
  return (
    <Container title={<h1>My Awesome Application</h1>}>
      <hr />
      <TodoList />
    </Container>
  );
}
