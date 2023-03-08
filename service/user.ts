import { makeRequest } from "./makeRequest";

export function loginUser (email: string, password: string) {
    return makeRequest('/login', {
        method: "POST",
        data: { email, password }
    })
}

export function getProductById (pid : any) {
    return makeRequest(`/product/${pid}`)
}