import React from 'react'
import '../styles/container.css'
import CurrentWeather from './home/CurrentWeather'
import DailyForecast from './home/DailyForecast'
import Search from './home/Search'

function Container() {

    return (
        <div id='container' className='sunny-night'>
            <Search />
            <CurrentWeather />
            <DailyForecast />
        </div>
    )
}

export default Container