import { calculateTotal } from "@/function/cart";
import { useUser } from "@/hooks/user";
import { Button, Card, Divider, Row, Space } from "antd";
import { useEffect, useState } from "react";

export default function CartTotal () {
    const { cartList } = useUser()
    const [totalState, setTotalState] = useState<{
        subTotal: string,
        shipping: string,
        tax: string,
        total:string
    }>(calculateTotal([]))
    useEffect(() => {
        setTotalState(calculateTotal(cartList))
    }, [cartList])
    return (
        <Card>
            <div style={{ fontSize: '24px', marginBottom: '30px' }}>
                <strong>Cart Totals</strong>
            </div>
            <Row justify='space-between'>
                <strong>Subtotal</strong>
                <span>{totalState.subTotal}</span>
            </Row>
            <Divider style={{ margin: '10px 0' }} />
            <Space style={{ width: '100%' }} direction='vertical' size='large'>
                <Row justify='space-between'>
                    <strong>Shipping</strong>
                    <span>{totalState.shipping}</span>
                </Row>
                <Row justify='space-between'>
                    <strong>Tax</strong>
                    <span>{totalState.tax}</span>
                </Row>
            </Space>
            <Divider style={{ margin: '10px 0' }} />
            <Row style={{ fontSize: '20px' }} justify='space-between'>
                <strong>Total</strong>
                <span>{totalState.total}</span>
            </Row>
            <Button style={{ marginTop: '30px' }} block type='primary' size='large'>
                Proceed to checkout
            </Button>
        </Card>
    )
}