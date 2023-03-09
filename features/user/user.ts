import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserFrom {
    id: number,
    name: string,
    email: string
}

export interface CartFrom {
    pid: number,
    pname: string,
    price: number,
    description?: string,
    amount?: number,
    pamount?: number
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
        addUserData: (state, action: PayloadAction<AddUserForm>) => {
            state.userData = {
                id: action.payload.uid,
                name: action.payload.name,
                email: action.payload.email,
            }
        },
        clearUserData: (state) => {
            localStorage.clear()
            state.userData = null
        },
        addCartList: (state, action: PayloadAction<AddCartForm>) => {
            const pIndex = state.cartList.findIndex(item => item.pid == action.payload.product.pid)
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
        updateCartList: (state, action: PayloadAction<CartFrom[]>) => {
            state.cartList = action.payload
        },
        deleteCartList: (state, action: PayloadAction<DeleteCartForm>) => {
           state.cartList = state.cartList.filter(item => item.pid != action.payload.pid)
        },
    },
})

export const { addUserData, clearUserData, addCartList, updateCartList, deleteCartList } = userSlice.actions
export default userSlice.reducer

export type AddUserForm = { uid: number, name: string, email: string }
export type AddCartForm = { product:CartFrom, amount: number }
export type DeleteCartForm = { pid: number }