import React from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table'
import ImageCom from '../Image/ImageCom';

interface DataType {
  pid: number,
  image: string;
  product: string;
  price: number;
  quantity: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Image',
    dataIndex: 'image',
    ellipsis: true,
    key: 'image',
    align: 'center',
    render: (_, record) => (
        <ImageCom height={150} src={record.image} alt={record.product} />
    ),
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
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
        <small>({record.quantity})</small>
        </Space>
    )
  },
  {
    title: 'Total',
    key: 'action',
    align: 'center',
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    pid: 1,
    image: '/product/product-image.svg',
    product: 'adawd',
    price: 14.99,
    quantity: 1
  },
  {
    pid: 2,
    image: '/product/product-image.svg',
    product: 'adawd',
    price: 14.99,
    quantity: 1
  },
//   {
//     pid: 3,
//     image: '/product/product-image.svg',
//     product: 'adawd',
//     price: 14.99,
//     quantity: 1
//   },
//   {
//     pid: 4,
//     image: '/product/product-image.svg',
//     product: 'adawd',
//     price: 14.99,
//     quantity: 1
//   },
//   {
//     pid: 5,
//     image: '/product/product-image.svg',
//     product: 'adawd',
//     price: 14.99,
//     quantity: 1
//   }
];

export default function CartTable () {
    return (
        <Table columns={columns} dataSource={data} />
    )
}
