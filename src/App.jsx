import {Routes, Route} from "react-router-dom"
import WeatherCard from "./components/WeatherCard";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/weathercard" element={<WeatherCard />} />
      <Route path="/" element={<Login />}/>
    </Routes>
  );
}

export default App;
