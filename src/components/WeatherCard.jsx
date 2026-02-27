import React from "react";
import Header from "./Header";
import useWeather from "../hooks/useWeather";
import Main from "./Main";

const WeatherCard = () => {
  const {getLocation} = useWeather()
  return (
    <div className="bg-blue-200 min-h-screen">
      <Header getLocation={getLocation}/>
      <Main />
    </div>
  );
};

export default WeatherCard;
