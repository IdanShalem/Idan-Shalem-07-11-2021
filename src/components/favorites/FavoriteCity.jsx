import '../../styles/favorites.css'
import { inject, observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

const FavoriteCity = inject('currentCity', 'inputs')(observer((props) => {

    const { city, currentCity, inputs } = props

    const [currentTemp, setCurrentTemp] = useState(null)
    const [icon, setIcon] = useState(null)

    function loadIcon(id) {
        import(`../../Images/weatherIcons/${id}.png`)
            .then(image => {
                setIcon(image.default)
            })
    }

    useEffect(() => {
        currentCity.getCityDetails(city.id)
            .then((cityDetails) => {
                const tempObj = {}
                tempObj.celsius = cityDetails.Temperature.Metric.Value
                tempObj.fahrenheit = cityDetails.Temperature.Imperial.Value
                let weatherIcon = cityDetails.WeatherIcon.toString()
                if(weatherIcon.length === 1) {
                    weatherIcon = `0${weatherIcon}`
                }
                tempObj.icon = loadIcon(weatherIcon)
                setCurrentTemp(tempObj)
            })
        loadIcon('04')
    }, [])

    function cityClicked() {
        currentCity.loadCity(city.id, city.name)
        props.history.push('/home')
    }

    return (
        <div className="favorite-city-card" id={city.id} onClick={cityClicked}>
            <p>{city.name}</p>
            {
                currentTemp && <p>{currentTemp[inputs.units]}&deg;{inputs.units === 'celsius' ? 'C' : 'F'}&ensp;</p>
            }
            {
                icon && <img src={icon} alt="weather icon" />
            }     
        </div>
    )
}))

export default withRouter(FavoriteCity)