import searchIcon from '../assets/search.png'
import clearIcon from '../assets/clear.png'
import cloudIcon from '../assets/cloud.png'
import drizzleIcon from '../assets/drizzle.png'
import rainIcon from '../assets/rain.png'
import snowIcon from '../assets/snow.png'
import windIcon from '../assets/wind.png'
import humidityIcon from '../assets/humidity.png'

export function WeatherIndex() {

    return (
        <div className='weather-container'>
            <div className="top-bar">
                <input
                    type="text"
                    className="city-input"
                    placeholder='Search'
                />

                <div className="search-icon">
                    <img src={searchIcon} alt="Search icon" />
                </div>
            </div>
        </div>
    )
}