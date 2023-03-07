import { useRouter } from "next/router"
import { Button, Col, Divider, Image, Row, Space, Typography } from 'antd';
import ProductCard from "@/components/Card/ProductCard";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { productItem, productLists } from "@/mockup/productList";
import { findProduct, priceFormat } from "@/function/utils";

const { Title, Paragraph, Text } = Typography

export default function ProductDetail () {
    const { query } = useRouter()
    const [currentItem, setCurrentItem] = useState<productItem>()
    useEffect(() => {
        setCurrentItem(findProduct(query?.id))
    }, [query])
    return (
    <>
    {currentItem && 
    <Row gutter={20}>
        <Col offset={5} span={6}>
        <Image style={{ border: '1px #C5C5C5 solid' }} width='100%' src={currentItem.img} alt={currentItem.name} />
        </Col>
        <Col span={8}>
            <Title style={{ marginTop: '0px' }}>{currentItem.name}</Title>
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
                        <Button type="text" icon={<MinusOutlined />} />
                           <Text strong>1</Text>
                        <Button type="text" icon={<PlusOutlined />} />
                    </Space>
                    <Button size='large' type='primary'>Add to Cart</Button>
                </Space>
            </Space>
        </Col>
    </Row>}
      <Title level={2}>Related Product</Title>
      <Divider />
      <Space size='small' style={{ paddingBottom: '5px', overflow: 'auto', width: '100%' }}>
        <ProductCard {...productLists[0]} />
        <ProductCard {...productLists[3]} />
        <ProductCard {...productLists[6]} />
        <ProductCard {...productLists[2]} />
      </Space>
    </>
    )
}