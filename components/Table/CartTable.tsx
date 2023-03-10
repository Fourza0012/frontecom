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
      key: 'pid',
      align: 'center',
      render: (_, record) => (
          <ImageCom
            width='100%'
            src={`/product/product-${record.pid}.jpg`} 
            alt={record.pname}
            style={{ maxWidth: '150px' }}
          />
      ),
    },
    {
      title: 'Product',
      dataIndex: 'pname',
      key: 'pname',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      render: (_, record) => (
          <Space>
          <strong style={{ fontSize: '16px' }}>
          ${record.price * (record?.amount || 1)} 
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
          <Button onClick={() =>callDelete(record.pid)}>Delete</Button>
      )
    }
  ]
    return (
        <Table columns={columns} dataSource={data} />
       
    )
}
