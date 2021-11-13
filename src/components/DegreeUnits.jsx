import React from 'react'
import '../styles/degreeUnits.css'
import { inject, observer } from 'mobx-react'

const DegreeUnits = inject('inputs')(observer((props) => {

    const { inputs } = props    

    function toggleUnits() {
        inputs.setUnits()
    }

    return (
        <div id="degrees-container" onClick={toggleUnits}>
            <div id="degress-units-toggle">
                <span className={inputs.units === 'celsius' ? 'units active' : 'units'}>C&#176;</span>
                <span className={inputs.units === 'fahrenheit' ? 'units active' : 'units'}>F&#176;</span>
            </div>
        </div>
    )
}))

export default DegreeUnits
