import { useAppDispatch, useAppSelector } from "@/apps/hooks"
import { userPage } from "@/config/config"
import { addUserData, clearUserData, addCartList, deleteCartList, AddCartForm, DeleteCartForm, updateCartList, CartFrom, AddUserForm } from "@/features/user/user"
import { checkIncludeString } from "@/function/utils"
import { checkLogin } from "@/service/user"
import { message } from "antd"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAsync } from "./useAsync"

export const useUser = () => {
    const dispatch = useAppDispatch()
    const userData = useAppSelector(state => state.user.userData)
    const cartList = useAppSelector(state => state.user.cartList)
    const handleAddUserData = (props: AddUserForm) => dispatch(addUserData(props))
    const handleClearUserData = () => dispatch(clearUserData())
    const handleAddCartList = (props : AddCartForm) => dispatch(addCartList(props))
    const handleUpdateCartList = (props: CartFrom[]) => dispatch(updateCartList(props))
    const handleDeleteCartList = (props: DeleteCartForm) => dispatch(deleteCartList(props))
    return {
        userData,
        cartList,
        handleAddUserData,
        handleClearUserData,
        handleAddCartList,
        handleUpdateCartList,
        handleDeleteCartList
    }
}

export const useCheckLogin = () => {
    const router = useRouter()
    const { userData, handleAddUserData, handleClearUserData } = useUser()
    const { error, value } = useAsync(checkLogin, [router.route, userData])
    useEffect(() => {
        if (error && checkIncludeString(router.pathname, userPage)) {
            message.error(error)
            handleClearUserData()
            router.push('/login')
        } else if (error) {
            message.error(error)
        } else if (value && value?.uid !== userData?.id) {
            handleAddUserData(value)
        }
    }, [router.route, error])
    return {}
}