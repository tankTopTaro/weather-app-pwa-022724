/* eslint-disable react-refresh/only-export-components */
import axios from "axios"

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'd871f7208e65caf916aac8be8dce0be6'

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    })

    return data
}
