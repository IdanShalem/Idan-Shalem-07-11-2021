import { inject, observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import '../../styles/homePage.css'
import CurrentWeather from './CurrentWeather'
import DailyForecast from './DailyForecast'
import Loader from './Loader'
import Search from './Search'

const HomePage = inject('currentCity')(observer((props) => {

    const { currentCity } = props

    useEffect(async () => {
        if(!currentCity.cityId) await currentCity.loadCity()
    }, [])

    return (
        <div id="home-page-container">
            <Search />
            {
                currentCity.cityLoaded 
                    ?
                        [
                            <CurrentWeather />,
                            <DailyForecast />
                        ]
                    :   <Loader />
            }
        </div>
        
    )
}))

export default HomePage