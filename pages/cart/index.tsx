import CartTable from "@/components/Table/CartTable";
import { useAsync, useAsyncFn } from "@/hooks/useAsync";
import { useUser } from "@/hooks/user";
import { deleteProductCartById, getProductCartByUser } from "@/service/Cart";
import { Button, Card, Col, Divider, message, Row, Space, Typography } from 'antd';
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
        if (userData) {
            handleDeleteCartList({ pid })
            deleteFromCart(userData?.id, pid)
            .then(() => message.success(`Delete product from cart`))
            .catch((res: any) => message.error(res))
        }
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
        <Space direction='vertical'>
            <Title style={{ marginTop: 0 }}>Shopping Cart</Title>
            <CartTable data={cartList} callDelete={CallDeleteCart} />
            <Row justify='end'>
                <Col md={12} lg={8} xl={6} span={24}>
                    <Link href='/'>
                    <Button block type='text' size='large' style={{ color: '#404040' }}>
                        <strong>Continue Shopping</strong>
                    </Button>
                    </Link>
                </Col>
            </Row>
            <Row justify='end'>
                <Col md={14} lg={14} xl={8} span={24}>
                    <CartTotal />
                </Col>
            </Row>
        </Space>
    )
}