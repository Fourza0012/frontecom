import user from '@/features/user/user'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        user: user
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>