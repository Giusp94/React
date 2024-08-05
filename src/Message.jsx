export function Message({ lang }) {
  return (
    <p>{lang === "en" ? "What a beautiful day!" : "Che bella giornata!"}</p>
  );
}
