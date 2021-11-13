import React from 'react'
import '../../styles/dailyforecast.css'
import { inject, observer } from 'mobx-react'
import DailyWeather from './DailyWeather'

const DailyForecast = inject('currentCity')(observer((props) => {

    const { currentCity } = props

    return (
        <div id="forecast-container">
            {currentCity.dailyForecast.map(d => <DailyWeather day={d} key={d.dayName}/>)}
        </div>
    )

}))

export default DailyForecast