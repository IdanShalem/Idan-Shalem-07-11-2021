import React, { useState } from 'react'
import '../../styles/search.css'
import { inject, observer } from 'mobx-react'
import validator from 'validator';
import SearchResult from './SearchResult'

const Search = inject('inputs', 'currentCity')(observer((props) => {

    const { inputs, currentCity } = props

    const [inputResults, setInputResults] = useState([])

    async function onCitySearch(event) {
        const inputValue = event.target.value
        if(validator.isAlpha(inputValue, 'en-US', {ignore: ' '}) || inputValue === '') {
            inputs.setCitySearch(inputValue)
            const results = await currentCity.autoCompleteResultls(inputValue)
            setInputResults(results)
        } else {
            alert('Only English Letters Allowed')
        }
    }

    function onSearchSubmit(cityId, cityName) {
        currentCity.loadCity(cityId, cityName)
        inputs.setCitySearch('')
    }

    return (
        <div id='search-container'>
            <div id='search-bar'>
                <input
                    id="search-input"
                    type="text"
                    placeholder='Search by city...'
                    value={inputs.citySearch} 
                    onChange={onCitySearch} 
                />
            </div>
            {
                inputResults.length > 0 &&
                <div id="result-container">
                    {inputResults.map(r => <SearchResult key={r.Key} city={r} onSearchSubmit={onSearchSubmit} />)}
                </div>
            }
        </div>
    )
}))

export default Search 