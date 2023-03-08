import { Col, Row } from 'antd'
import ProductCard from '@/components/Card/ProductCard';
import { productLists } from '@/mockup/productList';
import { useAsync } from '@/hooks/useAsync';
import { getProducts } from '@/service/product';

export default function HomeProductList () {
    const { loading, error, value = [] } = useAsync(getProducts)

    if (loading) return <>loading</>
    if (error) return <>error</>

    return (
        <>
        <Row gutter={[16, 16]}>
            {value.map((item, key) => (
                <Col key={key} span='6'>
                    <ProductCard {...item} />
                </Col>
            ))}
        </Row>
        </>
    )
}