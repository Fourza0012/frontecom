import { ReactNode, CSSProperties } from 'react'
import { Layout } from 'antd'
import HeaderComponent from './HeaderComponent';

const { Footer, Content } = Layout;

const contentStyle: CSSProperties = {
    minHeight: 120,
    padding: '3% 4%'
}
  
const footerStyle: CSSProperties = {
    borderTop: '1px solid #C5C5C5',
    backgroundColor: '#fff'
}

export default function NormalBody ({ children } : { children: ReactNode }) {
    return (
            <Layout style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
                <HeaderComponent />
                <Content style={contentStyle}>
                    {children}
                </Content>
                <Footer style={footerStyle}>
                Powered by React - Design by Four
                </Footer>
            </Layout>
    )
}
