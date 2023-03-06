import CartTable from "@/components/Table/CartTable";
import { Button, Card, Col, Divider, Row, Space, Typography } from 'antd';

const { Title } = Typography;

export default function Cart () {
    return (
        <div style={{ padding: '0 2%' }}>
            <Title style={{ marginTop: 0 }}>Shopping Cart</Title>
            <CartTable />
            <Row gutter={[0,30]}>
                <Col offset={20} span={4}>
                    <Button block type='text' size='large' style={{ color: '#404040' }}>
                        <strong>Continue Shopping</strong>
                    </Button>
                </Col>
                <Col offset={16} span={8}>
                    <CartTotal />
                </Col>
            </Row>
        </div>
    )
}

function CartTotal () {
    return (
        <Card>
            <div style={{ fontSize: '24px', marginBottom: '30px' }}>
                <strong>Cart Totals</strong>
            </div>
            <Row justify='space-between'>
                <strong>Subtotal</strong>
                <span>$1000</span>
            </Row>
            <Divider style={{ margin: '10px 0' }} />
            <Space style={{ width: '100%' }} direction='vertical' size='large'>
                <Row justify='space-between'>
                    <strong>Shipping</strong>
                    <span>$1000</span>
                </Row>
                <Row justify='space-between'>
                    <strong>Tax</strong>
                    <span>$1000</span>
                </Row>
            </Space>
            <Divider style={{ margin: '10px 0' }} />
            <Row style={{ fontSize: '20px' }} justify='space-between'>
                <strong>Subtotal</strong>
                <span>$1000</span>
            </Row>
            <Button style={{ marginTop: '30px' }} block type='primary' size='large'>
                Proceed to checkout
            </Button>
        </Card>
    )
}