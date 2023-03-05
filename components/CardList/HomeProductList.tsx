import { Col, Row } from 'antd'
import ProductCard from '@/components/Card/ProductCard';

export default function HomeProductList () {
    const test = [1,2,3,4,5,6,7,8]
    return (
        <>
        <Row gutter={[16, 16]}>
            {test.map((item, key) => (
                <Col key={key} span='6'>
                    <ProductCard />
                </Col>
            ))}
        </Row>
        </>
    )
}