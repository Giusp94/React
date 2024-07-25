export function MouseClicker() {
  function handleOneButtonClick(event) {
    console.log(event.target.name);
  }
  function handleTwoButtonClick(event) {
    event.target.name === "two"
      ? console.log(event.target.name)
      : console.log(event.target.src);
  }

  return (
    <div>
      <button name="one" onClick={handleOneButtonClick}>
        Click me
      </button>
      <button name="two" onClick={handleTwoButtonClick}>
        <img src="percorso" width={25} height={25} />
      </button>
    </div>
  );
}
/*
How can you prevent the name attribute of the button from being printed to the console when the image is clicked?
Mettendo una condizione di controllo all'interno del gestore eventi, come fatto per la funzione handleTwoButton
*/
