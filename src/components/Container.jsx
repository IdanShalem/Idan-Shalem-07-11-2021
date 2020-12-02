import React from 'react'
import '../styles/container.css'
import CurrentWeather from './home/CurrentWeather'
import Search from './home/Search'

function Container() {

    return (
        <div id='container' className='sunny-day'>
            <Search />
            <CurrentWeather />
        </div>
    )
}

export default Container