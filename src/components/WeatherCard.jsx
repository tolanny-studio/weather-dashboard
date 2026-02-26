import React from "react";
import Header from "./Header";
import useWeather from "../hooks/useWeather";

const WeatherCard = () => {
  const {handleSearchSubmit,weatherService} = useWeather()
  return (
    <div className="bg-blue-200 min-h-screen">
      <Header handleSearchSubmit = {handleSearchSubmit}/>
    </div>
  );
};

export default WeatherCard;
