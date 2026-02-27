import React from "react";
import Header from "./Header";
import useWeather from "../hooks/useWeather";
import Main from "./Main";
import Footer from "./Footer";

const WeatherCard = () => {
  const { getLocation } = useWeather();
  return (
    <div className="bg-[#0A111E] min-h-screen flex flex-col">
      <div className="flex-4 bg-[linear-gradient(-45deg,#ff0000_0%,#5F2CDD_50%,#6D3CC3f_100%)]">
        <Header />
        <Main />
      </div>

      <Footer getLocation={getLocation} />
    </div>
  );
};

export default WeatherCard;
