import { productLists } from "@/mockup/productList"

export function priceFormat (price : number | undefined) {
    if (typeof price == 'number') {
        return `$${price.toFixed(2)}`
    } else {
        return ''
    }
}

export function findProduct (pid: string[] | number | string | undefined) {
    if (typeof pid === 'number' || typeof pid === 'string') {
        return productLists.find(item => item.pid == pid)
    } else {
        return undefined
    }
}

export function checkIncludeString (stringWord: string, checkArray: string[]) {
    let match = false
    for(const check of checkArray) {
        if (stringWord.includes(check)) {
            match = true
        }
    }
    return match
}