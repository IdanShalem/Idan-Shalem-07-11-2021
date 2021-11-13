import { inject, observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import '../../styles/homePage.css'
import CurrentWeather from './CurrentWeather'
import DailyForecast from './DailyForecast'
import Search from './Search'

const HomePage = inject('currentCity')(observer((props) => {

    const { currentCity } = props

    const [cityLoaded, setCityLoaded] = useState(false)

    useEffect(async () => {
        if(!currentCity.cityId) await currentCity.loadCity()
        setCityLoaded(true)
    }, [])

    return (
        <div id="home-page-container">
            {
                cityLoaded 
                    ?
                        [
                            <Search />,
                            <CurrentWeather />,
                            <DailyForecast />
                        ]
                    :   null
            }
        </div>
        
    )
}))

export default HomePage