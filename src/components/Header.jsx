import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div>
      <form className="flex justify-center items-center bg-blue-50 h-10 py-6 ">
        <div className="flex justify-center items-center bg-blue-400 rounded-full shadow-md">
          <input
            className="rounded-tl-full rounded-bl-full focus:outline-0 p-0.5 pl-4 text-white text-xs"
            type="text"
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
