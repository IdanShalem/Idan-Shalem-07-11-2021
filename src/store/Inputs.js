import { makeObservable, observable, action } from 'mobx'

export default class Inputs {

    constructor() {
        this.citySearch = ''
        this.units = 'celsius'
        makeObservable(this, {
            citySearch: observable,
            units: observable,
            setCitySearch: action,
            setUnits: action
        })
    }

    setCitySearch(value) {
        this.citySearch = value
    }

    setUnits() {
        if(this.units === 'celsius') {
            this.units = 'fahrenheit'
        } else {
            this.units = 'celsius'
        }
    }
}