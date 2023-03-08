import { makeRequest } from "./makeRequest";

export function getProducts () {
    return makeRequest('/product')
}

export function getProductById (pid : any) {
    return makeRequest(`/product/${pid}`)
}