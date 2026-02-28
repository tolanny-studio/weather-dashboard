import { FaLocationDot } from "react-icons/fa6";
import WeatherType from "../assets/rainy-2.svg";
import { WiHumidity } from "react-icons/wi";
import { FaTachometerAlt } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";

const Header = () => {
  return (
    <div className="bg-[linear-gradient(-45deg,#381A7D_0%,#5F2CDD_50%,#6D3CC3_100%)] flex items-center flex-col flex-4 rounded-b-2xl p-2 ">
      <div className="flex items-center text-lg font-semibold text-[#0A111E]">
        <span>
          <FaLocationDot />
        </span>
        <p>Offa,NG</p>
      </div>
      <img src={WeatherType} className="absolute top-0 left-0" />

      <div className="flex mt-25">
        <h1 className="font-bold text-8xl">35</h1>
        <sup className="text-xl font-semibold text-white mt-4">o</sup>
      </div>
      <p className="font-medium text-white">Expect high rain today</p>
      <p className=" text-xs font-extralight text-white">Friday, 5 September</p>

      <div className="border w-[70%] my-6 text-blue-200"></div>

      

        <div className="flex justify-center text-xs font-light w-full gap-3 text-white ">
          <div className="flex items-center gap-1 ">
            <span>
              <WiHumidity />
            </span>
            <span>03%</span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <FaTachometerAlt />
            </span>
            <span>3mm/Hg</span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <FaWind />
            </span>
            <span>3mm/Hg</span>
          </div>
        </div>


        <div className="border w-[70%] my-6 text-blue-200"></div>

        <div className="flex w-[70%] justify-center text-xs font-light w-full gap-3 text-white">
          <div className="flex items-center gap-1">
            <span>
              <FiSunrise />
            </span>
            <span>6hrs</span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <FiSunset />
            </span>
            <span>6hrs</span>
          </div>
        </div>
      
    </div>
  );
};

export default Header;
