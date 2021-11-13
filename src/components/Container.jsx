import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import '../styles/container.css'
import Favorites from './favorites/Favorites'
import HomePage from './home/HomePage'

function Container() {

    return (
        <div id='container'>
            <Route exact path='/'>
                <Redirect to="/home"/>
            </Route>
            <Route exact path='/home' 
                render={({ match }) => 
                    <HomePage 
                        match={match} 
                    />
                }
            />
            <Route exact path='/favorites' 
                render={({ match }) => 
                    <Favorites
                        match={match} 
                    />
                }
            />
            
        </div>
    )
}

export default Container