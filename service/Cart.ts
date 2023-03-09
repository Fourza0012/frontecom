import { makeRequest } from "./makeRequest";

export function addProductToCart (uid : number | undefined , pid : number, amount: number) {
    if (typeof uid === 'number') {
        const userToken = localStorage.getItem('token')
        return makeRequest(`/addcart/${uid}`, {
            method: "POST",
            data: { pid, amount },
            headers: {
                'Authorization': `Bearer ${userToken}` 
            }
        })
    }
}

export function getProductCartByUser (uid : number | undefined) {
    return makeRequest(`/carts/${uid}`)
}

export function deleteProductCartById (uid: number | undefined, pid: number | undefined) {
    if (typeof uid === 'number') {
        const userToken = localStorage.getItem('token')
        return makeRequest(`/cart/${uid}`, {
            method: "DELETE",
            data: { pid },
            headers: {
                'Authorization': `Bearer ${userToken}` 
            }
        })
    }
    
}