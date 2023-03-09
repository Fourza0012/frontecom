import { CSSProperties, useState } from 'react'
import { Layout, Image, Row, Typography, Card } from 'antd'
import Link from 'next/link';
import { useUser } from '@/hooks/user';
import NoUserMenu from './NoUserMenu';
import UserMenu from './UserMenu';

const headerStyle: CSSProperties = {
    padding: '0 3%',
    color: '#fff',
    backgroundColor: '#1677ff',
}
const { Header, Content, Sider } = Layout;

export default function HeaderComponent () {
    const { userData } = useUser()
    const [onMobile, setOnMobile] = useState(false)
    return (
        <Header style={headerStyle}>
            <Layout>
                <Content style={{ backgroundColor: '#1677ff', }}>
                    <Link href='/'>
                        <Image src='/logo/logo.svg' preview={false} />
                    </Link>
                </Content>
                <Sider breakpoint='md' onBreakpoint={(broken) => setOnMobile(broken)} style={{ backgroundColor: '#1677ff', }}>
                    <Row style={{ height: '100%' }} justify='end' align='middle' gutter={10}>
                        {userData ? <UserMenu /> : <NoUserMenu onMobile={onMobile} />}
                    </Row>
                </Sider>
            </Layout>
        </Header>
    )
}
