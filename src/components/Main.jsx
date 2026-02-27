import { IoLocationOutline } from "react-icons/io5";
import { MdCloudySnowing } from "react-icons/md";

const Main = () => {
  return (
    <div className="flex justify-between bg-blue-50 w-[80%] mx-auto p-5 rounded-2xl gap-2">
      <div className=" flex items-start flex-col ">
        <div className="flex">
          <span>
            <IoLocationOutline />
          </span>
          <p className="text-xs">Current Location</p>
        </div>
        <div className=" flex items-baseline-last">
          <h1 className="font-bold text-5xl">
            10 <sup className="ml-[-8px]">o</sup>
          </h1>
          <p className="text-3xl">c</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-8xl text-blue-300">
          <MdCloudySnowing />
        </span>
        <p>
          Cloudy
        </p>
      </div>
    </div>
  );
};

export default Main;
