import { useEffect, useState } from "react";
import weatherService from "../services/weatherService";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const cities = ["New York", "Oyo", "London", "Tokyo", "Paris"];

    const fetchWeather = async () => {
      const selectedCities = cities.sort(() => 0.5 - Math.random()).slice(0, 4); // shuffle the city

      const requests = selectedCities.map((city, index) =>
        weatherService
          .get(`/weather?q=${city}&units=metric`)
          .then((res) => ({
            id: index + 1,
            temperature: res.data?.main?.temp,
            city: res.data?.name,
            country: res.data?.sys?.country,
          }))
      );

      const results = await Promise.all(requests);
      setData(results);
    };

    fetchWeather();
  }, []);

  return (
    <div className="flex-1 overflow-y-auto grid grid-cols-2 gap-5 justify-around p-5 text-[#0A111E] md:flex md:py-10">
      {data.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded flex flex-col items-center md:w-40">
          <h2 className="font-semibold text-3xl">{item.temperature.toFixed(1)}°</h2>
          <p>{item.city}, {item.country}</p>
        </div>
      ))}
    </div>
  );
};

export default Main;
