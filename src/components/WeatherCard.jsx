import React from "react";
import Header from "./Header";
import useWeather from "../hooks/useWeather";
import Main from "./Main";
import Footer from "./Footer";

const WeatherCard = () => {
  const {
    getLocation,
    name,
    country,
    temperature,
    humidity,
    pressure,
    wind,
    sunRise,
    sunSet,
  } = useWeather();
  return (
    <div className="bg-[#0A111E] min-h-screen flex flex-col">
      <Header
        name={name}
        country={country}
        temperature={temperature}
        humidity={humidity}
        pressure={pressure}
        wind={wind}
        sunrise={sunRise}
        sunset={sunSet}
      />
      <Main />
      <Footer getLocation={getLocation} />
    </div>
  );
};

export default WeatherCard;
