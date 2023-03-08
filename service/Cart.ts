import { makeRequest } from "./makeRequest";

export function addProductToCart (uid : number , pid : number, amount: number) {
    return makeRequest(`/addcart/${uid}`, {
        method: "POST",
        data: { pid, amount }
    })
}
