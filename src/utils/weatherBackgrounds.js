import sunny from "../assets/sunny-4.jpg";
import cloudy from "../assets/cloudy-1.avif";
import rainy from "../assets/rainy-2.svg";
import snowy from "../assets/snowy.svg";
import stormy from "../assets/stormy.svg";
import foggy from "../assets/foggy.svg";

export const weatherBackgrounds = {
  Clear: sunny,
  Clouds: cloudy,
  Rain: rainy,
  Snow: snowy,
  Thunderstorm: stormy,
  Drizzle: rainy,
  Mist: foggy,
  Smoke: foggy,
  Haze: foggy,
  Fog: foggy,
};

export const getWeatherBackground = (main) =>
  weatherBackgrounds[main] || sunny;