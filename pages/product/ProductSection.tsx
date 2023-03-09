import { useUser } from "@/hooks/user"
import { Button, Col, Divider, Image, message, Row, Space, Typography } from "antd"
import { useState } from "react"
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { priceFormat } from "@/function/utils";
import { useAsyncFn } from "@/hooks/useAsync";
import { addProductToCart } from "@/service/Cart";
const { Title, Paragraph, Text } = Typography

export default function ProductSection ({ currentItem } : { currentItem : any }) {
    const avalibleAdd = currentItem.amount > 0
    const { userData,handleAddCartList } = useUser()
    const { execute: updateToCart } = useAsyncFn(addProductToCart)
    const [amount, setAmount] = useState<number>(avalibleAdd ? 1 : 0)
    function CallAddCart () {
        if (!userData) {
          return message.error('Please Login!')
        }
        if (currentItem) {
            handleAddCartList({ product: currentItem, amount })
            updateToCart(userData?.id, currentItem.pid, amount)
            .then(() => message.success(`Add ${amount} ${currentItem.pname} to Your Cart`))
            .catch((res: any) => message.error(res))
        }
    }
    return (
        <>
        <Row justify='center' gutter={[20, 20]}>
            <Col sm={8} md={12} lg={10} xl={8} span={24}>
                <Image style={{ border: '1px #C5C5C5 solid' }} width='100%'src={`/product/product-${currentItem.pid}.jpg`} alt={currentItem.pname} />
            </Col>
            <Col sm={8} md={12} lg={10} xl={8} span={24}>
                <Title className='product-title' style={{  marginTop: '0px' }}>{currentItem.pname}</Title>
                <Paragraph style={{ color: '#6F6F6F' }}>
                    {currentItem.description}
                </Paragraph>
                <Divider />
                <Space direction='vertical'>
                    <Space>
                        <Text strong style={{ color: '#6F6F6F' }}>
                            Availability: 
                        </Text>
                        <Text type={avalibleAdd ? 'success' : 'danger'}>{avalibleAdd ? 'In Stock' : 'Out of Stock'} ({currentItem.amount})</Text>
                    </Space>
                    <Text style={{ fontSize: '24px' }} strong>{priceFormat(currentItem.price)}</Text>
                    <Space size='large'>
                        <Space size='large' style={{ border: '1px #e7e7e7 solid' }}>
                            <Button disabled={!avalibleAdd} onClick={() => amount > 1 && setAmount(pre => pre -= 1)} type="text" icon={<MinusOutlined />} />
                            <Text strong>{amount}</Text>
                            <Button disabled={!avalibleAdd} onClick={() => amount < currentItem.amount && setAmount(pre => pre += 1)} type="text" icon={<PlusOutlined />} />
                        </Space>
                        <Button disabled={!avalibleAdd || amount < 1} onClick={CallAddCart} size='large' type='primary'>Add to Cart</Button>
                    </Space>
                </Space>
            </Col>
        </Row>
        </>
    )
}