
import ProductCard from "@/components/Card/ProductCard"
import { productLists } from "@/mockup/productList"
import { Col, Divider, Row, Typography } from "antd"
const { Title } = Typography

export default function RelatedSection () {
    return (
        <>
        <Title level={2}>Related Product</Title>
        <Divider />
        <Row gutter={[16, 16]}>
            {[2,3,4,5].map((item, key) => (
                <Col key={key} sm={8} md={8} lg={8} xl={6} span={24}>
                <ProductCard {...productLists[item]} />
                </Col>
            ))}
        </Row>
        </>
    )
}