import { useEffect, useState } from "react";
import weatherService from "../services/weatherService";
import { cities } from "../cities";

const Main = ({ getLocation }) => {
  const [data, setData] = useState([]);

  const handleClick = (city) => {
    getLocation(city);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const selectedCities = cities
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);

        const requests = selectedCities.map((city, index) =>
          weatherService
            .get(`/weather?q=${city}&units=metric`)
            .then((res) => ({
              id: index + 1,
              temperature: res.data?.main?.temp,
              city: res.data?.name,
              country: res.data?.sys?.country,
              main: res.data?.weather?.[0]?.main,
            }))
            .catch(() => null),
        );

        const results = await Promise.all(requests);
        setData(results.filter(Boolean));
      } catch (err) {
        console.log(err);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="w-full flex-2 grid grid-cols-2 gap-5 p-5 box-border text-[#0A111E] md:flex justify-between md:py-10 lg:justify-around lg:py-20">
      {data.map((item) => (
        <div
          onClick={() => handleClick(item.city)}
          key={item.id}
          className="cursor-pointer bg-white p-4 rounded flex flex-col justify-center items-center md:w-40 "
        >
          <h2 className="font-semibold text-3xl">
            {item.temperature ? item.temperature.toFixed(1) : "--"}°
          </h2>
          <p className="text-rose-500 font-semibold lg">{item.main}</p>
          <p>
            {item.city}, {item.country}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Main;
