
import ProductCard from "@/components/Card/ProductCard"
import { productLists } from "@/mockup/productList"
import { Divider, Space, Typography } from "antd"
const { Title } = Typography

export default function RelatedSection () {
    return (
        <>
        <Title level={2}>Related Product</Title>
        <Divider />
        <Space size='large' style={{ paddingBottom: '5px', overflow: 'auto', width: '100%' }}>
            {[2,3,4,5].map(item => (
                <ProductCard {...productLists[item]} />
            ))}
        </Space>
        </>
    )
}