import { Typography, Divider, Layout } from 'antd'
import SideMenu from '@/components/SideMenu';
import HomeProductList from '@/components/CardList/HomeProductList';

const { Content } = Layout

const { Title } = Typography

export default function Home() {
  return (
    <>
      <Title style={{ marginTop: '0px' }}>Product</Title>
      <Divider />
      <Layout>
        <SideMenu />
        <Content
            style={{
              padding: '0px 24px',
              margin: 0,
              minHeight: '60vh',
              backgroundColor: '#fff'
            }}
        >
          <HomeProductList />
        </Content>
      </Layout>
    </>
  )
}
