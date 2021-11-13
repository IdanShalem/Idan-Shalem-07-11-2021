import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHeart } from '@fortawesome/free-solid-svg-icons'
import '../styles/navbar.css'

function Navbar() {
    return (
        <div id='navbar'>
            <Link to='/'>
                <div className='nav-button' id='home-button'> 
                    <FontAwesomeIcon icon={faHome} />
                </div>
            </Link> 
            <Link to='/favorites'>
                <div className='nav-button' id='fav-button'>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
            </Link>
        </div>
    )  
}

export default Navbar