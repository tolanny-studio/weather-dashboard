import { CiSearch } from "react-icons/ci";
import { SiAccuweather } from "react-icons/si";

const Header = ({handleSearchSubmit}) => {

  return (
    <div className="flex flex-col justify-center items-center bg-blue-50 h-auto py-2 gap-1.5 shadow-2xs ">
      <div className="flex justify-center items-center text-3xl">
        <span className=" text-yellow-400">
          <SiAccuweather />
        </span>
      </div>
      <form action={handleSearchSubmit} className="">
        <div className="flex justify-center items-center bg-blue-300 rounded-full shadow-md">
          <input
            className="rounded-tl-full rounded-bl-full focus:outline-0 p-0.5 pl-4 text-white text-xs"
            type="text" name="location"
          />
          <span className="text-2xl text-blue-500 p-0.5 bg-white rounded-tr-full rounded-br-full">
            <CiSearch />
          </span>
        </div>
      </form>
    </div>
  );
};

export default Header;
