import { useEffect, useState } from "react";
import weatherService from "../services/weatherService";
function useWeather() {
  
  useEffect(() => {
    weatherService.get().then((res) => console.log(res.data)).catch((err) => console.log(err.message));
  },[])


  const handleSearchSubmit = (FormData) => {
    const location = FormData.get("location");
    console.log(location);
  };

  return { handleSearchSubmit,weatherService };
}

export default useWeather;
