import { useEffect, useState } from "react";
import weatherService from "../services/weatherService";
import { CanceledError } from "axios";

function useWeather() {
  const [isLocation, setIsLocation] = useState("");

  function getLocation(location) {
    setIsLocation(location);
  }

  const controller = new AbortController();

  useEffect(() => {
    weatherService
      .get(`/weather?q=${isLocation}&units=metric`, { signal: controller.signal })
      .then((res) => console.log(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        console.log(err.message);
      });
    return () => controller.abort();
  }, [isLocation]);

  return { getLocation, isLocation };
}

export default useWeather;
