import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserFrom {
    firstname: string,
    lastname: string,
    email: string
}

interface UserState {
    userData: UserFrom | null
}

const initialState: UserState = {
    userData: null
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
        }
    },
})

export const { addUserData, clearUserData } = userSlice.actions
export default userSlice.reducer