import { Button, Col, Popover, Space, Typography } from "antd"
import Link from "next/link"
import { MenuOutlined } from '@ant-design/icons'
const { Text } = Typography

export default function NoUserMenu ({ onMobile } : { onMobile: boolean }) {
    return (
        <>
            {onMobile ? <MobileOption /> : <DesktopOption />}
        </>
    )
}

const content = (
    <Space direction='vertical' style={{ width: '100%' }}>
      <Link href='/register'>
            <Button type="primary" block>
                <Text style={{ color: 'white' }} strong>Sign In</Text>
            </Button>
        </Link>
        <Link href='/login'>
            <Button block type='text'>
                <Text strong>Login</Text>
            </Button>
        </Link>
    </Space>
)

function MobileOption () {
    return (
        <Col>
            <Popover title='Menu' placement='bottomRight' content={content} trigger="click">
                <MenuOutlined />
            </Popover>
        </Col>
    )
}

function DesktopOption () {
    return (
        <>
         <Col>
                <Link href='/register'>
                    <Button size='large'>
                        <Text strong>Sign In</Text>
                    </Button>
                </Link>
            </Col>
            <Col>
                <Link href='/login'>
                    <Button size='large' type='text'>
                        <Text style={{ color: 'white' }} strong>Login</Text>
                    </Button>
                </Link>
            </Col>
        </>
    )
}