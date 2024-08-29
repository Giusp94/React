import { useContext } from "react";
import { Message } from "./Message";
import { LanguageContext } from "./LanguageContext";
import { Link, useNavigate } from "react-router-dom";

export function HelloWorld() {
  const language = useContext(LanguageContext);
  const navigate = useNavigate();

  function handleLoginButton() {
    navigate("/dsv");
  }

  function handleButtonWelcome() {
    navigate("/Paolo");
  }

  return (
    <div>
      {language === "en" ? <h2>Hello, World!</h2> : <h2>Ciao, Mondo!</h2>}
      <Message lang={language} />

      {/*Se si utilizza l'hook useNavigate non c'è bisogno di mettere riga 19, quindi il tag link */}
      <div>
        <button onClick={handleLoginButton}>Enter Login</button>
      </div>
      <button type="button" onClick={handleButtonWelcome}>
        Go to Welcome Page
      </button>
    </div>
  );
}
