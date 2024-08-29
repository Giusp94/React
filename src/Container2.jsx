export function Container({ title, children }) {
  return (
    <div>
      <div className="title">{title}</div>
      <div className="main">{children}</div>
    </div>
  );
}
