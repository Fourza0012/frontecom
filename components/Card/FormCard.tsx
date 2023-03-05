import { ReactNode } from 'react'
import { Card, Typography } from 'antd'
const { Title } = Typography

export default function FormCard ({ title, children } : { title: string, children: ReactNode }) {
    return (
        <>
        <Card 
            title={<Title>{title}</Title>} 
            style={{ padding: '0px 24px', maxWidth: '700px', margin: 'auto' }}
        >
            {children}
        </Card>
        </>
    )
}