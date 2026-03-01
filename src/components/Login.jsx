import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AppLogo from "../assets/rainy-2.svg";
import Form from "./Form";
import Input from "./Input";

const Login = () => {
  return (
    <div className="bg-[linear-gradient(45deg,#381A7D_0%,#5F2CDD_50%,#6D3CC3_100%)] min-h-screen w-full p-10 flex flex-col items-center gap-5 md:p-5">
      <div></div>
      <img src={AppLogo} alt="" className="object-cover md:h-70" />

      <h1 className="text-center">Weather Dashboard</h1>

      <form action="" className="flex flex-col items-center gap-2 w-full">
        <input
          placeholder="Enter location"
          className="bg-white p-1 focus:outline-0 rounded md:w-[50%]"
        />

        <Link to="/weathercard">
          <button className="flex  items-center justify-center w-[200px] gap-1 bg-blue-100 px-6 py-1 rounded-full">
            <span className="">Enter</span>{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
