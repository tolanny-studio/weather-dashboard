import { FaSearch } from "react-icons/fa";

const Footer = ({ getLocation }) => {
  const handleSearchSubmit = (FormData) => {
    const location = FormData.get("location");
    getLocation(location);
    // console.log(location);
  };
  return (
    <div className="flex shadow-[0_-10px_30px_rgba(0,0,0,0.3)] bg-[linear-gradient(45deg,#381A7D_0%,#5F2CDD_50%,#6D3CC3_100%)] rounded-t-2xl py-5">
      <form
        action={handleSearchSubmit}
        
        className=" flex w-full justify-center"
      >
        <input
          className="rounded-tl-full rounded-bl-full focus:outline-0 p-0.5 pl-4 text-white text-xs bg-[#0A111E] w-[50%]"
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
