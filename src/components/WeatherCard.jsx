import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const WeatherCard = ({
  getLocation,
  name,
  country,
  temperature,
  humidity,
  pressure,
  wind,
  sunrise,
  sunset,
  icon,
  main,
  description,
}) => {
  return (
    <div className="bg-[#0A111E] min-h-screen flex flex-col relative">
      <Header
        name={name}
        country={country}
        temperature={temperature}
        humidity={humidity}
        pressure={pressure}
        wind={wind}
        sunrise={sunrise}
        sunset={sunset}
        icon={icon}
        main={main}
        description={description}
      />
      <Main getLocation={getLocation} />
      <Footer getLocation={getLocation} />
    </div>
  );
};

export default WeatherCard;
