import { FaSearch } from "react-icons/fa";

const Footer = ({ getLocation }) => {
  const handleSearchSubmit = (FormData) => {
    const location = FormData.get("location");
    getLocation(location);
    // console.log(location);
  };
  return (
    <div className=" flex justify-center items-center flex-1 bg-[linear-gradient(45deg,#381A7D_0%,#5F2CDD_50%,#6D3CC3_100%)] rounded-t-2xl">
      <form
        action={handleSearchSubmit}
        className="flex"
      >
        <input
          className="rounded-tl-full rounded-bl-full focus:outline-0 p-0.5 pl-4 text-white text-xs bg-[#0A111E]"
          type="text"
          name="location"
        />
        <button
          type="submit"
          className="text-2xl text-[#0A111E] p-0.5 bg-white rounded-tr-full rounded-br-full"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Footer;
