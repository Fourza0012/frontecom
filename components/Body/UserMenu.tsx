import { useCheckLogin, useUser } from "@/hooks/user"
import { Avatar, Card, Col, Popover } from "antd"
import { SettingOutlined,LogoutOutlined,ShoppingCartOutlined } from '@ant-design/icons'
import Link from "next/link"

const { Meta } = Card

export default function UserMenu () {
    useCheckLogin()
    return (
        <Col>
            <Popover placement='bottomRight' content={UserInfo} trigger="click">
                <Avatar style={{ border: '1px black solid', backgroundColor: '#fff', cursor: 'pointer' }} src="https://joesch.moe/api/v1/random" />
            </Popover>
        </Col>
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
    )
}
