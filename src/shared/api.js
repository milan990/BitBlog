import axios from 'axios'
import { BASE_API_ENDPOINT } from './constants'

export const API = axios.create({
    baseURL: BASE_API_ENDPOINT,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'B1tD3V'
    }
})

// Alternative way to create abstraction over our network layer
// using this we can easily switch behind scenes between fetch, axios
// or some other library
export const fetchAPI = {
    baseUrl: BASE_API_ENDPOINT,
    get(path, queryParams) {
        const requestUrl = this.baseUrl + path

        const options = {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }

        return fetch(requestUrl, options)
            .then(response => response.json())
            .then(data => ({ data }))
    },

    post(path, data) {
        const requestUrl = this.baseUrl + path

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }

        return fetch(requestUrl, options)
            .then(response => response.json())
            .then(data => ({ data }))
    }
}
