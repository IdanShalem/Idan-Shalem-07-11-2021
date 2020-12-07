import React from 'react'
import '../../styles/currentweather.css'

function CurrentWeather() {

    return(
        <div id='current-weather-container'>
            <img id='current-weather-icon' src='https://img2.pngio.com/sunny-weather-icon-at-getdrawingscom-free-sunny-weather-icon-sunny-and-cloudy-png-512_512.png' />
            <h2>Tel-Aviv</h2>
            <div id="weather-condition-container">
                <h2 className='weather-condition'>25&deg;C&ensp;</h2>
                <h4 className='weather-condition'>Sunny</h4>
            </div>
        </div>
    )
}

export default CurrentWeather