import config from "@/config/config"
import axios from "axios"

const api = axios.create({
    baseURL: config.currentAPI
})

export function makeRequest (url : string, options ?: any) {
    return api(url, options)
    .then(res => res.data)
    .catch(error => Promise.reject(error?.response?.data ?? 'Error'))
}