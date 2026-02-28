import sunny from "../assets/sunny-4.jpg";
import cloudy from "../assets/cloudy-1.avif";
import rainy from "../assets/rainy-6.jpg";
import snowy from "../assets/snowy-1.jpg";
import stormy from "../assets/stormy-3.jpg";
import foggy from "../assets/foggy-1.jpeg";

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