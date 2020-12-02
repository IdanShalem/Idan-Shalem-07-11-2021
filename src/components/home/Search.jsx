import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import '../../styles/search.css'

function Search() {
    return (
        <div id='search-bar'>
            <FontAwesomeIcon id="search-icon" icon={faSearchLocation} />
            <input id="search-input" type="text" placeholder='Search by city...'/>
        </div>
    )
}

export default Search