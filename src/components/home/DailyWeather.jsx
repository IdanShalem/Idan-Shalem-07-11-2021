import { inject, observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import '../../styles/dailyforecast.css'

const DailyWeather = inject('inputs')(observer((props) => {

    const { day, inputs } = props

    const [icon, setIcon] = useState(null)

    useEffect(() => {
        loadIcon(day.icon)
    }, [])

    const loadIcon = (id) => {
        import(`../../Images/weatherIcons/${id}.png`)
            .then(image => {
                setIcon(image.default)
            })
    }

    return (
        <div className="daily-weather">
            <p className='forecast-day'>{day.dayName}</p>
            {icon ? <img className="forecast-icon" src={icon} alt="weather icon"/> : <span></span>}
            <p className='forecast-deg'>{day.temp[inputs.units]}&deg;{inputs.units === 'celsius' ? 'C' : 'F'}</p>
        </div>
    )
}))

export default DailyWeather