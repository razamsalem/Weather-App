import { useState } from 'react'

import searchIcon from '../assets/search.png'
import clearIcon from '../assets/clear.png'
import cloudIcon from '../assets/cloud.png'
import drizzleIcon from '../assets/drizzle.png'
import rainIcon from '../assets/rain.png'
import snowIcon from '../assets/snow.png'
import windIcon from '../assets/wind.png'
import humidityIcon from '../assets/humidity.png'

export function WeatherIndex() {
    const WEATHER_KEY = 'e77e9c491b7e6b5a86130dfdda7e3e25'
    const [weatherIcon, setWeatherIcon] = useState(cloudIcon)

    async function search() {
        const element = document.getElementsByClassName("city-input")
        if (element[0].value === '') return 0
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${WEATHER_KEY}`

        let res = await fetch(url)
        let data = await res.json()

        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-rate")
        const temp = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")

        humidity[0].innerHTML = data.main.humidity + " %"
        wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h"
        temp[0].innerHTML = Math.floor(data.main.temp) + "°C"
        location[0].innerHTML = data.name

        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") setWeatherIcon(clearIcon)
        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") setWeatherIcon(cloudIcon)
        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n" || data.weather[0].icon === "04d" || data.weather[0].icon === "04n") setWeatherIcon(drizzleIcon)
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n" || data.weather[0].icon === "10d" || data.weather[0].icon === "10n") setWeatherIcon(rainIcon)
        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") setWeatherIcon(snowIcon)
        else setWeatherIcon(clearIcon)
    }

    return (
        <div className='weather-container'>
            <div className="top-bar">
                <input
                    type="text"
                    className="city-input"
                    placeholder='Search'
                />

                <div
                    className="search-icon"
                    onClick={() => search()}
                >
                    <img src={searchIcon} alt="Search icon" />
                </div>
            </div>

            <div className="weather-img">
                <img src={weatherIcon} alt="Weather image" />
            </div>
            <div className="weather-temp">
                24c
            </div>
            <div className="weather-location">
                London
            </div>
            <div className="data-container">
                <div className="element">
                    <img src={humidityIcon} alt="" className="Humidity icon" />
                    <div className="data">
                        <div className="humidity-percent">
                            64%
                        </div>
                        <div className="text">
                            Humidity
                        </div>
                    </div>
                </div>
                <div className="element">
                    <img src={windIcon} alt="" className="Wind icon" />
                    <div className="data">
                        <div className="wind-rate">
                            18 km/h
                        </div>
                        <div className="text">
                            Wind Speed
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}