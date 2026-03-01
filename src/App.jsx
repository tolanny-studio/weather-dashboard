import { Routes, Route } from "react-router-dom";
import WeatherCard from "./components/WeatherCard";
import Login from "./components/Login";
import useWeather from "./hooks/useWeather";

function App() {
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
    icon,
    main,
    description,
  } = useWeather();
  return (
    <Routes>
      <Route
        path="/weathercard"
        element={
          <WeatherCard
            name={name}
            country={country}
            temperature={temperature}
            humidity={humidity}
            pressure={pressure}
            wind={wind}
            sunrise={sunRise}
            sunset={sunSet}
            icon={icon}
            main={main}
            description={description}
            getLocation={getLocation}
          />
        }
      />
      <Route path="/" element={<Login getLocation={getLocation} />} />
    </Routes>
  );
}

export default App;
