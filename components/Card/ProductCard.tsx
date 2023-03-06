import { Card, Typography, Button } from 'antd'
import Link from 'next/link';
const { Meta } = Card
const { Text } = Typography;

export default function ProductCard () {
    return (
        <Card
            hoverable
            cover={<img alt="example" src="/product/product-image.svg" />}
          >
            <Meta title="Brandix Angle Grinder KZX3890PQW" />
            <div style={{ display:'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
             <Text strong style={{ fontSize: '16px' }}>$649.00</Text>
             <Link href='/product/[id]' as={`/product/${123}`}>
             <Button type='primary'>Detail</Button>
             </Link>
            </div>
        </Card>
    )
}