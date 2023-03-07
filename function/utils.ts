import { productLists } from "@/mockup/productList"

export function priceFormat (price : number) {
    return `$${price.toFixed(2)}`
}

export function findProduct (id: string[] | number | string | undefined) {
    if (typeof id === 'number' || typeof id === 'string') {
        return productLists.find(item => item.id == id)
    } else {
        return undefined
    }
}