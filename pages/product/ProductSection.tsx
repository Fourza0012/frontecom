import { useUser } from "@/hooks/user"
import { Button, Col, Divider, Image, Row, Space, Typography } from "antd"
import { useState } from "react"
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { priceFormat } from "@/function/utils";
const { Title, Paragraph, Text } = Typography

export default function ProductSection ({ currentItem } : { currentItem : any }) {
    const { handleAddCartList } = useUser()
    const [amount, setAmount] = useState<number>(1)
    function CallAddCart () {
        if (currentItem) {
            handleAddCartList({ product: currentItem, amount })
        }
    }
    return (
        <>
        <Row gutter={20}>
        <Col offset={5} span={6}>
        <Image style={{ border: '1px #C5C5C5 solid' }} width='100%'src={`/product/product-${currentItem.pid}.jpg`} alt={currentItem.pname} />
        </Col>
        <Col span={8}>
            <Title style={{ marginTop: '0px' }}>{currentItem.pname}</Title>
            <Paragraph style={{ color: '#6F6F6F' }}>
                {currentItem.description}
            </Paragraph>
            <Divider />
            <Space direction='vertical'>
                <div>
                    <Text strong style={{ color: '#6F6F6F' }}>Availability: </Text> <Text type={currentItem.status ? 'success' : 'danger'}>{currentItem.status ? 'In Stock' : 'Out of Stock'}</Text>
                </div>
                <Text style={{ fontSize: '24px' }} strong>{priceFormat(currentItem.price)}</Text>
                <Space size='large'>
                    <Space size='large' style={{ border: '1px #e7e7e7 solid' }}>
                        <Button onClick={() => amount > 1 && setAmount(pre => pre -= 1)} type="text" icon={<MinusOutlined />} />
                           <Text strong>{amount}</Text>
                        <Button onClick={() => setAmount(pre => pre += 1)} type="text" icon={<PlusOutlined />} />
                    </Space>
                    <Button onClick={CallAddCart} size='large' type='primary'>Add to Cart</Button>
                </Space>
            </Space>
        </Col>
    </Row>
        </>
    )
}