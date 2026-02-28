import { FaLocationDot } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FaTachometerAlt, FaWind } from "react-icons/fa";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { getWeatherBackground } from "../utils/weatherBackgrounds";

const formatDate = (date) => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).formatToParts(date);

  const weekday = parts.find((p) => p.type === "weekday")?.value;
  const day = parts.find((p) => p.type === "day")?.value;
  const month = parts.find((p) => p.type === "month")?.value;

  return `${weekday}, ${day} ${month}`;
};

const Header = ({
  name,
  country,
  temperature,
  humidity,
  pressure,
  wind,
  sunrise,
  sunset,
  main,
  description,
}) => {
  // ⭐ get background image from weather type
  const backgroundImage = getWeatherBackground(main);

  return (
    <div className="relative flex items-center flex-col flex-4 rounded-b-2xl p-2 overflow-hidden text-shadow-lg md:py-6">

      {/* ⭐ Dynamic Weather Background */}
      <img
        src={backgroundImage}
        alt={main}
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />

      {/* Optional gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(-45deg,#381A7D_0%,#5F2CDD_50%,#6D3CC3_100%)] opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">

        {name && (
          <div className="flex items-center text-lg font-semibold text-[#0A111E]">
            <FaLocationDot />
            <p>{name},{country}</p>
          </div>
        )}

        <div className="flex mt-15 md:">
          <h1 className="font-bold text-8xl">
            {Number(temperature).toFixed(1)}
          </h1>
          <sup className="text-4xl font-semibold text-amber-100 mt-4">°</sup>
        </div>

        <p className="font-medium text-white md:text-lg">{description}</p>
        <p className="text-xs font-light text-white md:font-normal">
          {formatDate(new Date())}
        </p>

        <div className="border w-[70%] my-6 text-blue-200"></div>

        <div className="flex justify-center text-xs font-light w-full gap-3 text-white md:text-sm font-normal">
          <div className="flex items-center gap-1">
            <WiHumidity />
            <span>{Number(humidity)}%</span>
          </div>

          <div className="flex items-center gap-1">
            <FaTachometerAlt />
            <span>{(Number(pressure) * 0.750062).toFixed(1)}mmHg</span>
          </div>

          <div className="flex items-center gap-1">
            <FaWind />
            <span>{Number(wind).toFixed(1)}m/s</span>
          </div>
        </div>

        <div className="border w-[70%] my-6 text-blue-200"></div>

        <div className="flex justify-center text-xs font-light w-full gap-3 text-white md:text-sm font-normal">
          <div className="flex items-center gap-1">
            <FiSunrise />
            <span>{sunrise}</span>
          </div>

          <div className="flex items-center gap-1">
            <FiSunset />
            <span>{sunset}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;