export function Colors({ colors }) {
  return (
    <ul>
      {colors.map((color) => (
        <li key={color.id}>{color.name}</li>
      ))}
    </ul>
  );
}
