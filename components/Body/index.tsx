import { ReactNode, CSSProperties } from 'react'
import { Layout, Image, Button, Space, Typography } from 'antd'

const { Text } = Typography;

const { Header, Footer, Content } = Layout;

const headerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    backgroundColor: '#FFD333',
}
  
const contentStyle: CSSProperties = {
    minHeight: 120,
}
  
const footerStyle: CSSProperties = {
    borderTop: '1px solid #C5C5C5',
    backgroundColor: '#fff'
}

export default function NormalBody ({ children } : { children: ReactNode }) {
    return (
            <Layout style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
                <Header style={headerStyle}>
                    <Image src='/logo/logo.svg' preview={false} />
                    <Space>
                    <Button size='large'>
                        <Text strong>Sign In</Text>
                        </Button>
                    <Button size='large' type='text'>
                        <Text strong>Login</Text>
                        </Button>
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