import { CiSearch } from "react-icons/ci";

const Footer = ({getLocation}) => {
    const handleSearchSubmit = (FormData) => {
    const location = FormData.get("location");
    getLocation(location);
    // console.log(location);
  };
  return (
          <form action={handleSearchSubmit} className="">
        <div className="flex justify-center items-center bg-blue-300 rounded-full shadow-md pl-1">
          <input
            className="rounded-tl-full rounded-bl-full focus:outline-0 p-0.5 pl-4 text-white text-xs"
            type="text"
            name="location"
          />
          <button
            type="submit"
            className="text-2xl text-blue-500 p-0.5 bg-white rounded-tr-full rounded-br-full"
          >
            <CiSearch />
          </button>
        </div>
      </form>
  )
}

export default Footer