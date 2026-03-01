import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AppLogo from "../assets/rainy-2.svg";

const Login = ({ getLocation }) => {
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault(); 

    const formData = new FormData(e.target);
    const location = formData.get("location");

    if(!location){
      alert("Enter a valid location to proceed !")
      return
    }

    getLocation(location); 
    navigate("/weathercard"); 
  };

  return (
    <div className="bg-[linear-gradient(45deg,#381A7D_0%,#5F2CDD_50%,#6D3CC3_100%)] min-h-screen w-full p-10 flex flex-col items-center gap-5">
      <img src={AppLogo} alt="" className="object-cover md:h-70" />

      <h1 className="text-center">Weather Dashboard</h1>

      <form
        onSubmit={handleSearchSubmit}
        className="flex flex-col items-center gap-2 w-full"
      >
        <input
          placeholder="Enter location"
          className="bg-white p-1 rounded md:w-[50%] focus:outline-0"
          name="location"
        />

        <button
          type="submit"
          className="flex items-center justify-center w-45 gap-1 bg-blue-100 px-6 py-1 rounded-full"
        >
          Enter <FaArrowRight />
        </button>
      </form>
    </div>
  );
};

export default Login;