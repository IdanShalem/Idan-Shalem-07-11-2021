import { inject, observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import FavoriteCity from "./FavoriteCity";

const Favorites = inject('currentCity')(observer((props) => {

    const { currentCity } = props
    const [savedCities, setSavedCities] = useState([])

    useEffect(() => {
        setSavedCities(currentCity.getParsedLocalStorage())
    }, [currentCity])

    return (
        <div id="favorites-container">
            {
                savedCities
                    ?   savedCities.map(c => <FavoriteCity key={c.id} city={c} />)
                    :   'No cities in favorites'
            }
        </div>
    )
}))

export default Favorites