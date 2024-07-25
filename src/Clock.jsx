import { useEffect, useState } from "react";

export function Clock() {
  const [currentTime, setTime] = useState(new Date());
  const [intervalId, setIntervalId] = useState(0);

  function handleStopTime() {
    clearInterval(intervalId);
  }
  function handleStartTime() {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    setIntervalId(intervalId);
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    setIntervalId(intervalId);
  }, []);

  return (
    <div>
      <h3>The Current Time is:</h3>
      <h2>{currentTime.toLocaleTimeString()} </h2>
      <button onClick={handleStopTime}>Stop Time</button>
      <button onClick={handleStartTime}>Update Time</button>
    </div>
  );
}
/*
Ho provato a creare un bottone che fermi il timer sfruttando useState,
se non si clicca il bottone l'orologio continua a funzionare.
Ho provato anche a creare un bottone che facesse ripartire l'orologio.
A mio rischio e pericolo chiedo se è possibile darmi un feedback anche
su queste cose che ho aggiunto
*/
