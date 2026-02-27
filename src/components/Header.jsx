
import { SiAccuweather } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {


  return (
    <div className="flex flex-col justify-center items-center bg-blue-50 h-auto py-2 gap-1.5 shadow-2xs ">
      <div className="flex justify-center items-center text-3xl">
        <span className=" text-yellow-400">
          <SiAccuweather />
        </span>
      </div>

    </div>
  );
};

export default Header;
