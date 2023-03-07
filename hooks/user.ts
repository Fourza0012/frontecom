import { useAppDispatch, useAppSelector } from "@/apps/hooks"
import { addUserData, clearUserData, addCartList, deleteCartList, AddCartForm, DeleteCartForm } from "@/features/user/user"

export const useUser = () => {
    const dispatch = useAppDispatch()
    const userData = useAppSelector(state => state.user.userData)
    const cartList = useAppSelector(state => state.user.cartList)
    const handleAddUserData = () => dispatch(addUserData())
    const handleClearUserData = () => dispatch(clearUserData())
    const handleAddCartList = (props : AddCartForm) => dispatch(addCartList(props))
    const handleDeleteCartList = (props: DeleteCartForm) => dispatch(deleteCartList(props))
    return {
        userData,
        cartList,
        handleAddUserData,
        handleClearUserData,
        handleAddCartList,
        handleDeleteCartList
    }
}