import { useState } from "react";
import { HelloWorld } from "./Hello";
import { LanguageContext } from "./LanguageContext";

export function App() {
  const [lang, setLanguage] = useState("en");

  function handleChangeLanguage(event) {
    setLanguage(event.target.value);
  }

  return (
    <LanguageContext.Provider value={lang}>
      <h1>My Awesome Application</h1>
      <hr />
      {lang === "en" ? (
        <h4>Select Language: </h4>
      ) : (
        <h4>Seleziona la lingua: </h4>
      )}
      <select name="language" id="language" onChange={handleChangeLanguage}>
        <option value="en">EN</option>
        <option value="it">IT</option>
      </select>
      <HelloWorld />
    </LanguageContext.Provider>
  );
}
