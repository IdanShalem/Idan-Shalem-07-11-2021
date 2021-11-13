import React from 'react'
import '../../styles/search.css'

function SearchResult(props) {

    const { city, onSearchSubmit } = props

    function resultClicked() {
        onSearchSubmit(city.Key, city.LocalizedName)
    }

    return (
        <div id={city.Key} className="city-result" onClick={resultClicked}>
            <p className="city-result-name">{city.LocalizedName}</p>
            <p className="city-result-country">{city.Country.LocalizedName}, {city.Country.ID}</p>
        </div>
    )

}

export default SearchResult
