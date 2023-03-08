import { CartFrom } from "@/features/user/user";
import { priceFormat } from "./utils";

export function calculateTotal (dataList: CartFrom[]) {
    try {
        let sum = {
            subTotal: 0,
            shipping: 0,
            tax: 0,
            total:0
        }
        for(const data of dataList) {
            sum.shipping += 5
            sum.subTotal += ((data?.price || 0) * (data?.amount || 1))
        }
        sum.tax = sum.subTotal * 0.07
        
        return {
            subTotal: priceFormat(sum.subTotal),
            shipping: priceFormat(sum.shipping),
            tax: priceFormat(sum.tax),
            total: priceFormat(sum.subTotal + sum.shipping + sum.tax)
        }
    } catch {
        return {
            subTotal: priceFormat(0),
            shipping: priceFormat(0),
            tax: priceFormat(0),
            total:priceFormat(0)
        }
    }
}