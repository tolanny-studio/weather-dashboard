import React from "react";
import Header from "./Header";
import useWeather from "../hooks/useWeather";
import Main from "./Main";
import Footer from "./Footer";

const WeatherCard = () => {
  const { getLocation } = useWeather();
  return (
    <div className="bg-blue-200 min-h-screen flex flex-col">
      <div className="flex-4">
        <Header />
        <Main />
      </div>

      <Footer getLocation={getLocation} />
    </div>
  );
};

export default WeatherCard;
