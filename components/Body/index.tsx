import { ReactNode, CSSProperties } from 'react'
import { Layout, Image, Button, Space, Typography, Popover, Card, Avatar } from 'antd'
import Link from 'next/link';
import { useUser } from '@/hooks/user';
import { SettingOutlined,LogoutOutlined,ShoppingCartOutlined } from '@ant-design/icons';

const { Meta } = Card;

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
    const { userData } = useUser()
    return (
            <Layout style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
                <Header style={headerStyle}>
                    <Link href='/'>
                        <Image src='/logo/logo.svg' preview={false} />
                    </Link>
                   {userData ? <UserMenu /> : <NoUserMenu />}
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

function NoUserMenu () {
    return (
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
    )
}

function CartButton () {
    return (
        <>
      <Link href='/cart'>
      <ShoppingCartOutlined key="edit" />
      </Link>
      </>
    )
}

function UserInfo () {
    const { userData, handleClearUserData } = useUser()
    return (
    <Card
    actions={[
      <SettingOutlined key="setting" />,
      <CartButton />,
      <LogoutOutlined style={{ color: 'red' }} key="logout" onClick={handleClearUserData} />,
    ]}
  >
    <Meta
      avatar={<Avatar style={{ border: '1px black solid', backgroundColor: '#fff' }} src="https://joesch.moe/api/v1/random" />}
      title={userData?.name}
      description={userData?.email}
    />
  </Card>
)}

function UserMenu () {
    return (
        <Popover placement='bottomRight' content={UserInfo} trigger="click">
            <Avatar style={{ border: '1px black solid', backgroundColor: '#fff' }} src="https://joesch.moe/api/v1/random" />
        </Popover>
    )
}