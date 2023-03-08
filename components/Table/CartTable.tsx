import React from 'react';
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table'
import ImageCom from '../Image/ImageCom';
import { CartFrom } from '@/features/user/user';

export default function CartTable ({ data, callDelete } : { data: CartFrom[], callDelete: Function }) {
  const columns: ColumnsType<CartFrom> = [
    {
      title: 'Image',
      ellipsis: true,
      key: 'img',
      align: 'center',
      render: (_, record) => (
          <ImageCom height={150} src={record.img} alt={record.pname} />
      ),
    },
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      render: (_, record) => (
          <Space>
          <strong style={{ fontSize: '16px' }}>
          ${record.price} 
          </strong>
          <small>({record.amount})</small>
          </Space>
      )
    },
    {
      title: 'Total',
      key: 'action',
      align: 'center',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() =>callDelete(record.pid)}>Delete</Button>
        </Space>
      )
    }
  ]
    return (
        <Table columns={columns} dataSource={data} />
       
    )
}
