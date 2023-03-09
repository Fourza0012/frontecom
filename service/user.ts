import { makeRequest } from "./makeRequest";

export function loginUser (email: string, password: string) {
    return makeRequest('/login', {
        method: "POST",
        data: { email, password }
    })
}

export function registerUser (name: string, email: string, password: string) {
    return makeRequest('/register', {
        method: "POST",
        data: { name, email, password }
    })
}

export function checkLogin () {
    const userToken = localStorage.getItem('token')
    return makeRequest('/checklogin', {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${userToken}` 
        }
    })
}