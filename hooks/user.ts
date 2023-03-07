import { useAppDispatch, useAppSelector } from "@/apps/hooks"
import { addUserData, clearUserData } from "@/features/user/user"

export const useUser = () => {
    const dispatch = useAppDispatch()
    const userData = useAppSelector(state => state.user.userData)
    const handleAddUserData = () => dispatch(addUserData())
    const handleClearUserData = () => dispatch(clearUserData())
    return {
        userData,
        handleAddUserData,
        handleClearUserData
    }
}