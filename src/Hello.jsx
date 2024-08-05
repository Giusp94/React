import { useContext } from "react";
import { Message } from "./Message";
import { LanguageContext } from "./LanguageContext";

export function HelloWorld() {
  const language = useContext(LanguageContext);

  return (
    <div>
      {language === "en" ? <h2>Hello, World!</h2> : <h2>Ciao, Mondo!</h2>}
      <Message lang={language} />
    </div>
  );
}
