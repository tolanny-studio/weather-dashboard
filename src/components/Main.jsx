
import { data } from "../randomCity.js";

const Main = () => {
  return (
    <div className="flex flex-2 justify-around py-4 text-[#0A111E]">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col w-28 items-center mx-auto bg-white rounded-sm"
          >
            <div className="flex">
              <h2 className="font-bold text-6xl">{item.temperature}</h2>
              <sup className="text-xl font-semibold text-[#0A111E] mt-2">o</sup>
            </div>
            <p className="text-xs">{item.date}</p>
            <div>
              <span>{item.city}</span>,
              <span>{item.country}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
