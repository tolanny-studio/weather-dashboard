import axios from "axios";


export default axios.create({
  baseURL:`https://api.openweathermap.org/data/2.5`,
  params:{
    appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY
  }
})