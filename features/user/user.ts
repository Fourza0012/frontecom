import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserFrom {
    firstname: string,
    lastname: string,
    email: string
}

export interface CartFrom {
    id: number,
    name: string,
    price: number,
    img: string,
    status: boolean,
    description?: string,
    related?: number[],
    amount?: number
}

interface UserState {
    userData: UserFrom | null,
    cartList: CartFrom[]
}

const initialState: UserState = {
    userData: null,
    cartList: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserData: (state) => {
            state.userData = {
                firstname: 'Kittichat',
                lastname: 'Tuntialnon',
                email: 'kittichat.tun@gmail.com',
            }
        },
        clearUserData: (state) => {
            state.userData = null
        },
        addCartList: (state, action: PayloadAction<AddCartForm>) => {
            const pIndex = state.cartList.findIndex(item => item.id == action.payload.product.id)
            if (pIndex >= 0) {
                state.cartList[pIndex] = {
                    ...action.payload.product,
                    amount: action.payload.amount
                }
            } else {
                state.cartList.push({
                    ...action.payload.product,
                    amount: action.payload.amount
                })
            }
        },
        deleteCartList: (state, action: PayloadAction<DeleteCartForm>) => {
           state.cartList = state.cartList.filter(item => item.id != action.payload.pid)
        },
    },
})

export const { addUserData, clearUserData, addCartList, deleteCartList } = userSlice.actions
export default userSlice.reducer


export type AddCartForm = { product:CartFrom, amount: number }
export type DeleteCartForm = { pid: number }