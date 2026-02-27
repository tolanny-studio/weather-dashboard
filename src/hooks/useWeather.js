import { useEffect, useState } from "react";
import weatherService from "../services/weatherService";

function useWeather() {
  const [isLocation, setIsLocation] = useState("");

  function getLocation(location) {
    setIsLocation(location);
  }

  useEffect(() => {
    weatherService
      .get(`/weather?q=${isLocation}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  }, [isLocation]);

  return { getLocation, isLocation };
}

export default useWeather;