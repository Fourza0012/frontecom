import React, { ReactNode, Key } from 'react'
import type { MenuProps } from 'antd';
import { Menu, Layout } from 'antd'

const { Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: ReactNode,
    key: Key,
    icon?: ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  
const items: MenuItem[] = [
    getItem('All', '1'),
    getItem('Power Tools', '2'),
    getItem('Hand Tools', '3'),
  ];

export default function SideMenu () {
    return (
        <Sider width={200} style={{ background: '#001529' }}>
           <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            items={items}
            theme='dark'
        />
        </Sider>
    )
}