import { makeRequest } from "./makeRequest";

export function addProductToCart (uid : number | undefined , pid : number, amount: number) {
    if (typeof uid === 'number') {
        return makeRequest(`/addcart/${uid}`, {
            method: "POST",
            data: { pid, amount }
        })
    }
}

export function getProductCartByUser (uid : number | undefined) {
    return makeRequest(`/carts/${uid}`)
}

export function deleteProductCartById (uid: number | undefined, pid: number | undefined) {
    return makeRequest(`/cart/${uid}`, {
        method: "DELETE",
        data: { pid }
    })
}