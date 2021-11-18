import { action, makeObservable, observable } from "mobx"
import axios from 'axios'

const apiURL = 'https://dataservice.accuweather.com/'
const apiKey = 'zLqbG4S5XVK66YOXhzgYFjHK7Mjp9JfZ'

export default class CurrentCity {

    constructor(){
        this.cityId = ''
        this.name = ''
        this.temp = {
            celsius: null,
            fahrenheit: null
        }
        this.condition = ''
        this.isDayTime = null
        this.icon = ''
        this.dailyForecast = []
        this.isFavorite = null
        this.cityLoaded = false
        makeObservable(this, {
            cityId: observable,
            name: observable,
            temp: observable,
            condition: observable,
            isDayTime: observable,
            icon: observable,
            dailyForecast: observable,
            isFavorite: observable,
            cityLoaded: observable,
            getCityId: action,
            getCityDetails: action,
            getDailyForecast: action,
            loadCity: action,
            toggleCityFavorites: action,
            autoCompleteResultls: action
        })
    }

    getParsedLocalStorage() {
        return JSON.parse(localStorage.getItem("savedCities"))
    }

    findCitySaved() {
        const savedCities = this.getParsedLocalStorage()
        if(savedCities) {
            return savedCities.findIndex(c => c.id === this.cityId)
        } else {
            return -1
        }
    }

    async getCityId(cityName) {
        const cityId = await (await axios
            .get(`${apiURL}locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`)).data[0]
        this.cityId = cityId
        return cityId
    }

    async getCityDetails(cityId) {
        const cityCondition = await (await axios.get(`${apiURL}currentconditions/v1/${cityId}?apikey=${apiKey}`)).data[0]
        return cityCondition
    }

    async getDailyForecast() {
        const daysDictionary = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        axios
            .get(`${apiURL}forecasts/v1/daily/5day/${this.cityId}?apikey=${apiKey}&metric=true`)
            .then((resCelsius) => {
                this.dailyForecast = []
                const dailyForecastCelsius = resCelsius.data.DailyForecasts
                axios
                    .get(`${apiURL}forecasts/v1/daily/5day/${this.cityId}?apikey=${apiKey}`)
                    .then((resFahrenheit) => {
                        const dailyForecastFahrenheit = resFahrenheit.data.DailyForecasts
                        for(let i = 0; i < dailyForecastCelsius.length; i++) {
                            const dayObj = {}
                            const dayDate = new Date(dailyForecastCelsius[i].Date)
                            dayObj.dayName = daysDictionary[dayDate.getDay()]
                            dayObj.temp = {
                                celsius : dailyForecastCelsius[i].Temperature.Minimum.Value,
                                fahrenheit : dailyForecastFahrenheit[i].Temperature.Minimum.Value
                            }
                            let icon = dailyForecastCelsius[i].Day.Icon.toString()
                            if(icon.length === 1) {
                                icon = '0' + icon
                            }
                            dayObj.icon = icon
                            this.dailyForecast.push(dayObj)
                        }
                    })
            })
    }

    getCoordinates() {
        return new Promise(function(resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

    async getCityIdByCords(cords) {
        const cityId = await axios.get(`${apiURL}locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${cords}`)
        return cityId.data
    }

    async loadCity(cityId, cityName) {
        this.cityLoaded = false
        let cityCondition
        
        if(cityId) {
            this.name = cityName
        } else {
            const position = await this.getCoordinates()
            const crd = position.coords;
            const cords = crd.latitude + ',' + crd.longitude
            const cityDetails = await this.getCityIdByCords(cords)
            cityId = cityDetails.Key   
            this.name = cityDetails.EnglishName
        }

        this.cityId = cityId
        cityCondition = await this.getCityDetails(this.cityId)
        const weatherIcon = cityCondition.WeatherIcon.toString()
        if(weatherIcon.length === 1) {
            this.icon = `0${weatherIcon}`
        } else {
            this.icon = weatherIcon
        }
        this.temp.celsius = cityCondition.Temperature.Metric.Value
        this.temp.fahrenheit = cityCondition.Temperature.Imperial.Value
        this.condition = cityCondition.WeatherText
        this.isDayTime = cityCondition.IsDayTime
        if(this.findCitySaved() === -1) {
            this.isFavorite = false
        } else {
            this.isFavorite = true
        }
        await this.getDailyForecast()
        this.cityLoaded = true
        return true
    }

    setLocalStorage(savedCities) {
        window.localStorage.setItem('savedCities' ,JSON.stringify(savedCities))
    }

    addCityTofavorites(savedCities) {
        const cityObj = {
            id : this.cityId,
            name : this.name
        }
        savedCities.push(cityObj)
        this.setLocalStorage(savedCities)
    }

    removeCityFromFavorites(index, savedCities) {
        savedCities.splice(index, 1)
        this.setLocalStorage(savedCities)
    }
    
    toggleCityFavorites() {
        let savedCities = this.getParsedLocalStorage()
        if(!savedCities) {
            savedCities = []
        }
        const index = this.findCitySaved()
        if(index === -1) {
            this.addCityTofavorites(savedCities)
        } else {
            this.removeCityFromFavorites(index, savedCities)
        }
        this.isFavorite = !this.isFavorite
    }

    async autoCompleteResultls(input) {
        const results = await axios.get(`${apiURL}locations/v1/cities/autocomplete?apikey=${apiKey}&q=${input}`)
        return results.data
    }

}