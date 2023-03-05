import { ReactNode, CSSProperties } from 'react'
import { Layout, Image, Button, Space, Typography } from 'antd'
import Link from 'next/link';

const { Text } = Typography;

const { Header, Footer, Content } = Layout;

const headerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    backgroundColor: '#1677ff',
}
  
const contentStyle: CSSProperties = {
    minHeight: 120,
    padding: '3% 5%'
}
  
const footerStyle: CSSProperties = {
    borderTop: '1px solid #C5C5C5',
    backgroundColor: '#fff'
}

export default function NormalBody ({ children } : { children: ReactNode }) {
    return (
            <Layout style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
                <Header style={headerStyle}>
                    <Link href='/'>
                        <Image src='/logo/logo.svg' preview={false} />
                    </Link>
                    <Space>
                        <Link href='/register'>
                            <Button size='large'>
                                <Text strong>Sign In</Text>
                            </Button>
                        </Link>
                        <Link href='/login'>
                        <Button size='large' type='text'>
                            <Text style={{ color: 'white' }} strong>Login</Text>
                        </Button>
                        </Link>
                    </Space>
                </Header>
                <Content style={contentStyle}>
                    {children}
                </Content>
                <Footer style={footerStyle}>
                Powered by React - Design by Four
                </Footer>
            </Layout>
    )
}