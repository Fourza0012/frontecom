import { CartFrom } from '@/features/user/user';
import { priceFormat } from '@/function/utils';
import { Card, Typography, Button } from 'antd'
import Link from 'next/link';
const { Meta } = Card
const { Text } = Typography;

export default function ProductCard (props: CartFrom) {
    return (
        <Card
            hoverable
            cover={<img alt={props.pname} src={`/product/product-${props.pid}.jpg`} />}
          >
            <Meta title={props.pname} />
            <div style={{ display:'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
             <Text strong style={{ fontSize: '16px' }}>{priceFormat(props.price)}</Text>
             <Link href='/product/[id]' as={`/product/${props.pid}`}>
             <Button type='primary'>Detail</Button>
             </Link>
            </div>
        </Card>
    )
}