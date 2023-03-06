import { useRouter } from "next/router"
import { Button, Col, Divider, Image, Row, Space, Typography } from 'antd';
import ProductCard from "@/components/Card/ProductCard";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography

export default function ProductDetail () {
    const { query } = useRouter()
    console.log('query', query)
    return (
    <>
    <Row gutter={20}>
        <Col offset={5} span={6}>
        <Image style={{ border: '1px #C5C5C5 solid' }} width='100%' src='/product/product-image.svg' />
        </Col>
        <Col span={8}>
            <Title style={{ marginTop: '0px' }}>Product</Title>
            <Paragraph style={{ color: '#6F6F6F' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus cupiditate quae optio earum quo? Quasi itaque veritatis accusantium maiores impedit ducimus dicta aliquid id? Dignissimos maxime doloremque quis aspernatur vitae.
            </Paragraph>
            <Divider />
            <Space direction='vertical'>
                <div>
                    <Text strong style={{ color: '#6F6F6F' }}>Availability: </Text> <Text type='success'>In Stock</Text>
                </div>
                <Text style={{ fontSize: '24px' }} strong>$649.00</Text>
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
    </Row>
      <Title level={2}>Related Product</Title>
      <Divider />
      <Space size='small' style={{ paddingBottom: '5px', overflow: 'auto', width: '100%' }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </Space>
    </>
    )
}