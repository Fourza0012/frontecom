import { Col, Row } from 'antd'
import ProductCard from '@/components/Card/ProductCard';
import { productLists } from '@/mockup/productList';

export default function HomeProductList () {
    return (
        <>
        <Row gutter={[16, 16]}>
            {productLists.map((item, key) => (
                <Col key={key} span='6'>
                    <ProductCard {...item} />
                </Col>
            ))}
        </Row>
        </>
    )
}