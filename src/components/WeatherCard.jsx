import React from 'react'

import weatherService from '../services/weatherService'
import Header from './Header'

const WeatherCard = () => {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=40160f26301990c0f2ef906eca10c59f`
  weatherService.get().then(res=>console.log(res.data)).catch(err=>console.log(err.message))
  return (
    <div className='bg-blue-200 min-h-screen'>
    <Header />
    </div>
  )
}

export default WeatherCard