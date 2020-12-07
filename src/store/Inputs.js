import { makeObservable, observable } from 'mobx'

class Inputs {

    constructor() {
        citySearch: '',
        units: 'C',
        makeObservable({
            citySearch: observable,
            units: observable
        })
    }
}