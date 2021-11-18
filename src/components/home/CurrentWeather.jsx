import React, { useEffect, useState } from 'react'
import '../../styles/currentweather.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { inject, observer } from 'mobx-react'

const CurrentWeather = inject('currentCity', 'inputs')(observer((props) => {

    const { currentCity, inputs } = props
    const [icon, setIcon] = useState(null)
    
    useEffect(() => {
        if(currentCity.icon) loadIcon(currentCity.icon)
    }, [currentCity.icon])

    const loadIcon = (id) => {
        import(`../../Images/weatherIcons/${id}.png`)
            .then(image => {
                setIcon(image.default)
            })
    }

    function toggleCityFavorites() {
        currentCity.toggleCityFavorites()
    }

    return(
        <div id='current-weather-container'>
            <img id='current-weather-icon' src={icon}/>
            <h3>
                {currentCity.name}
                &nbsp;
                <FontAwesomeIcon
                    onClick={toggleCityFavorites}
                    icon={faStar}
                    className={`star ${currentCity.isFavorite}`}
                />
            </h3>
            <div id="weather-condition-container">
                <h3 className='weather-condition'>
                    {currentCity.temp[inputs.units]}&deg;{inputs.units === 'celsius' ? 'C' : 'F'}&ensp;
                </h3>
                <h5 className='weather-condition'>{currentCity.condition}</h5>
            </div>
        </div>
    )
}))

export default CurrentWeather