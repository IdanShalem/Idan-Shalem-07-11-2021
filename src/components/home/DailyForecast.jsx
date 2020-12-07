import React from 'react'
import '../../styles/dailyforecast.css'

function DailyForecast() {

    return (
        <div id="forecast-container">
            <div className="daily-weather">
                <img className="forecast-icon" src='https://img2.pngio.com/sunny-weather-icon-at-getdrawingscom-free-sunny-weather-icon-sunny-and-cloudy-png-512_512.png'/>
                <p>Tuesday</p>
                <p>25&deg;C / 17&deg;C</p>
            </div>
            <div className="daily-weather">
                <img className="forecast-icon" src='https://img2.pngio.com/sunny-weather-icon-at-getdrawingscom-free-sunny-weather-icon-sunny-and-cloudy-png-512_512.png'/>
                <p>Wednesday</p>
                <p>25&deg;C / 17&deg;C</p>
            </div>
            <div className="daily-weather">
                <img className="forecast-icon" src='https://img2.pngio.com/sunny-weather-icon-at-getdrawingscom-free-sunny-weather-icon-sunny-and-cloudy-png-512_512.png'/>
                <p>Thursday</p>
                <p>25&deg;C / 17&deg;C</p>
            </div>
            <div className="daily-weather">
                <img className="forecast-icon" src='https://img2.pngio.com/sunny-weather-icon-at-getdrawingscom-free-sunny-weather-icon-sunny-and-cloudy-png-512_512.png'/>
                <p>Friday</p>
                <p>25&deg;C / 17&deg;C</p>
            </div>
            <div className="daily-weather">
                <img className="forecast-icon" src='https://img2.pngio.com/sunny-weather-icon-at-getdrawingscom-free-sunny-weather-icon-sunny-and-cloudy-png-512_512.png'/>
                <p>Saturday</p>
                <p>25&deg;C / 17&deg;C</p>
            </div>
        </div>
    )

}

export default DailyForecast