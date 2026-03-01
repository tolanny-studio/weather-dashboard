import { FaSearch } from "react-icons/fa";
import Input from "./Input";

const Form = ({ getLocation }) => {
  const handleSearchSubmit = (formData) => {
    const location = formData.get("location");
    getLocation(location);
  };

  return (
    <form
      action={handleSearchSubmit}
      className="flex w-full "
    >
      <Input />

      <button
        type="submit"
        className="text-2xl text-[#0A111E] p-2 bg-white"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default Form;