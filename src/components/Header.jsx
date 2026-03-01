import {useEffect} from "react"
import { FaLocationDot } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FaTachometerAlt, FaWind } from "react-icons/fa";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { getWeatherBackground } from "../utils/weatherBackgrounds.js";
import randomCity from "../randomCity.js"
import { formatDate } from "../formatDate.js";




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
  const backgroundImage = getWeatherBackground(main);

  useEffect(() => {
    randomCity()
  
    
  }, [])
  

  return (
    <div className="relative flex items-center flex-col flex-4 rounded-b-2xl p-2 py-5 overflow-hidden text-shadow-lg md:py-6">
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
          <div className="flex items-center text-lg font-semibold text-rose-500">
            <FaLocationDot />
            <p>
              {name},{country}
            </p>
          </div>
        )}

        <div className="flex mt-10 md:mb-4">
          <h1 className="font-bold text-8xl">
            {Number(temperature).toFixed(1)}
          </h1>
          <sup className="text-4xl font-semibold text-amber-100 mt-4">°</sup>
        </div>

        <p className="font-medium text-white md:text-lg md:mb-4 lg:text-2xl">
          {String(description).toUpperCase()}
        </p>
        <p className="text-xs font-light text-white md:font-normal lg:font-medium">
          {formatDate(new Date())}
        </p>

        <div className="divider"></div>

        <div className="flex justify-center text-xs font-light w-full gap-3 text-white md:text-sm lg:gap-10">
          <div className="flex items-center gap-1">
            <span className="icon">
              <WiHumidity />
            </span>
            <span className="icon-parameter">
              {Number(humidity)}%
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="icon">
              <FaTachometerAlt />
            </span>
            <span className="icon-parameter">
              {(Number(pressure) * 0.750062).toFixed(1)}mmHg
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="icon">
              <FaWind />
            </span>

            <span className="icon-parameter">
              {Number(wind).toFixed(1)}m/s
            </span>
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex justify-center text-xs font-light w-full gap-3 text-white md:text-sm lg:gap-10">
          <div className="flex items-center gap-1">
            <span className="icon">
              <FiSunrise />
            </span>
            <span className="icon-parameter">{sunrise}</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="icon">
              <FiSunset />
            </span>
            <span className="icon-parameter">{sunset}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
