import CartTable from "@/components/Table/CartTable";
import { useAsync, useAsyncFn } from "@/hooks/useAsync";
import { useUser } from "@/hooks/user";
import { deleteProductCartById, getProductCartByUser } from "@/service/Cart";
import { Button, Card, Col, Divider, Row, Space, Typography } from 'antd';
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CartTotal from "./CartTotal";

const { Title } = Typography;

export default function Cart () {
    const router = useRouter()
    const { userData, cartList, handleDeleteCartList, handleUpdateCartList } = useUser()
    const { execute: deleteFromCart } = useAsyncFn(deleteProductCartById)
    const { value: userCart } = useAsync(() => getProductCartByUser(userData?.id), [userData])
    const CallDeleteCart = (pid: number) => {
        handleDeleteCartList({ pid })
        deleteFromCart(userData?.id, pid)
    }
    useEffect(() => {
        if (userData?.id) {
            handleUpdateCartList(userCart)
        }
    }, [userData, userCart])
    useEffect(() => {
        if (!userData) router.push('/login')
        
    }, [userData])
    return (
        <div style={{ padding: '0 2%' }}>
            <Title style={{ marginTop: 0 }}>Shopping Cart</Title>
            <CartTable data={cartList} callDelete={CallDeleteCart} />
            <Row gutter={[0,30]}>
                <Col offset={20} span={4}>
                    <Link href='/'>
                    <Button block type='text' size='large' style={{ color: '#404040' }}>
                        <strong>Continue Shopping</strong>
                    </Button>
                    </Link>
                </Col>
                <Col offset={16} span={8}>
                    <CartTotal />
                </Col>
            </Row>
        </div>
    )
}