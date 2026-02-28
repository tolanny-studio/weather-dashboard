import { useEffect, useState } from "react";
import weatherService from "../services/weatherService";
import { CanceledError } from "axios";

function useWeather() {
  const [isLocation, setIsLocation] = useState("");
  const [response, setResponse] = useState({});
const [error, setError] = useState("");

  const name = response?.name;
  const { country = "", sunrise = 0, sunset = 0 } = response?.sys || {};
  const {
    temp: temperature = 0,
    humidity = 0,
    pressure = 0,
  } = response?.main || {};
  const { icon, main, description } = response?.weather?.[0] || {};
  const { speed: wind = 0 } = response?.wind || {};

  function getLocation(location) {
    setIsLocation(location);
  }

const formatTime = (timestamp) => {
  if (!timestamp) return "";
  return new Date(timestamp * 1000).toLocaleTimeString();
};

  const sunRise = formatTime(sunrise);
  const sunSet = formatTime(sunset);

  useEffect(() => {
    if (!isLocation) return; // Don't fetch if location is empty

    const controller = new AbortController();

    weatherService
      .get(`/weather?q=${isLocation}&units=metric`, {
        signal: controller.signal,
      })
      .then((res) => {
        setResponse(res.data);
        console.log(res.data);

        setError(null);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        console.error(err.message);
      });

    return () => controller.abort();
  }, [isLocation]);

  return {
    getLocation,
    isLocation,
    name,
    country,
    temperature,
    humidity,
    pressure,
    icon,
    main,
    description,
    wind,
    sunRise,
    sunSet,
    error,
  };
}

export default useWeather;

// const weatherThemes = {
//   Clear: "sunny",
//   Clouds: "cloudy",
//   Rain: "rainy",
//   Snow: "snowy",
//   Thunderstorm: "stormy",
//   Drizzle: "rainy",
//   Atmosphere: "foggy"
// };
