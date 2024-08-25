import { useState } from "react";

export function useCurrenLocation() {
  const [errorPosition, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPosition, setCurrentPosition] = useState({});

  function handleLocation() {
    setLoading(true);
    function success(pos) {
      setCurrentPosition(pos.coords);
      setLoading(false);
    }

    function error(err) {
      setError(err);
      setLoading(false);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }

  return {
    currentPosition: currentPosition,
    errorPosition: errorPosition,
    loadPosition: loading,
    onLocation: handleLocation,
  };
}
/*
Write the useCurrentLocation custom hook, 
that uses the browser's navigator.geolocation API to get the current location of the user through the getCurrentPosition builtin method. 
The hook should return the current location as well as a function to get the current location, and the error and loading states. 
The details on how to use this API can be found here: 
https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
*/
